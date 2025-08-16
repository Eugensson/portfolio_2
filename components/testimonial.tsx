"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { AnimatedText } from "@/components/animated-text";

import { TESTIMONIAL_DATA } from "@/constants";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperInstance | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <AnimatedText
          text="What Clients Say"
          textStyles="h2 mb-8 xl:mb-16 text-center"
        />
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-max xl:w-[500px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <ImQuotesLeft
              size={128}
              className="text-accent/20 leading-none mb-4"
            />
            <h3 className="h3 mb-2">{TESTIMONIAL_DATA[activeSlide].name}</h3>
            <p className="mb-8 max-w-[360px]">
              {TESTIMONIAL_DATA[activeSlide].message}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                type="button"
                className="text-2xl bg-accent text-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="text-2xl bg-accent text-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <SwiperClass
            slidesPerView={1}
            spaceBetween={5}
            loop
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[450px]"
          >
            {TESTIMONIAL_DATA.map(({ img }, index) => (
              <SwiperSlide key={index} className="h-full select-none">
                <div className="w-full h-full flex items-end">
                  <div
                    className={`${
                      activeSlide === index ? "h-full" : "h-60"
                    } relative w-full flex items-end rounded-2xl overflow-hidden transition-all duration-500`}
                  >
                    <Image
                      src={img}
                      fill
                      quality={100}
                      alt="Photo client"
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperClass>
        </div>
      </div>
    </section>
  );
};

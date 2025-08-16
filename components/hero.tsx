"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import { Stats } from "@/components/stats";
import { Header } from "@/components/header";
import { RotatingShape } from "@/components/rotating-shape";

export const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
      <Header />
      <div className="container h-full">
        <div className="relative z-20 h-full w-full xl:max-w-screen-md flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I build and</span> design powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blend aesthetic with
            performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button type="button" className="btn btn-accent mb-8">
              Contact me
            </button>
          </ScrollLink>
          <Stats />
        </div>
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[550px] h-[642px] -bottom-1 left-[6.5vw] z-40">
            <Image
              src="/assets/hero/dev.png"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 640px"
              quality="100"
              alt="Developer Image"
              className="object-contain"
            />
          </div>
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              alt="Arrow"
              width={160}
              height={160}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt="Rhombus icon"
                  style={{ width: "auto", height: "auto" }}
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          <div
            className="absolute top-[240px] xl:left-[34vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt="Hexagon icon"
                  style={{ width: "auto", height: "auto" }}
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt="Triangle icon"
                  style={{ width: "auto", height: "auto" }}
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

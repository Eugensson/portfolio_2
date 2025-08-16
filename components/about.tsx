"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AnimatedText } from "@/components/animated-text";

export const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="h-full container">
        <div className="h-full flex justify-center items-center">
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10" />
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex justify-center items-end">
                <Image
                  src="/assets/about/img.png"
                  width={350}
                  height={478}
                  quality={100}
                  alt="Developer Image"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="absolute top-1/2 -right-[65px] flex justify-center items-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt="Shape icon"
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <p className="text-5xl font-bold leading-none">10+</p>
                  <p className="leading-none text-center">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center xl:text-left w-full xl:w-1/2 mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="My Name is Noah" textStyles="h2 mb-2" />
              <p className="text-lg">Frontend Developer & UI/UX Designer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              I create visually stunning and functional websites using modern
              frontend technologies and design principles. Explore my work to
              see how I combine creativity with technical skills to deliver
              exceptional digital experience.
            </p>
            <ul className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0">
              <li className="max-w-max">
                <p className="uppercase font-bold text-primary">Age</p>
                <p>30 Years</p>
              </li>
              <li className="max-w-max">
                <p className="uppercase font-bold text-primary">Born in</p>
                <p>Ney York, NY</p>
              </li>
              <li className="max-w-max">
                <p className="uppercase font-bold text-primary">Phone</p>
                <p>+123-456-789</p>
              </li>{" "}
              <li className="max-w-max">
                <p className="uppercase font-bold text-primary">Email</p>
                <p>email@email.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

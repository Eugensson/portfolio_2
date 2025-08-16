"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Journey } from "@/components/journey";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { FixedMenu } from "@/components/fixed-menu";
import { Testimonial } from "@/components/testimonial";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

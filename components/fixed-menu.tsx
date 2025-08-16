"use client";

import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

import { Nav } from "@/components/nav";
import { Socials } from "@/components/socials";

export const FixedMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [showMenuButton, setShowMenuButton] = useState<boolean>(false);

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };

      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  if (!isMounted) return null;

  return (
    <section className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 w-full max-w-md md:max-w-none h-fit bottom-24 px-4 pointer-events-auto"
          >
            <div className="bg-white w-full shadow-custom max-w-[1170px] mx-auto p-12 xl:px-32 flex items-center gap-12 rounded-lg">
              <Nav
                containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                listStyles="flex flex-col justify-center gap-4"
                linkStyles="text-4xl font-primary text-primary cursor-pointer"
                spy
              />
              <div className="mx-auto hidden md:flex flex-col gap-4">
                <ul className="flex gap-12 mb-12">
                  <li className="flex flex-col">
                    <FiMapPin size={28} className="text-accent mb-2" />
                    <p className="text-primary font-semibold text-lg">
                      Location
                    </p>
                    <p>New York, NY</p>
                  </li>
                  <li className="flex flex-col">
                    <FiPhoneCall size={28} className="text-accent mb-2" />
                    <p className="text-primary font-semibold text-lg">Phone</p>
                    <p>+123 456 789</p>
                  </li>
                  <li className="flex flex-col">
                    <FiMail size={28} className="text-accent mb-2" />
                    <p className="text-primary font-semibold text-lg">Email</p>
                    <p>example@mail.com</p>
                  </li>
                </ul>
                <Socials
                  containerStyles="flex gap-2"
                  iconStyles="text-xl size-9 text-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobile ? (
        <div className="fixed z-50 bottom-16">
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex justify-center items-center select-none pointer-events-auto"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex justify-center items-center select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
};

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { AnimatedText } from "@/components/animated-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { WORK_DATA } from "@/constants";

export const Work = () => {
  const uniqueCategories = Array.from(
    new Set(WORK_DATA.map((item) => item.category))
  );
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);

  const filterWork =
    tabValue === "all"
      ? WORK_DATA.filter((item) => item.category !== "all")
      : WORK_DATA.filter((item) => item.category === tabValue);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="py-12 min-h-screen" id="work">
      <div className="container">
        <Tabs defaultValue={tabValue} className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-8">
            <AnimatedText text="My Latest Work" textStyles="h2 mb-8 xl:mb-0" />
            <TabsList className="max-w-max h-full mb-8 xl:mb-0 flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map(({ category }, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize w-32 cursor-pointer"
                  onClick={() => setTabValue(category)}
                  aria-label={`Switch to ${category} tab`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMoreItems}
                  type="button"
                  className="btn btn-accent"
                  aria-label="Load more items"
                >
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface WorkItemProps {
  href: string;
  category: string;
  img: string;
  title: string;
}

const WorkItem = ({ href, category, img, title }: WorkItemProps) => {
  return (
    <Link href={href} className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex justify-center items-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge
          variant="default"
          className="absolute z-40 top-6 left-6 capitalize text-white text-sm font-normal"
        >
          {category}
        </Badge>
        <Image
          src={img}
          alt={title}
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover aspect-square group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
        </div>
        <button
          type="button"
          className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 cursor-pointer"
          aria-label="View more details"
        >
          <FiArrowRight size={24} />
        </button>
      </div>
    </Link>
  );
};

"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { JOURNEY_DATA } from "@/constants";

export const CardList = () => {
  const renderCards = (type: "experience" | "education" | "skills") => {
    return JOURNEY_DATA.filter((item) => item.type === type).map(
      (card, index) => <Card key={index} {...card} type={type} />
    );
  };

  return (
    <Tabs
      defaultValue="experience"
      className="w-full flex flex-col items-center"
    >
      <TabsList className="max-w-max mb-8">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">My Skills</TabsTrigger>
      </TabsList>

      {["experience", "education", "skills"].map((type) => (
        <TabsContent key={type} value={type} className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {renderCards(type as "experience" | "education" | "skills")}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      ))}
    </Tabs>
  );
};

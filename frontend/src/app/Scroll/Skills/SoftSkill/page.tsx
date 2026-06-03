"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};



const softSkill = [
  {
    name: "Adaptability",
    icon: "/shuffle.svg",
    description: "Quickly adjust to new challenges, tools, and environments.",
  },
  {
    name: "Social Awareness",
    icon: "/globe.svg",
    description:
      "Understand others’ perspectives to build strong, effective interactions.",
  },
  {
    name: "Inititative",
    icon: "/zap.svg",
    description:
      "Take proactive action and turn ideas into results without waiting.",
  },
  {
    name: "Collaboration",
    icon: "/team-outlined.svg",
    description: "Work seamlessly with teams to achieve shared goals.",
  },
  {
    name: "Growth Mindset",
    icon: "/chart-line.svg",
    description: "Continuously learn, improve, and embrace new challenges.",
  },
  {
    name: "Critical and Creative Thinking",
    icon: "/light-bulb.svg",
    description: "Analyze deeply and generate innovative solutions.",
  },
  {
    name: "Applied Management Skills",
    icon: "/briefcase.svg",
    description: "Plan, organize, and execute projects efficiently.",
  },
  {
    name: "Digital & Technology Fluency",
    icon: "/laptop.svg",
    description: "Leverage modern tools and technologies with confidence.",
  },
  {
    name: "Problem Solving",
    icon: "/puzzle.svg",
    description: "Identify issues and deliver effective, practical solutions.",
  },
];

export default function SoftSkill() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-24 px-6 md:px-12 max-w-7xl mx-auto mt-5 min-h-screen"
    >

       <div className="space-y-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} //
          className="flex rounded-2xl w-1/3 p-6 items-center gap-5"
        >
          <div className="btn p-2 rounded-lg">
            <img src="/brain-cog.svg" alt="hard-skill" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold font-montserrat text-2xl">Soft Skills</h3>
            <p className="font-inter text-xs">Personalities</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 gap-4">
          {softSkill.map((sfSkill) => (
            <motion.div
              key={sfSkill.name}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex item-center gap-4 card shadow-lg p-6 rounded-2xl border-2 hover:scale-105 transition-all ease-in-out"
            >
              <div className="flex btn mb-4 w-auto h-full items-center justify-center rounded-lg p-2">
                <img src={sfSkill.icon} alt={sfSkill.name} className="size-7" />
              </div>
              <div className="flex flex-col">
                <p className="mb-2 text-lg font-bold">{sfSkill.name}</p>
                <p className="text-xs font-inter text-gray-400">
                  {sfSkill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
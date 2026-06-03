"use client";
import { useRef, useState } from "react";
import { Database, SquareCode, Award, Cpu } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectModal from "@/src/components/ui/modal/ProjectModal";
import ReadMoreCard from "@/src/components/ui/card/ReadMoreCard";
import Carousel from "@/src/components/features/carousel/ProjectCarousel";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCard from "@/src/components/ui/card/CertificateCard";
import StarScene from "@/src/components/background/StarScene";

const tech = [
  { name: "HTML", image: "/html.svg", category: "Front-end" },
  { name: "CSS", image: "/css.svg", category: "Styling" },
  { name: "Javascript", image: "/js.svg", category: "Language" },
  { name: "Python", image: "/python.svg", category: "Language" },
  { name: "Laravel", image: "/laravel.svg", category: "Framework" },
  { name: "PHP", image: "/php.svg", category: "Back-end" },
  { name: "Typescript", image: "/typescript-fill.svg", category: "Language" },
  { name: "React", image: "/react.svg", category: "Front-end" },
  { name: "Next JS", image: "/nextjs.svg", category: "Framework" },
  { name: "R", image: "/r.svg", category: "Language" },
  { name: "VS Code", image: "/vscode.svg", category: "Code Editor" },
  { name: "Tailwind CSS", image: "/tailwindcss.svg", category: "Styling" },
  { name: "Bootstrap", image: "/bootstrap.svg", category: "Styling" },
  { name: "Java", image: "/java.svg", category: "Language" },
  { name: "C", image: "/c.svg", category: "Language" },
  { name: "Figma", image: "/figma.svg", category: "Design" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -40, opacity: 0 },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HardSkill() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="skill"
      ref={sectionRef}
      className="py-24 md:py-5 px-6 md:px-12 max-w-7xl mx-auto mt-50 min-h-screen"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-16 mb-16"
      >
        <div className="mb-20 flex flex-col justify-center items-center">
          <h2 className="text-6xl font-bold mb-2">Skills and Technologies</h2>
          <div className="w-20 h-2 btn rounded-full mb-16" />
        </div>
        <div className="grid grid-cols-4 gap-4 text-justify">
          {tech.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              className="card shadow-xl flex rounded-2xl p-6 items-center gap-3 border-2 hover:scale-105 ease-in-out transition-all"
            >
              <div className="flex w-10 h-10 rounded-lg p-2 items-center justify-center">
                <img src={tool.image} alt={tool.name} className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-montserrat">{tool.name}</h3>
                <p className="font-inter text-xs">{tool.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

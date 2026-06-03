"use client";

import { useEffect } from "react";
import Carousel from "@/src/components/features/carousel/ProjectCarousel";
import { motion } from "framer-motion";
type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    fullDesc: string;
    contribution: string[];
    image: { src: string; alt: string; caption?: string }[];
    tags: string[];
    year: number | string;
    category: string;
  } | null;
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  // close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative modal rounded-2xl shadow-xl max-w-70 sm:max-w-lg lg:max-w-3xl w-full z-10 animate-fadeIn">
        <div className="absolute left-3 top-3 hidden sm:block btn py-1 px-2 rounded-xl text-xs min-w-25 max-w-45 items-center text-center font-inter text-white z-50">
          {project.category}
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 text-white bg-black/60  rounded-full z-59 cursor-pointer"
        >
          ✕
        </button>
        <div className="hidden sm:block">
          <Carousel images={project.image}/>
        </div>
        
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold mb-2 font-montserrat">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2 items-center">
            {project.tags.map((tech) => (
              <span
                className="flex items-center rounded-xl p-2 container text-white w-auto text-xs h-5"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mb-4 font-inter text-xs">{project.fullDesc}</p>
          <p className="font-inter text-xs">Contributions: </p>
          <div>
            {project.contribution.map((contr)=>(
              <div key={contr} className="flex flex-col">
              <span className="font-inter text-xs ">
                {contr}
              </span>
              </div>
            ))}
          </div>

        </div>

        <div className="absolute right-3 bottom-3 flex font-bold  p-2 text-xs w-15 h-10 items-center justify-center font-inter z-50">
          {project.year}
        </div>
      </div>
    </motion.div>
  );
}

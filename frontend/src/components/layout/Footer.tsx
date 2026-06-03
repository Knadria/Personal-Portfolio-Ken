"use client";
import { useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      ref={sectionRef}
      className="footer border-t-2 h-20 flex justify-around items-center font-montserrat"
    >
      <div className="hidden sm:block">
        <p className="font-bold text-lg">
          Kennard <span className="title font-bold">AK.</span>
        </p>
      </div>
      <div className="text-center text-xs sm:text-mds">
        <p>&copy; 2026 Made by Kennard Adrian Khouw</p>
      </div>
      <div className="gap-5 hidden sm:flex">
        <a
          href="https://www.linkedin.com/in/kennard-adrian-khouw-3b41a9178"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-13 h-13 card bdr-outline border-2 rounded-full justify-center items-center shadow-2xl "
        >
          <LinkedInIcon className="w-10" />
        </a>
        <a
          href="https://github.com/Knadria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-13 h-13 card bdr-outline border-2 rounded-full justify-center items-center shadow-2xl"
        >
          <GitHubIcon className="w-10" />
        </a>
      </div>
    </motion.section>
  );
}

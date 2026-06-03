"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TypingText from "@/src/components/features/hero/TypingText";

export default function SunHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="flex flex-col hero-bg relative items-cente min-h-screen h-screen bg-cover lg:bg-cover"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col w-screen  lg:w-1/2 space-y-3 justify-center h-full bg-white/10 backdrop-blur-l"
        >
          <div className="flex flex-col space-y-3 mx-10 lg:mx-30 text-center lg:text-left">
            <span className="text-lg  font-inter">
              Hi There, I'm{" "}
            </span>
            <span className="title font-bold text-4xl md:text-5xl lg:text-6xl font-inter">
              Kennard Adrian Khouw
            </span>
            <span className="text-md  text-white font-bold ext-center">
              <TypingText />
            </span>
            <p className="text-md hidden lg:block  font-inter text-cente leading-relaxed text-white/50">
              {" "}
              A creative developer crafting beautiful digital experiences with
              passion and precision. Crafting elegant solutions through code,
              design, and innovation
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 justify-center space-3">
              <button className="w-50 lg:w-1/2 rounded-full btn p-4 gap-3 text-white cursor-pointer">
                <a
                  href="#project"
                  className="flex justify-center items-center gap-3"
                >
                  View Work
                </a>
              </button>
              <button className="w-50 lg:w-1/2 rounded-full border-white/20 border-2 backdrop-blur-md p-4 gap-3 text-white cursor-pointer transition-all duration-150 ease-in-out">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-3"
                >
                  Get in Contact
                </a>
              </button>
            </div>

            <div className="flex gap-5 justify-center lg:justify-start mt-5">
              <a
                href="https://www.linkedin.com/in/kennard-adrian-khouw-3b41a9178/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-13 h-13 bg-[#1a1a18] bdr-outline border-2 rounded-full justify-center items-center transform-all duration-300 ease-in-out"
              >
                <LinkedInIcon className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/Knadria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-13 h-13 bg-[#1a1a18] bdr-outline border-2 rounded-full justify-center items-center transform-all duration-300 ease-in-out"
              >
                <GitHubIcon className="w-10" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

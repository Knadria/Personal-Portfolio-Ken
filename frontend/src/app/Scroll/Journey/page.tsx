"use client";

import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "The Spark",
    role: "Pascal Computer Club",
    description:
      "Started exploring programming fundamentals and problem-solving through school coding activities, building the foundation for a long-term passion in technology and software development.",
    tags: ["Pascal", "Sublime Text"],
    icon: "✦",
  },
  {
    year: "2021",
    title: "Learning Fundamentals",
    role: "C Computer Club",
    description:
      "Learned core programming concepts such as algorithms, logic building, data structures, and basic software development practices through collaborative club activities and hands-on coding exercises.",
    tags: ["C", "VS Code"],
    icon: "◈",
  },
  {
    year: "2023",
    title: "Learning Front-end",
    role: "BNCC Front-end Course",
    description:
      "Focused on modern front-end development by learning HTML, CSS, JavaScript, and responsive UI design while creating interactive web projects and improving development workflows.",
    tags: ["HTML", "CSS", "JS"],
    icon: "⬡",
  },
  {
    year: "2025",
    title: "ICOBAR Conference Participant",
    role: "Research Paper",
    description:
      "Participated in the ICOBAR conference by contributing to a research paper, gaining experience in academic research, collaboration, presentation, and analytical thinking in technology-related topics.",
    tags: ["Python", "Machine Learning", "Research Paper"],
    icon: "◎",
  },
  {
    year: "Now",
    title: "Internship",
    role: "IT Developer",
    description:
      "Currently working as an IT Developer intern, contributing to real-world projects, improving technical and teamwork skills, and gaining hands-on experience in software development and system implementation.",
    tags: ["React", "Tailwind CSS", "Next JS"],
    icon: "◎",
    active: true,
  },
];

function TimelineItem({
  item,
  index,
  isVisible,
}: {
  item: (typeof timelineData)[0];
  index: number;
  isVisible: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start gap-0 md:gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content card — desktop side */}
      <div
        className={`hidden md:flex w-[calc(50%-2rem)] ${
          isEven ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`
            group relative max-w-sm w-full rounded-2xl card border backdrop-blur-xs p-6
            transition-all duration-700 ease-out font-inter 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            hover:border-white/20 hover:bg-white/8 cursor-default
             
          `}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          {/* Year pill */}
          <span
            className={`inline-block mb-3 text-xs font-semibold tracking-widest uppercase  borders  bg-clip-text text-transparent`}
          >
            {item.year}
          </span>

          <h3 className="text-xl font-bold text-white mb-1 leading-tight">
            {item.title}
          </h3>
          <p
            className={`text-sm font-medium  borders bg-clip-text text-transparent mb-3`}
          >
            {item.role}
          </p>
          <p className="text-xs sm:text-sm text-[#CFCFCF] leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full container w-auto "
              >
                {tag}
              </span>
            ))}
          </div>

          {item.active && (
            <div className="absolute -top-2 -right-2 flex items-center gap-1.5 btn text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Now
            </div>
          )}
        </div>
      </div>

      {/* Center dot + line connector */}
      <div className="relative flex flex-col items-center z-10 shrink-0">
        <div
          className={`
            w-12 h-12 rounded-full border-2 border-white/20 bg-[#0c0c14]
            flex items-center justify-center text-lg
            transition-all duration-500 ease-out
            ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}
            ${item.active ? "ring-2 ring-offset-2 ring-offset-[#0c0c14] borders" : ""}
          `}
          style={{ transitionDelay: `${index * 120 + 60}ms` }}
        >
          <span className={` borders bg-clip-text text-transparent font-bold`}>
            {item.icon}
          </span>
        </div>
      </div>

      {/* Content card — desktop right side / mobile full */}
      <div
        className={`
          md:hidden flex-1
          ml-4
        `}
      >
        <div
          className={`
            group relative rounded-2xl border border-white/10 
            bg-white/5 backdrop-blur-sm p-5
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}

          `}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <span
            className={`inline-block mb-2 text-xs font-semibold tracking-widest uppercase  borders bg-clip-text text-transparent`}
          >
            {item.year}
          </span>
          <h3 className="text-lg font-bold text-white mb-0.5">{item.title}</h3>
          <p
            className={`text-sm font-medium  borders bg-clip-text text-transparent mb-2`}
          >
            {item.role}
          </p>
          <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-3">
            {item.description}
          </p>
           {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full container w-auto "
              >
                {tag}
              </span>
            ))}
          </div>
          {item.active && (
            <div className="absolute -top-2 -right-2 flex items-center gap-1 btn text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ">
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
              Now
            </div>
          )}
        </div>
      </div>

      {/* Desktop right empty space */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function TimelineJourney() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section
    id="journey"
    className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80  rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">My Journey</h2>
        <div className="w-40 h-2 btn rounded-full mb-16" />
      </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full w-full bg-linear-to-b from-transparent via-white/80 to-transparent" />
          </div>

          {/* Items */}
          <div className="flex flex-col gap-12">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                <TimelineItem
                  item={item}
                  index={index}
                  isVisible={visibleItems.has(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

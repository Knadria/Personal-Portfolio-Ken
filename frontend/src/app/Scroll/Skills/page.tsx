"use client";
import { useRef} from "react";
import { motion} from "framer-motion";

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

export function SoftSkill() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={sectionRef}
      className="py24 md:y-12 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} //
          className="flex rounded-2xl w-1/2 p-3 items-center gap-5"
        >
          <div className="btn p-2 rounded-lg hidden md:block">
            <img src="/brain-cog.svg" alt="hard-skill" className="h-6 w-6 md:w-8 md:h-8" />
          </div>
          <div>
            <h3 className="font-bold font-montserrat text-2xl">Soft Skills</h3>
            <p className="font-inter text-xs text-[#CFCFCF]">Personalities</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {softSkill.map((sfSkill) => (
            <motion.div
              key={sfSkill.name}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex item-center gap-4 card backdrop-blur-xs p-6 rounded-2xl border hover:scale-105 transition-all ease-in-out"
            >
              <div className=" btn mb-4 w-auto h-full items-center justify-center rounded-lg p-2 hidden lg:flex">
                <img src={sfSkill.icon} alt={sfSkill.name} className="size-7" />
              </div>
              <div className="flex flex-col">
                <p className="mb-2 text-lg font-bold">{sfSkill.name}</p>
                <p className="text-xs font-inter text-[#CFCFCF]">
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

export default function HardSkill() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-5 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} //
        className="flex rounded-2xl w-1/2 p-3 items-center gap-5"
      >
        <div className="btn p-2 rounded-lg hidden md:block">
          <img src="/technology.svg" alt="hard-skill" className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-bold font-montserrat text-2xl">Hard Skills</h3>
          <p className="font-inter text-xs text-[#CFCFCF]">Tools I Use</p>
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-16 mb-16"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-justify">
          {tech.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              className="card backdrop-blur-xs flex rounded-2xl p-6 items-center gap-3 border hover:scale-105 ease-in-out transition-all"
            >
              <div className="w-10 h-10 rounded-lg p-2 items-center justify-center hidden lg:block">
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

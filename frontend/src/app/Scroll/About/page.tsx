"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const personalInfo = [

  { category: "Education", info: "BINUS University" },
  { category: "Major", info: "Computer Science" },
  { category: "Email", info: "kennardkhouw@gmail.com" },
];
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stat = [
  {
    name: "Projects",
    total: "8",
  },
  {
    name: "Certificates",
    total: "6",
  },
  {
    name: "GPA",
    total: "3.83",
  },
];

const expertise = [
  {
    name: "Fullstack",
    level: 90,
    image: "/code.svg",
    tools: "React, Tailwind CSS, HTML, Next JS",
  },
  {
    name: "Machine Learning",
    level: 75,
    image: "/machine-learning.svg",
    tools: "Python, Scikit-learn, Pandas, NumPy",
  },
  {
    name: "Data Analysis",
    level: 85,
    image: "/data-analysis.svg",
    tools: "Python, R, Rapid Miner Studio, Tableau",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-24 px-6 md:px-12 max-w-7xl mx-auto mt-10 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} //
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
          About Me
        </h2>
        <div className="w-20 h-2 btn rounded-full mb-16" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} //
        className="flex flex-col items-center justify-center mb-10 gap-10"
      >
        <div className="flex flex-col lg:flex-row mt-4 gap-10 items-center p-10">
          <div className="relative p-10 h-120">
            <span className="absolute top-0 right-0 w-20 h-20 border-t-5 border-r-5 borders-about hidden sm:block"></span>
            <span className="absolute bottom-0 left-0 w-20 h-20 border-b-5 border-l-5 borders-about hidden sm:block"></span>
            <div className="w-60 sm:w-120 lg:w-80 h-full perspective-distant card inset-0 flex flex-col  rounded-2xl border border-border shadow-xl">
               <div className="flex flex-col items-center mb-10 space-y-7 bg-[url('/ProfileCard.jpg')] bg-cover rounded-t-2xl p-5">
                  <img
                    src="/Profile/Profile.jpg"
                    alt="Profile Image"
                    className="rounded-full border w-25 h-25 object-cover"
                  />
                  <h3 className="font-bold">Kennard Adrian Khouw</h3>
                </div>
              <div className=" px-1 sm:px-20 lg:px-5">
               
                <div>
                  {personalInfo.map((info) => (
                    <div
                      className="flex justify-between space-y-4"
                      key={info.category}
                    >
                      <p className="text-xs">{info.category}</p>
                      <p className="text-xs sm:text-sm">{info.info}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 justify-center mt-2">
                  <a
                    href="https://www.linkedin.com/in/kennard-adrian-khouw-3b41a9178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-13 h-13 card bdr-outline border-2  rounded-full justify-center items-center shadow-2xl"
                  >
                    <LinkedInIcon className="w-10 h-10" />
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
              </div>
            </div>
          </div>

          <div className="flex flex-col w-70 sm:w-100 md:w-140 lg:w-150 xl:w-170 gap-y-7 p-5 sm:p-0">
            <div className="leading-loose">
              <p className="text-justify font-inter text-sm sm:text-md lg:text-lg">
                I am a motivated and detail-oriented developer with a strong
                interest in front-end development. I enjoy solving problems,
                learning new technologies, and turning ideas into clean,
                functional digital experiences. I'm able to adapt quickly and
                can collaborate well to achieve higher goals.
                <br />
                <br />
                Over the past years, I have worked on various academic projects
                involving data analysis and front-end development. Through these
                projects, I have developed a solid foundation on HTML, CSS ,
                Javascript, Python, and SQL. In the meantime, I'm continously
                learning new skills, such as backend development, and exploring
                new front-end frameworks.
              </p>
            </div>

            <div className="flex gap-3 justify-center items-center">
              {stat.map((stats) => (
                <div
                  key={stats.name}
                  className="flex flex-col card backdrop-blur-xs border items-center justify-center rounded-2xl w-1/3 h-20 text-center p-3"
                >
                  <p className="text-md sm:text-xl">{stats.total}</p>

                  <p className="font-bold text-xs sm:text-sm">{stats.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3">
              <button className="md:w-1/2 rounded-full btn p-4 gap-3 text-white cursor-pointer">
                <a
                  href="/CV/CV.docx"
                  download
                  className="flex justify-center items-center gap-3"
                >
                  <Download />
                  Download CV
                </a>
              </button>
              <button className="md:w-1/2 rounded-full border-white/20 border bg-white/10  p-4 gap-3 text-white cursor-pointer transition-all duration-150 ease-in-out">
                <a
                  href="/CV/Transcript.pdf"
                  download
                  className="flex items-center justify-center gap-3"
                >
                  <Download />
                  Download Transcript
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {expertise.map((hdSkill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center card p-6 h-30 rounded-2xl space-y-3 shadow-lg backdrop-blur-xs border"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={hdSkill.image}
                    alt={hdSkill.name}
                    className="btn p-2 w-10 h-10 rounded-lg"
                  />
                  <span className="font-montserrat text-md">
                    {hdSkill.name}
                  </span>
                </div>
                <span className="font-inter font-bold">{hdSkill.level}%</span>
              </div>
              <div className="overflow-hidden rounded-full h-3 bgm border bdr-outline">
                <div
                  className="h-full btn"
                  style={{ width: `${hdSkill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

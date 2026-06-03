"use client";
import { useRef, useState } from "react";
import { Database, SquareCode, Award, Cpu } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectModal from "@/src/components/ui/modal/ProjectModal";
import ReadMoreCard from "@/src/components/ui/card/ReadMoreCard";
import Carousel from "@/src/components/features/carousel/ProjectCarousel";
import { motion, AnimatePresence } from "framer-motion";

const container_project = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item_project = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const pageVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

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

const webProjects = [
  {
    id: 1,
    name: "Cateringz",
    description:
      "Catering service website designed to help users easily browse, and order food packages for various events.",
    fullDesc:
      "Cateringz is a modern catering service platform designed to streamline the way users explore, customize, and order food packages for events of all sizes. The website focuses on delivering a seamless browsing experience, allowing customers to easily navigate through curated menus, compare packages, and tailor selections based on their specific needs whether for corporate functions, weddings, or private gatherings.",
    contribution: [
      "1. Designed the UI/UX using Figma.",
      "2. Developed the front-end section for home, products, testimonials, about us, register, and order page.",
    ],
    tags: ["HTML", "CSS", "Javascript", "Figma"],
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/Cateringz",
    image: [
      {
        src: "/Cateringz.png",
        alt: "Cateringz Home",
        caption: "Cateringz Home Page",
      },
      {
        src: "/CA-Order.png",
        alt: "Cateringz Order",
        caption: "Cateringz Order Page",
      },
      {
        src: "/CA-Register.png",
        alt: "Cateringz Register",
        caption: "Cateringz Register Page",
      },
      {
        src: "/CA-Testimonial.png",
        alt: "Cateringz Testimonial",
        caption: "Cateringz Testimonial Page",
      },
    ],
    year: 2024,
    category: "Website Application",
  },
  {
    id: 2,
    name: "PapuAdventure",
    description: "Tourism website designed to promote tourism in Papua. ",
    fullDesc:
      "PapuAdventure is a tourism-focused platform that showcases the natural beauty, cultural richness, and unique experiences of Papua. The website is designed to inspire exploration while providing practical information for travelers seeking authentic and immersive journeys.",
    contribution: [
      "1. Developed the front-end section for Papua accommodation and Papua foods page.",
    ],
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/PapuAdventure",
    image: [
      {
        src: "/PA-Accommodation.png",
        alt: "PA-Acco-Hero",
        caption: "Accommodation Page Hero",
      },
      {
        src: "/Papuadventure-Food.png",
        alt: "PA-Food-Hero",
        caption: "Food Page Hero",
      },
      {
        src: "/PA-Foods.png",
        alt: "PA-Foods",
        caption: "Foods Section in Food Page",
      },
      {
        src: "/PA-Restaurant.png",
        alt: "PA-Restaurant",
        caption: "Restaurant Sections in Food Page",
      },
      {
        src: "/PA-Hotels.png",
        alt: "PA-Hotels",
        caption: "Hotels Section in Accommodation Page",
      },
    ],
    year: 2024,
    category: "Website Application",
  },
  {
    id: 3,
    name: "ObeSight",
    description:
      "Obesity detection website designed to detect obesity and give workout or diet reccomendations.",
    fullDesc:
      "ObeSight is a health-focused web application that leverages artificial intelligence to provide early predictions into obesity risk. The platform is designed to help users understand their health status through data-driven analysis, promoting awareness and encouraging preventive action",
    contribution: [
      "1. Developed the front-end and back-end section.",
      "2. Developed the machine learning model starting from data collection.",
    ],
    tags: ["HTML", "CSS", "Javascript", "Python"],
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/ObesityDetection",
    image: [
      { src: "/ObeSight.png", alt: "OS Main Page", caption: "Main Page" },
      { src: "/OS-About.png", alt: "OS About Page", caption: "About Us Page" },
      {
        src: "/OS-Definition.png",
        alt: "OS Definition Page",
        caption: "Obesity Definition Page",
      },
      {
        src: "/OS-Obese Type.png",
        alt: "OS Obese Type Page",
        caption: "Obesity Types Page",
      },
    ],
    year: 2024,
    category: "Machine Learning",
  },
  {
    id: 4,
    name: "VerifAI",
    description:
      "AI detection website designed to detect the percentage of AI writing from an essay.",
    fullDesc:
      "VerifAI is an intelligent web platform developed to detect AI-generated content in written essays. As AI-generated text becomes increasingly prevalent, the platform addresses the growing need for authenticity verification in academic and professional settings.",
    contribution: [
      "1. Developed the front-end section for main page and home page.",
    ],
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/VerifAI/web",
    image: [
      { src: "/VA-Home.png", alt: "VA Home", caption: "Home Page" },
      { src: "/verifAI.png", alt: "VA Main", caption: "Main Page" },
      { src: "/VA-Login.png", alt: "VA Login", caption: "Login Page" },
      { src: "/VA-Register.png", alt: "VA Register", caption: "Register Page" },
    ],
    year: 2025,
    category: "Machine Learning",
  },
];

const dataProject = [
  {
    id: 1,
    name: "Analysis of Top 1000 Movies",
    description:
      "Finding pattern and trends, correlation between variables, and gives insight in making strategic decisions. Analyzing distributor performance based on world wide sales, number of films released based on the top five distributors, and finding correlation between sales feature.",
    tags: ["Python", "Data Preprocessing", "Tableau"],
    year: 2025,
    category: "Data Analysis",
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/Data%20Analysis",
  },
  {
    id: 2,
    name: "Movie Rating Prediction and Classification",
    description:
      "Comparing movie rating prediction performance between Decision Tree and Random Forest algorithm. Visualize Random Forest and Decision Tree confusion matrix, rating film distribution, correlation heatmap, and feature importance. ",
    tags: ["Python", "Decision Tree", "Random Forest"],
    year: 2025,
    category: "Big Data",
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/Big%20Data",
  },
  {
    id: 3,
    name: "Image-based Malware Detection",
    description:
      "Conducted a research with the title of 'AI in Cybersecurity: Leveraging CNN Models for Image-Based Malware Detection and Classification'. Compared the performance of CNN, ResNet-18, and VGG-19 model on image-based malware detection.",
    tags: ["Python", "CNN", "VGG-19", "ResNet-50"],
    year: 2025,
    category: "Machine Learning",
    link: "https://github.com/Knadria/Project-Collection/tree/3cda08343c4ee01519f6cc17e39bac04eb67178e/Malware%20Detection",
  },
];

const ITEMS_PER_PAGE = 2;

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: any) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const [activeTab, setActiveTab] = useState("webProjects");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(webProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = webProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="project"
      ref={sectionRef}
      className="py-24 md:py-5 px-6 md:px-12 max-w-7xl mx-auto mt-50 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">My Projects</h2>
        <div className="w-40 h-2 btn rounded-full mb-16" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10 flex-wrap mt-10"
      >
        <button
          onClick={() => setActiveTab("webProjects")}
          className={`flex w-1/3 sm:w-1/2 justify-center px-8 py-3 font-semibold text-sm sm:text-lg transition-all duration-300 cursor-pointer gap-1 ${
            activeTab === "webProjects"
              ? "btn text-white shadow-lg"
              : "bg-transparent borders border-2 border-white hover:bg-white"
          }`}
        >
          <SquareCode className="sm:block"/>
          Web Projects
        </button>

        <button
          onClick={() => setActiveTab("dataProject")}
          className={`flex w-1/3 sm:w-1/2 justify-center px-8 py-3 font-semibold text-sm sm:text-lg transition-all duration-300 cursor-pointer gap-1 ${
            activeTab === "dataProject"
              ? "btn text-white shadow-lg"
              : "bg-transparent borders border-2 border-white hover:bg-white"
          }`}
        >
          <Database className="sm:block"/>
          Data-based
        </button>
      </motion.div>
      <div>
        {activeTab === "webProjects" && (
          <div className="p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  variants={container_project}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 relative gap-6 mb-6 justify-center"
                >
                  {currentProjects.map((project) => (
                    <motion.div
                      className="flex justify-center"
                      key={project.id}
                      variants={item_project}
                    >
                      <div className="group relative card border backdrop-blur-xs rounded-xl  w-300">
                        <div className="sm:block hidden text-white absolute left-3 top-3 btn py-1 px-2 rounded-xl text-xs min-w-25 max-w-45 items-center text-center font-inter z-20">
                          {project.category}
                        </div>
                        <div className="absolute right-3 top-3 flex bg-black/80  text-white rounded-lg p-2 text-xs w-15 h-7 items-center justify-center font-inter z-20">
                          {project.year}
                        </div>
                        <Carousel images={project.image} />
                        <div className="p-6 space-y-3">
                          <p className="font-bold text-xl font-montserrat">
                            {project.name}
                          </p>
                          <div className="flex flex-col gap-2 font-inter">
                            <div className="flex flex-wrap gap-2 items-center">
                              {project.tags.map((tech) => (
                                <span
                                  className="flex items-center rounded-xl p-2 container text-white w-auto text-xs h-5 sm:h-7"
                                  key={tech}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <p className="text-justify text-xs sm:text-sm">
                              {project.description}
                            </p>
                            <div className="flex gap-2 justify-end mt-5 font-inter">
                              <button
                                className="w-1/2 borders border p-2 text-xs rounded-xl cursor-pointer ease-in-out duration-300 transition-all"
                                onClick={() => handleOpen(project)}
                              >
                                Details
                              </button>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-1/2 flex justify-center text-xs btn p-2 rounded-xl items-center gap-2 text-white cursor-pointer"
                              >
                                <GitHubIcon />
                                Github
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <ProjectModal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    project={selectedProject}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center w-auto items-center gap-2"
            >
              <div className="flex gap-2 font-inter">
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 btn text-white border bdr-outline rounded disabled:opacity-50 disabled:border-0 cursor-pointer"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 border bdr-outline rounded cursor-pointer ${
                        currentPage === page ? "btn text-white" : ""
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 btn text-white border bdr-outline rounded disabled:opacity-50 disabled:border-0 cursor-pointer"
                >
                  Next
                </button>
              </div>

              {totalPages > 1 && (
                <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </motion.div>
          </div>
        )}

        {activeTab === "dataProject" && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 p-10"
          >
            {dataProject.map((wProject) => (
              <motion.div variants={item} key={wProject.id}>
                <ReadMoreCard key={wProject.id} {...wProject} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

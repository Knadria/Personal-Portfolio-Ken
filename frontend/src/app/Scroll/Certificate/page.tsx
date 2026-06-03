"use client";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCard from "@/src/components/ui/card/CertificateCard";

const certificates = [
  {
    id: 1,
    name: "ICOBAR",
    year: 2025,
    image: "/ICOBAR.png",
    category: "Conference",
  },
  {
    id: 2,
    name: "BNCC Front-end",
    year: 2023,
    image: "/LnT.png",
    category: "Bootcamp",
  },
  {
    id: 3,
    name: "Beelingua C1.1",
    year: 2023,
    image: "/Beelingua-1.jpg",
    category: "Language Course",
  },
  {
    id: 4,
    name: "Beelingua C2.1",
    year: 2024,
    image: "/Beelingua-2.jpg",
    category: "Language Course",
  },
  {
    id: 5,
    name: "Beelingua C1.2",
    year: 2024,
    image: "/Beelingua-3.jpg",
    category: "Language Course",
  },
  {
    id: 6,
    name: "Beelingua C2.2",
    year: 2024,
    image: "/Beelingua-4.jpg",
    category: "Language Course",
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

export default function Certificates() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="certificate"
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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Certificates</h2>
        <div className="w-20 h-2 btn rounded-full mb-16" />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 justify-center gap-5"
      >
        {certificates.map((cert) => (
          <motion.div variants={item} key={cert.id}>
            <CertificateCard key={cert.id} {...cert} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

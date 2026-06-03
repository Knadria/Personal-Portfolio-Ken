"use client";
import { useState } from "react";

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Project from "@/src/app/Scroll/Projects/page";
import SunHero from "@/src/app/Scroll/Home/page";
import Contact from "@/src/app/Scroll/Contact/page";
import About from "@/src/app/Scroll/About/page";
import Certificates from "@/src/app/Scroll/Certificate/page";
import HardSkill,{SoftSkill} from "@/src/app/Scroll/Skills/page"
import TimelineJourney from "@/src/app/Scroll/Journey/page";
import ScrollProgress from "@/src/components/features/navbar/ScrollProgress";
import NeuralNetworkBackground from "@/src/components/background/NNBackground";
import "@/src/styles/globals.css";
type Stage = "entry" | "loading" | "portfolio";
export default function Portfolio() {
  const [stage, setStage] = useState<Stage>("portfolio");
  const [hideOnDown, setHideOnDown] = useState(false);
  return (
    <>
      {stage === "portfolio" && (
        <main>
         
          <ScrollProgress />
          <Navbar threshold={10} hideOnDown={hideOnDown}/>
          <SunHero />
          <NeuralNetworkBackground />
          <About />
          <HardSkill />
          <SoftSkill />
        
          <TimelineJourney />
         
          <Project />
          <Certificates />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

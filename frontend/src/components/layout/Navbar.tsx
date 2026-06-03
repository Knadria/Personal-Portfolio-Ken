"use client";

import { useState, useEffect, useRef } from "react";
import ThemeToggle from "@/src/components/features/navbar/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import DropDown from "@/src/components/features/navbar/DropDown";
const NavLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Journey", href: "journey" },
  { label: "Projects", href: "project" },
  { label: "Certificates", href: "certificate" },
  { label: "Contact", href: "contact" },
];

export function useScrollNavbar({ threshold = 10, hideOnDown = false } = {}) {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 1);

      if (hideOnDown) {
        const goingUp = y < lastY.current;
        setVisible(y > threshold && goingUp);
      } else {
        setVisible(y > threshold);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, hideOnDown]);

  return { visible, atTop };
}

export default function Navbar({ threshold = 10, hideOnDown = false }) {
  const { visible } = useScrollNavbar({ threshold, hideOnDown });
  const [activeSection, setActiveSection] = useState("");

  return (
    <header className={`flex justify-center items font-montserrat `}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`backdrop-blur-3xl border-b border-border  shadow-sm nav flex w-full items-center justify-between h-20 fixed z-40  px-7 transition-all duration-300`}
          
         
        >
          <div className="flex items-center gap-5">
            <div className="md:hidden">
               <DropDown />
            </div>
            <a href="#home" className="font-bold text-2xl hidden sm:flex">
              Kennard <span className="title font-bold">AK.</span>
            </a>
            
          </div>

          <nav className="flex justify-center items-center gap-8">
            <div>
              <ul className="hidden md:flex items-center gap-8">
                {NavLinks.map((link) => (
                  <li key={link.href} className="items-center">
                    <a
                      href={`#${link.href}`}
                      className="relative text-sm font-bold links after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="flex gap-6 items-center">
           
            <ThemeToggle />
          </div>
        </motion.div>
      </AnimatePresence>
    </header>
  );
}

"use client";

import React, { useState } from "react";


export default function AboutCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="about-card relative w-full rounded-2xl h-full overflow-hidden cursor-pointer bg-[#0f0d1a]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "0.5px solid rgba(180,160,255,0.15)",
      }}
    >
      {/* Image */}
      <img
        src="/aurora-white.png"
        alt="Profile"
        style={{
         
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        className="block w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, transparent 70%)",
      
   
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div
        style={{
         
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="absolute bottom-0 left-0 right-0 p-5"
      >

         <p 
         className="mt-auto text-center text-xs text-gray-400 dark:text-neutral-600"
          style={{
           
            transition: "opacity 0.3s ease 0.1s, transform 0.35s ease 0.1s",
          }}
         >Tap to learn more ↓</p>
      </div>
    </div>
  );
}

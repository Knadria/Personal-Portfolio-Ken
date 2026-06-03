"use client";
import { useState } from "react";

export type Certificate = {
  name: string;
  year: number;
  image: string;
  category: string;
};

export default function CertificateCard({
  name,
  year,
  image,
  category,
}: Certificate) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-3 relative group cursor-pointer"
    >
      
      <a href={image} download className="rounded-3xl cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-70 object-cover rounded-3xl"
        />
        {/* Gradient overlay */}
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="absolute inset-0"
      />
        <div
          style={{
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className="absolute bottom-0 left-0 right-0 p-5"
        >
          {/* Name */}
          <h3
            style={{
              fontWeight: 600,
              margin: "0 0 4px",
              lineHeight: 1.3,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(6px)",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="font-inter text-[#f5f2ff] text-lg"
          >
            {name}
          </h3>

          {/* Role */}
          <div className="flex gap-3">
            <p
              style={{
                fontWeight: 300,
                margin: "0 0 12px",
                letterSpacing: "0.02em",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease 0.1s, transform 0.35s ease 0.1s",
              }}
              className="text-sm text-[#CFCFCF]"
            >
              {category}
            </p>
            <p
              style={{
                fontWeight: 300,
                margin: "0 0 12px",
                letterSpacing: "0.02em",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease 0.1s, transform 0.35s ease 0.1s",
              }}
              className="text-sm text-[#CFCFCF]"
            >
              {year}
            </p>
          </div>
        </div>
      </a>
      {/* Content */}
    </div>
  );
}

"use client";

import { useState } from "react";
import AboutCard from "@/src/components/ui/card/AboutFront";
import { Mail, Phone, GraduationCap, Award } from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const personalInfo = [
  { category: "Age", info: 20 },
  { category: "Education", info: "BINUS University" },
  { category: "Major", info: "Computer Science" },
  { category: "Email", info: "kennardkhouw@gmail.com" },
  { category: "Phone", info: "081510667868" },
  { category: "Location", info: "Cipondoh, Tangerang" },
];

export default function ProfileCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="card-wrapper w-60 sm:w-120 lg:w-80"
      onClick={() => setFlipped((f) => !f)}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
    >
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        {/* FRONT */}
        <div className="card-face card-front h-auto">
          <AboutCard />
        </div>

        {/* BACK */}
        <div className="card absolute inset-0 flex flex-col justify-around rounded-2xl border border-border p-2 shadow-xl backface-hidden transform-[rotateY(180deg)]">
          
        </div>
      </div>

      <style jsx>{`
        .card-wrapper {
          perspective: 1000px;
          height: 100%;
          user-select: none;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .card-inner.flipped {
          transform: rotateY(180deg);
        }
        .card-face {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.2s;
        }
        .card-face:hover {
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

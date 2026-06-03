"use client";

import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
type ReadCardProps = {
  name: string;
  description: string;
  tags: string[];
  year: number;
  category: string;
  link: string;
};

export default function ReadMoreCard({
  name,
  description,
  tags,
  year,
  category,
  link,
}: ReadCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex justify-center p-0">
      <div className="group card border-2 backdrop-blur-xs rounded-xl p-5 space-y-3">
        <div className="w-full flex justify-between">
          <div className="space-y-2">
            <p className="borders border-2 py-1 px-2 rounded-xl text-xs min-w-25 max-w-45 items-center text-center font-inter">
              {category}
            </p>
            <p className="font-bold text-xl font-montserrat">{name}</p>
          </div>
          <p className="flex font-bold rounded-lg p-2 text-xs w-15 h-7 items-center justify-center font-inter">
            {year}
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-10 font-inter">
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tech) => (
              <span
                className="flex items-center rounded-xl p-2 container text-white w-auto text-xs h-5 md:h-7"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
          <p
            className={`text-xs md:text-sm transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 read-btn text-sm font-medium cursor-pointer"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center btn p-2 rounded-xl items-center gap-2 text-white cursor-pointer font-inter"
        >
          <GitHubIcon />
          Github
        </a>
      </div>
    </div>
  );
}

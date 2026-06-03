"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: { src: string; alt: string; caption?: string }[];
  year: string;
  category: string;
}

export default function Carousel({ images }: { images: Project["image"] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating || next === current) return;
      setDirection(dir);
      setAnimating(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 320);
    },
    [animating, current],
  );

  const prev = () => go((current - 1 + images.length) % images.length, "left");
  const next = () => go((current + 1) % images.length, "right");

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const img = images[current];

  return (
    <div className="carousel-root">
      {/* Track */}
      <div className="carousel-track relative">
        <div
          key={current}
          className={`carousel-slide ${animating ? (direction === "right" ? "slide-in-right" : "slide-in-left") : ""}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="carousel-img"
            loading={current === 0 ? "eager" : "lazy"}
          />
          {/* Gradient overlay */}
          <div className="carousel-gradient" />
        </div>

        {/* Caption */}
        {img.caption && <div className="carousel-caption">{img.caption}</div>}

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="carousel-btn carousel-btn-left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="carousel-btn carousel-btn-right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        {images.length > 1 && (
          <div className="carousel-counter">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "right" : "left")}
              aria-label={`Go to image ${i + 1}`}
              className={`carousel-dot ${i === current ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

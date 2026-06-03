"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId: number;

    const mouse = {
      x: -9999,
      y: -9999,
      radius: 140,
    };

    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;

    const themes = {
      light: {
        bg: "#070707",
        node: "rgba(37, 99, 235, 0.95)",
        line: "rgba(37, 99, 235, 0.14)",
        glow: "rgba(37, 99, 235, 0.35)",
      },

      dark: {
        bg: "#070707",
        node: "rgba(245, 29, 49, 0.95)",
        line: "rgba(245, 29, 49, 0.14)",
        glow: "rgba(245, 29, 49, 0.45)",
      },
      root: {
        bg: "#070707",
        node: "rgba(168, 85, 247, 0.95)",
        line: "rgba(168, 85, 247, 0.14)",
        glow: "rgba(168, 85, 247, 0.45)",
      },
    };

    const current =
      resolvedTheme === "dark"
        ? themes.dark
        : resolvedTheme === "light"
        ? themes.light
        : themes.root;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const NODE_COUNT = Math.min(
      200,
      Math.floor((width * height) / 15000)
    );

    const nodes: Node[] = Array.from(
      { length: NODE_COUNT },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      })
    );

    const distance = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) => {
      const dx = x1 - x2;
      const dy = y1 - y2;

      return Math.sqrt(dx * dx + dy * dy);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = current.bg;
      ctx.fillRect(0, 0, width, height);

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dist = distance(
            n1.x,
            n1.y,
            n2.x,
            n2.y
          );

          if (dist < 130) {
            const opacity = 1 - dist / 130;

            ctx.strokeStyle = current.line.replace(
              /[\d.]+\)$/,
              `${opacity * 0.18})`
            );

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Mouse interaction
      for (const node of nodes) {
        const dist = distance(
          node.x,
          node.y,
          mouse.x,
          mouse.y
        );

        if (dist < mouse.radius) {
          const opacity =
            1 - dist / mouse.radius;

          ctx.strokeStyle = current.glow.replace(
            /[\d.]+\)$/,
            `${opacity * 0.8})`
          );

          ctx.lineWidth = 1.2;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Nodes
      for (const node of nodes) {
        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          2.2,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = current.node;

        ctx.shadowColor = current.glow;
        ctx.shadowBlur = 12;

        ctx.fill();

        ctx.shadowBlur = 0;

        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= width)
          node.vx *= -1;

        if (node.y <= 0 || node.y >= height)
          node.vy *= -1;
      }

      animationFrameId =
        requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (
      e: MouseEvent
    ) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
    />
  );
}
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;


  return (
    <div className="flex">
      <button
        onClick={() => setTheme("dark")}
        className="
        w-20 h-10 theme rounded-l-lg shadow-lg transition-all duration-300
        flex items-center justify-center cursor-pointer bdr-outline border"
      >
        Red
      </button>
      <button
        onClick={() => setTheme("light")}
        className="
        w-20 h-10 theme rounded-r-lg shadow-lg transition-all duration-300
        flex items-center justify-center cursor-pointer bdr-outline border"
      >
        Blue
      </button>

    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const NavLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Journey", href: "journey" },
  { label: "Projects", href: "project" },
  { label: "Certificates", href: "certificate" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-[rgba(0,0,0,0.5)] text-white rounded cursor-pointer"
      >
        ☰
      </button>

      {open && (
        <nav className="absolute mt-4 w-25  bg-[rgba(0,0,0,0.5)] shadow-lg">
          <ul className="justify-center flex flex-col">
            {NavLinks.map((link) => (
              <li key={link.href} className="items-center mt-2 ml-2">
                <a
                  href={`#${link.href}`}
                  className="relative text-xs font-bold links"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

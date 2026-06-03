"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
export default function WelcomePage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="relative flex flex-col min-h-screen h-screen  justify-center bg-cover items-center font-inter bg-[url('/aurora-white.png')]"
    >
      <div className="absolute flex flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-15">
        <div>
          <h1 className="text-7xl font-bold text-center font-montserrat">
            Welcome <br /> To My <br /> Portfolio
          </h1>
        </div>

        <div className="flex gap-5 justify-center mt-5">
          <button
            onClick={() => router.push("/Scroll")}
            className="test w-50 h-15 border-white/20 bg-white/10 rounded-full border backdrop-blur-3xl  p-2 cursor-pointer transition-all duration-300 ease-out"
          >
            Scroll Version
          </button>
        </div>
      </div>
    </section>
  );
}

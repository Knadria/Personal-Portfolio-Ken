"use client";


export type Profile = {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: { linkedin?: string; twitter?: string; email?: string };
};



export function FlipCard() {
  return (
    <div className="z-10 h-full ">
      <div className="group perspective-distant h-full w-full">
        <div className="relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-card shadow-lg backface-hidden">
            <img
              src="/Cateringz.png"
              alt="Profile Picture"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Back */}
         
        </div>
      </div>
    </div>
  );
}

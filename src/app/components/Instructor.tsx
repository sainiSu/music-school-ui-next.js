"use client";
import React from "react";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image: "/image1.jpg",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    image: "/image2.jpg",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image: "/image3.jpg",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image: "/image5.jpg",
  },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-amber-200 font-bold text-base text-centermb-4">
          Discover The Talented Profesionals Who Will Guide You In Your Musical
          Jourrney{" "}
        </p>

        <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructor;

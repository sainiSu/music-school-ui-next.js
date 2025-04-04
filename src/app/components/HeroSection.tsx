import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-visible mx-auto py-10 md:py-0">


      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />

      <div className="p-4 relative z-10 w-full text-center"></div>

      <h1 className="mt-15 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-40 to-neutral-100">
        Master The Art Of Music
      </h1>

      <p className="mt-10 font-normal text-base md:text-lg text-neutral-400 max-w-lg mx-auto">
        Explore our immersive music courses and take your musical journey to the
        next level! Whether you are just starting out or aiming to perfect your
        skills, join us and unlock your full potential.
      </p>

      <div className="mt-4">
        <Link href={"/courses"}>

        <Button borderRadius="1.75rem" className="bg-black text-lg font-bold ">Explore Courses </Button>

        </Link>
      </div>
    </div>
  );
}
export default HeroSection;

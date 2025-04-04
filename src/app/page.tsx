//import Image from "next/image";

import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import TestimonialCard from "./components/TestimonialCard";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import UpcomingWebinars from "./components/UpcomingWebinars";
import  WhyUs  from "./components/whyus";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen  antialiased bg-grid-white"> 
     <HeroSection/>
    <TypewriterEffect 
    words={[
          { text: "Master The Art Of Music" },
          { text: "Unlock Your Full Potential" },
          { text: "Join Us Today" },
        ]}
      />
      <FeaturedCourses/>
      <WhyUs/>
      <TestimonialCard/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}

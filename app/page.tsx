"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Projects";
import Certificates from "@/components/Certificates";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Education from "@/components/Education";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("aaa")
    }
  }, []);
  

  return (
    
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Education></Education>
        <Certificates />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

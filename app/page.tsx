"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import ProjectMonitor from "./components/ProjectMonitor";
import BiomechanicalSkills from "./components/BiomechanicalSkills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactRelay from "./components/ContactRelay";
import CustomCursor from "./components/CustomCursor";
import PowerLine from "./components/PowerLine";
import SystemBoot from "./components/SystemBoot";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen cursor-none"> {/* cursor-none nasconde quello di default */}
      
      {/* 1. Loading Screen */}
      {!isLoaded && <SystemBoot onComplete={() => setIsLoaded(true)} />}

      {/* 2. Global UI Elements (Visibili solo dopo il load) */}
      <CustomCursor />
      <PowerLine />
      
      {/* 3. Global Noise Texture */}
      <div className="fixed inset-0 z-[50] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 4. Contenuto Principale */}
      <Hero />
      <ProjectMonitor />
      <BiomechanicalSkills />
      <ExperienceTimeline />
      <ContactRelay />
    </main>
  );
}
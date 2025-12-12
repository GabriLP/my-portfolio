"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        id: "CORE",
        title: "SYSTEM_CORE",
        skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js 14", "HTML5 / CSS3"]
    },
    {
        id: "GRAPHICS",
        title: "VISUAL_ENGINE",
        skills: ["Three.js / R3F", "WebGL", "GLSL Shaders", "Tailwind CSS", "GSAP / Framer"]
    },
    {
        id: "GAMEDEV",
        title: "SIMULATION",
        skills: ["Unity (C#)", "Unreal Engine 5", "Blender", "Physics Engines", "State Machines"]
    },
    {
        id: "TOOLS",
        title: "HARDWARE_I/O",
        skills: ["Git / GitHub", "Figma", "Vercel", "VS Code", "Performance Profiling"]
    }
];

export default function BiomechanicalSkills() {
    const sectionRef = useRef(null);
    const coreContainerRef = useRef(null);
    const imageRef = useRef(null);
    const scannerRef = useRef(null);
    const categoriesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. FLUTTUAZIONE ORGANICA
            gsap.to(imageRef.current, {
                y: 15, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut"
            });
            gsap.to(imageRef.current, {
                scale: 1.05, duration: 2, yoyo: true, repeat: -1, ease: "power1.inOut"
            });

            // 2. ROTAZIONE ANELLI
            gsap.to(coreContainerRef.current, {
                rotation: 360, duration: 30, repeat: -1, ease: "none"
            });

            // 3. LASER SCANNER (Movimento verticale)
            gsap.to(scannerRef.current, {
                top: "100%", duration: 2, ease: "linear", repeat: -1, yoyo: true
            });

            // 4. ENTRATA SKILLS
            categoriesRef.current.forEach((el) => {
                gsap.fromTo(el,
                    { x: 50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
                        scrollTrigger: { trigger: el, start: "top 85%" }
                    }
                );
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !categoriesRef.current.includes(el)) categoriesRef.current.push(el);
    };

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-[#050505] text-[#e0e0e0] overflow-hidden py-24 flex items-center">

            {/* SFONDO DINAMICO (Nebbia + Griglia) */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center relative z-10">
                {/* === LEFT: THE CORE === */}
                <div className="relative flex justify-center items-center order-2 md:order-1 h-[500px]">

                    {/* BACKLIGHT GLOW (Luce volumetrica dietro) */}
                    <div className="absolute w-[300px] h-[300px] bg-yellow-600/20 blur-[100px] animate-pulse"></div>

                    {/* ROTATING RINGS Container */}
                    <div ref={coreContainerRef} className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] flex items-center justify-center pointer-events-none">
                        {/* Tech Circles */}
                        <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                        <div className="absolute inset-[40px] border border-dashed border-yellow-500/20 rounded-full"></div>
                        <div className="absolute inset-[-20px] border border-white/5 rounded-full border-t-transparent border-b-transparent rotate-45"></div>

                        {/* Decorazioni Tech */}
                        <div className="absolute top-0 w-1 h-8 bg-yellow-500 shadow-[0_0_10px_#ffcc00]"></div>
                        <div className="absolute bottom-0 w-1 h-8 bg-yellow-500 shadow-[0_0_10px_#ffcc00]"></div>
                        <div className="absolute left-0 w-8 h-1 bg-white/20"></div>
                        <div className="absolute right-0 w-8 h-1 bg-white/20"></div>
                    </div>

                    {/* CORE IMAGE & SCANNER */}
                    <div ref={imageRef} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                        {/* Holographic Sphere Overlay */}
                        <div className="absolute inset-[-10px] rounded-full border border-white/10 opacity-30 z-20 pointer-events-none"></div>

                        {/* LASER SCANNER EFFECT */}
                        <div ref={scannerRef} className="absolute left-[-20%] right-[-20%] h-[2px] bg-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-30 blur-[1px]"></div>

                        {/* FERROFLUID with MASK */}
                        <div className="absolute inset-0 z-10 [mask-image:radial-gradient(circle,black_50%,transparent_75%)]">
                            <Image
                                src="/assets/ferrofluid.webp"
                                alt="Biomechanical Core"
                                fill
                                className="object-contain scale-110" // Leggermente zoomato
                            />
                        </div>

                        {/* Inner Glow to make it pop */}
                        <div className="absolute inset-[30%] bg-rust-primary blur-[60px] opacity-40 mix-blend-color-dodge z-0 animate-pulse"></div>
                    </div>
                </div>

                {/* === RIGHT: DATA / SKILLS === */}
                <div className="space-y-12 order-1 md:order-2">

                    <div className="mb-8">
                        <h2 className="font-industrial text-6xl md:text-8xl text-white mb-2 leading-[0.8]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">BIO</span>_MECH<br />
                            <span className="text-white/20">CORE</span>
                        </h2>
                        <div className="h-1 w-20 bg-yellow-500 mt-4 mb-4 shadow-[0_0_15px_#ffcc00]"></div>
                        <p className="font-mono text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
                            Injecting <span className="text-white">game engine physics</span> into DOM structures.
                            The web is no longer static. It is a living simulation.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {skillCategories.map((cat, i) => (
                            <div key={cat.id} ref={addToRefs} className="relative group">

                                {/* Header Categoria Tech */}
                                <div className="flex items-center mb-4">
                                    <span className="font-mono text-[10px] text-yellow-500/80 mr-3 border border-yellow-500/30 px-1">
                                        0{i + 1}
                                    </span>
                                    <h3 className="font-industrial text-2xl text-white tracking-wide">
                                        {cat.title}
                                    </h3>
                                    {/* Linea decorativa che si illumina all'hover */}
                                    <div className="h-[1px] bg-white/10 flex-grow ml-4 group-hover:bg-yellow-500/50 transition-colors duration-500 shadow-[0_0_0px_transparent] group-hover:shadow-[0_0_10px_#ffcc00]"></div>
                                </div>

                                {/* Chips */}
                                <div className="flex flex-wrap gap-3">
                                    {cat.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="relative overflow-hidden font-mono text-xs md:text-sm px-4 py-2 bg-[#111] border border-white/10 text-gray-400 transition-all duration-300 hover:text-black hover:border-yellow-400 group/chip clip-path-slant"
                                        >
                                            {/* Hover Fill Effect */}
                                            <div className="absolute inset-0 bg-yellow-500 translate-y-[100%] group-hover/chip:translate-y-0 transition-transform duration-300 z-0"></div>
                                            <span className="relative z-10">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "FILE_01",
        title: "CYBER_SLUMS",
        tech: "UNITY / C#",
        status: "RELEASED",
        desc: "FPS movement prototype with advanced wall-running mechanics.",
        date: "2024.11.02"
    },
    {
        id: "FILE_02",
        title: "NEON_DRIFT",
        tech: "THREE.JS / REACT",
        status: "W.I.P.",
        desc: "WebGL racing game running directly in browser shader buffer.",
        date: "2025.01.15"
    },
    {
        id: "FILE_03",
        title: "ECHO_CHAMBER",
        tech: "UNREAL 5",
        status: "CORRUPTED",
        desc: "Psychological horror environment test. Lighting study.",
        date: "2023.08.20"
    },
    {
        id: "FILE_04",
        title: "UI_SYSTEM_V2",
        tech: "TYPESCRIPT",
        status: "ARCHIVED",
        desc: "Modular inventory system for RPGs.",
        date: "2023.02.10"
    },
];

export default function ProjectMonitor() {
    const sectionRef = useRef(null);
    const screenContentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(screenContentRef.current,
                { opacity: 0.1, filter: "brightness(0.2) blur(2px)" },
                {
                    opacity: 1,
                    filter: "brightness(1) blur(0px)",
                    duration: 0.1,
                    yoyo: true,
                    repeat: 4,
                    ease: "steps(1)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 bg-[#050505] z-20">

            <div className="text-center mb-10">
                <h2 className="font-industrial text-5xl text-rust-primary mb-2 tracking-wide">ARCHIVES</h2>
                <p className="font-mono text-gray-500 text-sm animate-pulse">
                    SELECT DATA CARTRIDGE_
                </p>
            </div>

            {/* MONITOR CONTAINER */}
            {/* MODIFICA: Da aspect-4/3 a aspect-square per adattarsi al 1024x1024 */}
            <div className="relative w-[90vw] max-w-[1024px] aspect-square max-h-[1024px]">

                {/* CORNICE MONITOR */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                    <Image
                        src="/assets/monitor-frame.webp"
                        alt="CRT Monitor"
                        fill
                        className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                    />
                    {/* Riflesso vetro */}
                    <div className="absolute top-[15%] left-[15%] right-[15%] h-[20%] bg-gradient-to-b from-white/5 to-transparent rounded-[50%] z-40 pointer-events-none blur-xl"></div>
                </div>

                {/* SCHERMO (Sotto) */}
                <div className="absolute z-10 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,1)] bg-[#0a0f0a]
                    top-[28%]      /* Scendiamo ancora (era troppo alto) */
                    bottom-[35%]   /* Saliamo molto (il mento sotto è grosso) */
                    left-[24%]     /* Spostiamo a DESTRA (era troppo a sinistra) */
                    right-[24%]    /* Questo sembrava ok, forse stringiamo appena */
                            rounded-[40px]
                ">

                    {/* Scanlines */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]"></div>

                    {/* CONTENUTO SCROLLABILE */}
                    {/* Aggiunto padding-right (pr-4) per non far sovrapporre il testo alla scrollbar */}
                    <div ref={screenContentRef} className="w-full h-full overflow-y-auto pt-8 pb-8 px-6 custom-scrollbar relative z-10 opacity-0">
                        <div className="flex justify-between border-b border-green-800/50 pb-2 mb-4 text-[9px] md:text-[10px] font-mono text-green-700">
                            <span>USR: GABRIELE</span>
                            <span>MEM: 64TB FREE</span>
                        </div>

                        <div className="space-y-4">
                            {projects.map((p) => (
                                <div key={p.id} className="group relative border border-green-900/30 bg-green-900/5 hover:bg-green-500/10 p-3 transition-all cursor-pointer">
                                    {/* Hover Marker */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-yellow-500 transition-colors"></div>

                                    <div className="flex flex-col mb-1">
                                        <h3 className="font-industrial text-lg md:text-xl text-gray-300 group-hover:text-yellow-400 transition-colors leading-tight">
                                            {p.title}
                                        </h3>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="font-mono text-[9px] text-green-500">&gt; {p.tech}</span>
                                            <span className="font-mono text-[8px] text-green-600 border border-green-900 px-1 ml-2">
                                                {p.status}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="font-mono text-[10px] text-gray-400 line-clamp-2 opacity-70 group-hover:opacity-100 mt-1 leading-snug">
                                        {p.desc}
                                    </p>

                                    <div className="mt-2 text-[8px] text-green-800 text-right">
                                        MODIFIED: {p.date}
                                    </div>
                                </div>
                            ))}

                            {/* Spazio extra in fondo per scrollare comodamente l'ultimo elemento */}
                            <div className="h-12"></div>
                        </div>

                    </div>
                </div>

            </div>

        </section >
    );
}
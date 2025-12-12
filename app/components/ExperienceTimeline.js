"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const history = [
    {
        role: "GAME DEVELOPER",
        company: "FREELANCE / INDIE",
        period: "2022 - PRESENT",
        desc: "Developing prototypes in Unity & Unreal. Focusing on gameplay mechanics and shader programming.",
        tech: ["Unity", "C#", "HLSL"]
    },
    {
        role: "FRONT END DEV",
        company: "TECH AGENCY",
        period: "2020 - 2022",
        desc: "Building high-performance web interfaces using React. Integrating 3D elements via Three.js.",
        tech: ["React", "TypeScript", "WebGL"]
    },
    {
        role: "JUNIOR DEV",
        company: "STARTUP LAB",
        period: "2019 - 2020",
        desc: "UI implementation and asset optimization for mobile applications.",
        tech: ["JavaScript", "Sass"]
    }
];

export default function ExperienceTimeline() {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const liquidRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ANIMAZIONE LIQUIDO: Il tubo si riempie scrollando
            gsap.fromTo(liquidRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center", // Inizia quando la sezione è a metà schermo
                        end: "bottom center", // Finisce quando la sezione finisce
                        scrub: true // Legato allo scroll
                    }
                }
            );

            // ANIMAZIONE CARD: Appaiono quando il liquido le raggiunge
            gsap.utils.toArray(".timeline-card").forEach((card) => {
                gsap.fromTo(card,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1, x: 0, duration: 0.5,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%", // Appare un po' prima
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-[#050505] py-32 px-4 md:px-0">

            <div className="max-w-5xl mx-auto relative">

                {/* Header Sezione */}
                <div className="mb-20 pl-12 md:pl-0">
                    <h2 className="font-industrial text-5xl text-gray-500 mb-2">SYSTEM_LOGS</h2>
                    <p className="font-mono text-yellow-500 text-sm">{"// HISTORY_TRACKING_ENABLED"}</p>
                </div>

                {/* === IL TUBO (TIMELINE) === */}
                {/* Tubo vuoto (Sfondo) */}
                <div ref={lineRef} className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-32 bottom-0 w-2 bg-gray-800 rounded-full overflow-hidden">
                    {/* Liquido che riempie (Animato) */}
                    <div ref={liquidRef} className="w-full bg-yellow-500 shadow-[0_0_20px_#ffcc00]"></div>
                </div>

                {/* === LE CARD === */}
                <div className="space-y-24 relative z-10">
                    {history.map((item, index) => (
                        <div key={index} className={`timeline-card relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* SPAZIO VUOTO (Per alternare destra/sinistra) */}
                            <div className="hidden md:block w-1/2"></div>

                            {/* IL NODO (Punto di giunzione sul tubo) */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-yellow-500 rounded-full z-20 shadow-[0_0_15px_#ffcc00]"></div>

                            {/* LA CARD */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-12 md:pr-12">
                                <div className={`
                    bg-[#0a0a0a] border border-white/10 p-6 relative group hover:border-yellow-500/50 transition-colors duration-300
                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                 `}>
                                    {/* Decorazione angolo */}
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <span className="font-mono text-yellow-500 text-xs border border-yellow-500/20 px-2 py-1 mb-2 inline-block">
                                        {item.period}
                                    </span>

                                    <h3 className="font-industrial text-3xl text-white mt-2">{item.role}</h3>
                                    <p className="font-mono text-gray-400 text-sm mb-4">{item.company}</p>

                                    <p className="font-sans text-gray-300 text-sm leading-relaxed mb-4 opacity-80">
                                        {item.desc}
                                    </p>

                                    <div className={`flex gap-2 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {item.tech.map(t => (
                                            <span key={t} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Footer del tubo */}
                <div className="absolute bottom-[-10px] left-[-9px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full blur-[10px] animate-pulse"></div>

            </div>
        </section>
    );
}
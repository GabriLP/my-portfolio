"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Intro Animation
            const tl = gsap.timeline();
            tl.from(textRef.current, { scale: 1.1, opacity: 0, duration: 1.5, ease: "power4.out" });

            // 2. SCROLL LOGIC (PINNING)
            // "Inchiodiamo" il testo al centro mentre scrolli per i primi 500px
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=500", // Dura per 500px di scroll
                pin: textRef.current, // Blocca il testo
                scrub: true,
                onUpdate: (self) => {
                    // Man mano che scrolli, sfuma e rimpicciolisci
                    const progress = self.progress;
                    gsap.to(textRef.current, {
                        opacity: 1 - progress, // Da 1 a 0
                        scale: 1 - (progress * 0.2), // Da 1 a 0.8
                        filter: `blur(${progress * 10}px)`, // Aggiunge sfocatura progressiva
                        overwrite: true
                    });
                }
            });

            // Parallasse sfondo separata
            gsap.to(bgRef.current, {
                y: "30%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-black">

            {/* SFONDO */}
            <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
                <Image
                    src="/assets/hero-bg.webp"
                    alt="Industrial Skyline"
                    fill
                    priority
                    className="object-cover object-bottom opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60"></div>
            </div>

            {/* CONTENUTO (Wrappato in un div full-height per il Pinning) */}
            <div ref={textRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">

                <div className="mb-4 flex items-center gap-4 opacity-70">
                    <div className="h-[1px] w-12 bg-yellow-500"></div>
                    <p className="font-mono text-yellow-500 text-xs tracking-widest">SYSTEM_ONLINE</p>
                    <div className="h-[1px] w-12 bg-yellow-500"></div>
                </div>

                <h1 className="font-industrial text-7xl md:text-[11rem] text-[#e0e0e0] leading-[0.8] tracking-tighter drop-shadow-2xl mix-blend-screen">
                    GABRIELE<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffcc00] to-[#8b3a3a]">
                        LA PIANA
                    </span>
                </h1>

                <div className="mt-8 bg-black/40 backdrop-blur-md border border-white/10 py-3 px-8 rounded-full">
                    <p className="font-mono text-gray-300 text-sm tracking-wide">
                        FRONT END GAME DEV <span className="text-yellow-500 mx-2">::</span> UI SPECIALIST
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 animate-bounce">
                    <p className="font-mono text-[10px] text-gray-500 mb-2">SCROLL_TO_INITIATE</p>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent mx-auto"></div>
                </div>
            </div>
        </section>
    );
}
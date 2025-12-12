"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PowerLine() {
    const lineRef = useRef(null);

    useEffect(() => {
        gsap.to(lineRef.current, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.1 // Smooth scrub
            }
        });
    }, []);

    return (
        <div className="fixed left-6 top-0 bottom-0 w-[2px] bg-white/5 z-50 hidden md:block">
            {/* Tacche di misurazione */}
            <div className="absolute top-[20%] -left-2 text-[10px] font-mono text-gray-600">20%</div>
            <div className="absolute top-[50%] -left-2 text-[10px] font-mono text-gray-600">50%</div>
            <div className="absolute top-[80%] -left-2 text-[10px] font-mono text-gray-600">80%</div>

            {/* Il "Liquido" che si riempie */}
            <div
                ref={lineRef}
                className="w-full bg-yellow-500 shadow-[0_0_10px_#ffcc00] h-0"
            ></div>
        </div>
    );
}
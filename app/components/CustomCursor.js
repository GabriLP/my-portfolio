"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        // Muovi il cursore
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.15 });
        };

        // Effetto Hover su link e bottoni
        const handleHover = () => {
            gsap.to(followerRef.current, { scale: 3, backgroundColor: "rgba(255, 204, 0, 0.1)", borderColor: "rgba(255, 204, 0, 0.5)" });
        };
        const handleUnhover = () => {
            gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent", borderColor: "#ffcc00" });
        };

        window.addEventListener("mousemove", moveCursor);

        // Aggiungi listener a tutti gli elementi interattivi
        const interactables = document.querySelectorAll("a, button, .cursor-pointer");
        interactables.forEach(el => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactables.forEach(el => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, []);

    return (
        <>
            {/* Punto centrale */}
            <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>
            {/* Cerchio che segue (Ritardato) */}
            <div ref={followerRef} className="fixed top-0 left-0 w-8 h-8 border border-yellow-500 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform"></div>
        </>
    );
}
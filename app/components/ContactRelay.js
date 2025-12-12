"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactRelay() {
    const [emailText, setEmailText] = useState("gabriele.dev@nexus.com"); // Metti la tua vera mail qui
    const originalEmail = "gabriele.dev@nexus.com"; // E anche qui
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@&";

    // Effetto "Matrix/Decryption" sull'hover della mail
    const handleHover = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setEmailText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalEmail[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iterations >= originalEmail.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3; // Velocità decodifica
        }, 30);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(originalEmail);
        alert("FREQUENCY LOCKED (Email Copied)");
    };

    return (
        <footer className="relative w-full bg-[#080808] text-[#e0e0e0] border-t border-white/10 pt-20 pb-10 overflow-hidden">

            {/* Texture di sfondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER GIGANTE */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="font-industrial text-6xl md:text-8xl text-white leading-none">
                            LINK_<br />ESTABLISHED
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="hazard-stripes w-32 h-4 mb-2 ml-auto"></div>
                        <p className="font-mono text-yellow-500 text-sm">STATUS: WAITING FOR INPUT</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* COLONNA SINISTRA: INTERRUTTORI SOCIAL */}
                    <div className="space-y-6">
                        <p className="font-mono text-gray-500 text-xs tracking-widest uppercase mb-4">
                            [SELECT_CHANNEL]
                        </p>

                        {/* Pulsante LinkedIn */}
                        <a href="#" className="group relative block bg-[#111] border border-white/10 h-20 overflow-hidden hover:border-yellow-500 transition-colors">
                            <div className="absolute inset-0 bg-yellow-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
                            <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
                                <span className="font-industrial text-3xl text-gray-300 group-hover:text-black transition-colors">LINKEDIN</span>
                                <span className="font-mono text-xs text-gray-600 group-hover:text-black">Connect_&gt;</span>
                            </div>
                        </a>

                        {/* Pulsante GitHub */}
                        <a href="#" className="group relative block bg-[#111] border border-white/10 h-20 overflow-hidden hover:border-yellow-500 transition-colors">
                            <div className="absolute inset-0 bg-yellow-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
                            <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
                                <span className="font-industrial text-3xl text-gray-300 group-hover:text-black transition-colors">GITHUB</span>
                                <span className="font-mono text-xs text-gray-600 group-hover:text-black">Repo_Access_&gt;</span>
                            </div>
                        </a>

                        {/* Pulsante Twitter/X o ArtStation */}
                        <a href="#" className="group relative block bg-[#111] border border-white/10 h-20 overflow-hidden hover:border-yellow-500 transition-colors">
                            <div className="absolute inset-0 bg-yellow-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
                            <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
                                <span className="font-industrial text-3xl text-gray-300 group-hover:text-black transition-colors">ARTSTATION</span>
                                <span className="font-mono text-xs text-gray-600 group-hover:text-black">View_Assets_&gt;</span>
                            </div>
                        </a>
                    </div>

                    {/* COLONNA DESTRA: DIRECT TERMINAL (EMAIL) */}
                    <div className="bg-[#0a0a0a] border border-white/10 p-8 relative">
                        {/* Decorazione angoli */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500"></div>

                        <p className="font-mono text-gray-500 text-xs mb-8">
                            {"// DIRECT_MESSAGE_PROTOCOL"}
                        </p>

                        <div className="flex flex-col h-full justify-between min-h-[200px]">
                            <div>
                                <p className="font-industrial text-2xl text-gray-400 mb-2">RECIPIENT:</p>
                                <div
                                    className="font-mono text-xl md:text-3xl text-yellow-500 cursor-pointer break-all hover:bg-yellow-500/10 p-2 -ml-2 rounded"
                                    onMouseEnter={handleHover}
                                    onClick={copyToClipboard}
                                >
                                    {emailText}
                                    <span className="cursor-blink">_</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={copyToClipboard}
                                    className="font-mono text-xs bg-white/5 border border-white/20 px-4 py-2 hover:bg-white/10 hover:border-yellow-500 transition-all"
                                >
                                    [CLICK_TO_COPY_ADDRESS]
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT FOOTER */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-mono">
                    <p>SYSTEM_ID: GABRIELE_PF_V1.0 // ALL RIGHTS RESERVED © {new Date().getFullYear()}</p>
                    <p className="mt-2 md:mt-0">BUILT WITH: NEXT.JS // TAILWIND // GSAP</p>
                </div>

            </div>
        </footer>
    );
}
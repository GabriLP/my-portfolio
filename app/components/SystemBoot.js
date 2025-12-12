"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function SystemBoot({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [currentLog, setCurrentLog] = useState("INITIALIZING_KERNEL...");
    const containerRef = useRef(null);

    // Lista logs
    const bootLogs = [
        { pct: 0, text: "INITIALIZING_KERNEL..." },
        { pct: 25, text: "MOUNTING_VIRTUAL_DOM..." },
        { pct: 40, text: "ALLOCATING_MEMORY_HEAP... (WAIT)" }, // Qui rallenterà
        { pct: 60, text: "DECRYPTING_SECURE_KEYS..." },
        { pct: 80, text: "HYDRATING_TEXTURES..." },
        { pct: 90, text: "ESTABLISHING_UPLINK..." },
        { pct: 99, text: "READY_TO_LAUNCH..." },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Oggetto proxy per animare il numero
            const counter = { val: 0 };

            const tl = gsap.timeline({
                onComplete: () => {
                    // Animazione di uscita "Tenda" verso l'alto
                    gsap.to(containerRef.current, {
                        yPercent: -100,
                        duration: 0.8,
                        ease: "power4.inOut",
                        onComplete: onComplete
                    });
                }
            });

            // FASE 1: Avvio Veloce (0 -> 35% in 1 secondo)
            tl.to(counter, {
                val: 35,
                duration: 1,
                ease: "power2.out",
                onUpdate: () => {
                    setProgress(Math.round(counter.val));
                    updateLog(Math.round(counter.val));
                }
            })
                // FASE 2: LO STALLO (35% -> 45% in 2 secondi) -> Sembra che il PC stia pensando
                .to(counter, {
                    val: 45,
                    duration: 2.5,
                    ease: "linear",
                    onUpdate: () => {
                        setProgress(Math.round(counter.val));
                        updateLog(Math.round(counter.val));
                    }
                })
                // FASE 3: Accelerazione (45% -> 85% in 0.8 secondi)
                .to(counter, {
                    val: 85,
                    duration: 0.8,
                    ease: "power1.in",
                    onUpdate: () => {
                        setProgress(Math.round(counter.val));
                        updateLog(Math.round(counter.val));
                    }
                })
                // FASE 4: Scatto Finale (85% -> 100% in 0.5 secondi)
                .to(counter, {
                    val: 100,
                    duration: 0.5,
                    ease: "power4.out",
                    onUpdate: () => {
                        setProgress(Math.round(counter.val));
                        updateLog(Math.round(counter.val));
                    }
                });

        }, containerRef);

        // Funzione helper per aggiornare i testi
        const updateLog = (val) => {
            const log = bootLogs.findLast((l) => val >= l.pct);
            if (log) setCurrentLog(log.text);
        };

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={containerRef} className="boot-screen fixed inset-0 bg-[#050505] z-[999] flex flex-col items-center justify-center font-mono text-yellow-500 cursor-wait">
            <div className="w-80 md:w-96 relative">

                {/* Header Terminale */}
                <div className="flex justify-between mb-2 text-[10px] md:text-xs text-gray-500 font-bold tracking-widest uppercase">
                    <span>BIOS_CHECK_V.2.4</span>
                    <span>MEM_OK</span>
                </div>

                {/* Barra di Caricamento */}
                <div className="w-full h-4 bg-[#111] border border-gray-800 p-[3px] shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {/* La barra interna */}
                    <div
                        className="h-full bg-yellow-500 shadow-[0_0_15px_#ffcc00] relative overflow-hidden"
                        style={{ width: `${progress}%` }}
                    >
                        {/* Effetto righe sulla barra (Stripes) */}
                        <div className="absolute inset-0 w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#000_5px,#000_10px)]"></div>
                    </div>
                </div>

                {/* Percentuale e Log Corrente */}
                <div className="flex justify-between mt-3 font-mono items-end">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-600 mb-1">CURRENT_TASK:</span>
                        <span className="text-xs text-yellow-500 animate-pulse">{'>'} {currentLog}</span>
                    </div>
                    <span className="text-3xl md:text-4xl font-bold font-industrial text-gray-200">{progress}%</span>
                </div>

                {/* Decorazione Codice sotto (Matrix style) */}
                <div className="mt-12 text-[9px] text-gray-600 space-y-1 font-mono border-t border-gray-900 pt-4">
                    <p className="opacity-50">0x004F2: MEMORY INTEGRITY ... OK</p>
                    <p className={progress > 20 ? "opacity-70" : "hidden"}>0x004F3: GPU ACCELERATION ... ENABLED</p>
                    <p className={progress > 40 ? "text-yellow-700" : "hidden"}>0x004F4: WAITING FOR I/O STREAM ...</p>
                    <p className={progress > 60 ? "text-green-900" : "hidden"}>0x004F5: RENDER ENGINE ... MOUNTED</p>
                    <p className={progress > 90 ? "text-green-500" : "hidden"}>0x004F6: SYSTEM READY</p>
                </div>
            </div>
        </div>
    );
}
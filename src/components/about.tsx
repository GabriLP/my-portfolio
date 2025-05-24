"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Lightbulb, Users, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedHeading from "./ui/animated-heading";
import AnimatedText from "./ui/animated-words";
import AnimatedContent from "./ui/animated-content";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      aria-label="About Section"
    >
      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <motion.div style={{ opacity, y }} className="space-y-8 gpu-animate">
          {/* Animated Heading */}
          <AnimatedHeading
            tag="h1"
            className="text-heading-1 font-bold font-display bg-clip-text overflow-hidden"
          >
            <AnimatedText text="About me" split={true} />
          </AnimatedHeading>

          {/* Animated Content */}
          <AnimatedContent delay={0.7}>
            <p className="text-body-1 text-justify max-w-2xl ml-auto">
              I started web development over a year ago and love how it blends thinking and creativity. <br />
              What excites me most about this field is the ability to positively impact both businesses and end-users. <br />
              Continually updating my skills with the latest technologies, I&apos;m dedicated to crafting high-quality, clean, detail-oriented code.
            </p>
          </AnimatedContent>

          {/* Cards Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Passionate Developer",
                description:
                  "I started web development over a year ago and love how it blends thinking and creativity.",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Impact Driven",
                description:
                  "What excites me most about this field is the ability to positively impact both businesses and end-users.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-primary" />,
                title: "Always Learning",
                description:
                  "Continually updating my skills with the latest technologies, I'm dedicated to crafting high-quality, clean, detail-oriented code.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group gpu-animate"
              >
                <Card className="bg-background/50 backdrop-blur-lg border-border transition-all duration-300 hover:shadow-lg hover:bg-background/80">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-4"
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-primary" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
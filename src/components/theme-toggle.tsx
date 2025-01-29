"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering during server-side rendering to prevent mismatches
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50 flex items-center justify-center"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="relative flex items-center justify-center h-full w-full"
      >
        {/* Sun Icon */}
        {resolvedTheme === "light" ? (
          <Sun
            key="sun"
            className="absolute transition-transform duration-300 scale-100"
            style={{ width: "60%", height: "60%" }}
          />
        ) : (
          <Sun
            key="sun-hidden"
            className="absolute transition-transform duration-300 scale-0 rotate-90"
            style={{ width: "60%", height: "60%" }}
          />
        )}

        {/* Moon Icon */}
        {resolvedTheme === "dark" ? (
          <Moon
            key="moon"
            className="absolute transition-transform duration-300 scale-100"
            style={{ width: "60%", height: "60%" }}
          />
        ) : (
          <Moon
            key="moon-hidden"
            className="absolute transition-transform duration-300 scale-0 -rotate-90"
            style={{ width: "60%", height: "60%" }}
          />
        )}

        {/* Screen Reader Text */}
        <span className="sr-only">Toggle theme</span>
      </motion.div>
    </Button>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-background text-foreground flex flex-col justify-between p-8 sm:p-12 font-mono select-none"
        >
          {/* Top Info */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-secondary border-b border-border pb-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block rounded-full animate-pulse" />
              <span>DAFFA ABDUL FATAH</span>
            </span>
            <span>INITIALIZING [2026]</span>
          </div>

          {/* Center Graphic: Prominent Letter "D" */}
          <div className="flex flex-col items-center justify-center flex-grow py-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center mb-6"
            >
              {/* Massive Swiss Typography Letter "D" */}
              <span className="font-extrabold text-[8rem] sm:text-[12rem] lg:text-[16rem] leading-none tracking-tighter text-foreground select-none">
                D
              </span>
              <span className="absolute bottom-4 right-2 text-accent font-extrabold text-2xl sm:text-4xl">
                .
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs sm:text-sm tracking-widest text-secondary uppercase text-center max-w-md"
            >
              FULLSTACK DEVELOPER & UI/UX DESIGNER
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between text-xs text-secondary tracking-widest uppercase mb-2">
              <span>LOADING PORTFOLIO</span>
              <span className="text-foreground font-bold">{progress}%</span>
            </div>
            {/* Progress line */}
            <div className="w-full h-[2px] bg-border overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

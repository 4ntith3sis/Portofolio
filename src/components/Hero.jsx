"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="intro"
      className="pt-12 pb-24 border-b border-border min-h-[90vh] flex flex-col justify-between relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Identifier */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-12 font-mono text-xs text-secondary tracking-widest uppercase">
          <span>01 / INTRO</span>
          <span>DEVELOPER PORTOFOLIO</span>
        </div>

        {/* 12-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* 7 Columns: Typography & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs sm:text-sm tracking-widest text-secondary uppercase mb-3">
                HELLO, I&apos;M
              </p>

              <h1 className="hero-heading font-extrabold uppercase text-foreground tracking-tight select-none mb-6">
                DAFFA<br />
                <span className="text-foreground">ABDUL FATAH</span>
              </h1>

              <div className="inline-block border-l-2 border-accent pl-4 py-1 mb-8">
                <p className="font-mono text-sm sm:text-base font-semibold tracking-wider text-foreground uppercase">
                  FULLSTACK DEVELOPER
                </p>
              </div>

              <p className="text-secondary text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal mb-10">
                I build modern web applications and digital experiences with a focus on clean interfaces, usability, and maintainable code.
              </p>
            </div>

            {/* Metadata Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border font-mono text-xs tracking-wider uppercase text-secondary">
              <div>
                <span className="block text-[10px] text-secondary/60 mb-1">LOCATION</span>
                <span className="text-foreground font-medium">BASED IN INDONESIA</span>
              </div>
              <div>
                <span className="block text-[10px] text-secondary/60 mb-1">DISCIPLINE</span>
                <span className="text-foreground font-medium">WEB DEVELOPMENT / UI UX</span>
              </div>
              <div>
                <span className="block text-[10px] text-secondary/60 mb-1">STATUS</span>
                <span className="text-accent font-semibold">AVAILABLE FOR FREELANCE</span>
              </div>
            </div>
          </motion.div>

          {/* 5 Columns: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative border border-border p-2 bg-background shadow-none group">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-border/40">
                <Image
                  src="/images/profile.webp"
                  alt="Daffa Abdul Fatah — Informatics Engineering Student & Web Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Image Metadata Caption */}
              <div className="flex justify-between items-center px-2 pt-3 pb-1 font-mono text-[11px] text-secondary tracking-widest uppercase border-t border-border/50 mt-2">
                <span>FIG 01. PORTRAIT</span>
                <span>INDONESIA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex items-center justify-between"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-secondary hover:text-accent transition-colors uppercase group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <span className="font-mono text-xs text-secondary/50">2026 EDITION</span>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-16 font-mono text-xs text-secondary tracking-widest uppercase">
          <span>02 / ABOUT</span>
          <span>PHILOSOPHY & FOCUS</span>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="editorial-title font-extrabold uppercase text-foreground tracking-tight mb-8">
              I BUILD DIGITAL<br />
              EXPERIENCES WITH<br />
              <span className="text-accent">CODE & DESIGN.</span>
            </h2>

            <p className="text-secondary text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl">
              I&apos;m an Informatics Engineering student and fullstack developer interested in building modern web applications, clean interfaces, and useful digital products.
            </p>
          </motion.div>

          {/* Editorial Grid Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 space-y-8"
          >
            {/* FOCUS */}
            <div className="border-b border-border pb-6">
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-3">
                {"// 01 FOCUS"}
              </span>
              <ul className="font-mono text-sm sm:text-base font-medium space-y-1 text-foreground">
                <li>Web Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            {/* INTEREST */}
            <div className="border-b border-border pb-6">
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-3">
                {"// 02 INTEREST"}
              </span>
              <ul className="font-mono text-sm sm:text-base font-medium space-y-1 text-foreground">
                <li>Data Analysis</li>
                <li>Digital Products</li>
              </ul>
            </div>

            {/* LOCATION */}
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-3">
                {"// 03 LOCATION"}
              </span>
              <p className="font-mono text-sm sm:text-base font-medium text-foreground">
                Bandung, Indonesia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

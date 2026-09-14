"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between flex-wrap gap-y-1 border-b border-border pb-4 mb-8 sm:mb-16 font-mono text-xs text-secondary tracking-widest uppercase"
        >
          <span>06 / EDUCATION</span>
          <span>ACADEMIC BACKGROUND</span>
        </motion.div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground">
              ACADEMIC FORMATION
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12"
          >
            <div className="border border-border p-8 bg-background relative group hover:border-accent/60 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6 mb-6">
                <div>
                  <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-2">
                    DEGREE PROGRAM
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                    INFORMATICS ENGINEERING
                  </h3>
                </div>

                <div className="mt-4 md:mt-0 font-mono text-sm font-bold text-foreground bg-border/40 px-4 py-2 border border-border inline-block self-start md:self-auto">
                  2021 — PRESENT
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-semibold text-foreground uppercase">
                <GraduationCap size={18} className="text-accent" />
                <span>UNIVERSITAS PASUNDAN</span>
              </div>

              <p className="text-secondary text-sm sm:text-base leading-relaxed mt-4">
                Studying algorithms, web development architecture, database management systems, software engineering principles, and user experience engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 sm:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between flex-wrap gap-y-1 border-b border-border pb-4 mb-8 sm:mb-16 font-mono text-xs text-secondary tracking-widest uppercase"
        >
          <span>03 / EXPERTISE</span>
          <span>TECHNICAL CAPABILITIES</span>
        </motion.div>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground mb-8 sm:mb-16 max-w-2xl"
        >
          TECHNICAL TOOLKIT & DISCIPLINARY STACK
        </motion.h2>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-border p-6 bg-background flex flex-col justify-between hover:border-accent/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
                  <h3 className="font-mono text-xs text-accent tracking-widest font-bold">
                    [0{idx + 1}] {group.category}
                  </h3>
                  <span className="w-1.5 h-1.5 bg-foreground"></span>
                </div>

                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center justify-between font-mono text-sm sm:text-base text-foreground group">
                      <span>{skill}</span>
                      <span className="text-secondary/40 group-hover:text-accent font-xs transition-colors">↗</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 font-mono text-[10px] text-secondary tracking-wider uppercase">
                <span>VERIFIED SKILLSET</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


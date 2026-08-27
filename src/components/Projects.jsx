"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="work" className="py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-border pb-4 mb-16 font-mono text-xs text-secondary tracking-widest uppercase"
        >
          <span>04 / SELECTED WORK</span>
          <span>CURATED DIGITAL PROJECTS</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            FEATURED PROJECTS
          </h2>
          <span className="font-mono text-xs text-secondary tracking-widest uppercase mt-4 md:mt-0">
            TOTAL ({projects.length})
          </span>
        </motion.div>

        {/* Project List */}
        <div>
          {projects.map((project, idx) => (
            <ProjectItem key={project.slug || project.number} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


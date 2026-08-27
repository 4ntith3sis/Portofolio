"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectItem({ project, index }) {
  const hasSourceUrl = project.sourceUrl && project.sourceUrl.trim() !== "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-border py-12 lg:py-16 group transition-colors hover:bg-background/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Details (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            {/* Number & Subtitle */}
            <div className="flex items-center gap-4 font-mono text-xs text-secondary tracking-widest uppercase mb-4">
              <span className="text-accent font-bold text-sm">{`// ${project.number}`}</span>
              <span>•</span>
              <span>{project.subtitle}</span>
            </div>

            {/* Title with hover arrow animation */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-foreground tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 bg-border/40 text-foreground border border-border/80 uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link: GitHub Only */}
          <div className="flex items-center space-x-6 pt-4 border-t border-border/40 font-mono text-xs tracking-widest uppercase">
            {hasSourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground font-bold hover:text-accent transition-colors py-1 group/link"
              >
                <Github size={15} />
                <span>VIEW REPOSITORY</span>
                <ArrowUpRight size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Image Reveal (5 cols) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-border/30 group-hover:border-accent/60 transition-colors duration-300">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Image Overlay Label */}
            <div className="absolute bottom-3 left-3 bg-background/95 backdrop-blur-sm border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-foreground uppercase">
              {project.slug}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

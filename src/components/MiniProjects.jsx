"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { miniProjects } from "@/data/miniProjects";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const IFRAME_WIDTH = 1280;
const IFRAME_HEIGHT = 800;

function MiniProjectFrame({ project }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.35);

  const isLiveWeb = project.liveUrl && (project.liveUrl.startsWith("http://") || project.liveUrl.startsWith("https://"));

  useEffect(() => {
    if (!isLiveWeb || !containerRef.current) return;
    const updateScale = () => {
      if (containerRef.current) {
        const newScale = containerRef.current.offsetWidth / IFRAME_WIDTH;
        setScale((prev) => (Math.abs(prev - newScale) > 0.002 ? newScale : prev));
      }
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isLiveWeb]);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-md flex flex-col mb-6 group/frame transition-colors hover:border-accent/60">
      {/* Browser Bar — Fixed Height h-8 */}
      <div className="h-8 flex-shrink-0 flex items-center justify-between px-3 bg-border/40 border-b border-border text-[10px] font-mono select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent/80 inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-foreground/20 inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-foreground/20 inline-block"></span>
        </div>
        <div className="flex items-center gap-1 bg-background px-2.5 py-0.5 border border-border text-secondary truncate max-w-[180px] sm:max-w-[240px]">
          <span className="text-accent font-semibold text-[9px]">https://</span>
          <span className="truncate text-[9px]">
            {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.title.toLowerCase().replace(/\s+/g, '-')}.app`}
          </span>
        </div>
        {isLiveWeb ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors flex items-center"
            title="Open in new tab"
          >
            <ExternalLink size={11} />
          </a>
        ) : (
          <span className="text-secondary/40 text-[9px]">DEMO</span>
        )}
      </div>

      {/* Interface Area: Live Iframe Web Rendering with Isolated Touch Scrolling */}
      <div
        ref={containerRef}
        data-live-preview="true"
        data-lenis-prevent="true"
        data-lenis-prevent-touch="true"
        data-lenis-prevent-wheel="true"
        className="relative w-full flex-1 bg-white overflow-hidden"
        style={{ touchAction: 'auto', overscrollBehavior: 'contain' }}
      >
        {isLiveWeb ? (
          <iframe
            key={project.liveUrl}
            src={project.liveUrl}
            title={`${project.title} Live Interface`}
            loading="lazy"
            style={{
              width: `${IFRAME_WIDTH}px`,
              height: `${IFRAME_HEIGHT}px`,
              border: 'none',
              background: 'white',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'auto',
              touchAction: 'auto',
            }}
          />
        ) : (
          <div className="relative w-full h-full bg-border/20 flex flex-col items-center justify-center p-6 text-center select-none font-mono">
            <span className="text-accent font-bold text-xs tracking-widest uppercase mb-1">{"// LIVE PREVIEW"}</span>
            <span className="text-foreground text-xs font-bold uppercase tracking-wider">{project.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MiniProjects() {
  return (
    <section id="mini-projects" className="py-16 sm:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between flex-wrap gap-y-1 border-b border-border pb-4 mb-8 sm:mb-16 font-mono text-xs text-secondary tracking-widest uppercase"
        >
          <span>05 / MINI PROJECTS</span>
          <span>SMALL EXPERIMENTS & UI LABS</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-border gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground">
              MINI PROJECTS
            </h2>
            <p className="text-secondary font-mono text-xs sm:text-sm tracking-wider mt-2">
              Small experiments, interfaces, and technical explorations.
            </p>
          </div>
          <span className="font-mono text-xs text-secondary tracking-widest uppercase self-start md:self-auto">
            TOTAL ({miniProjects.length})
          </span>
        </motion.div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          {miniProjects.map((project, idx) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== "";
            const hasGithubUrl = project.githubUrl && project.githubUrl.trim() !== "";

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-border p-6 sm:p-8 bg-background flex flex-col justify-between hover:border-accent/60 transition-colors duration-300 group shadow-sm h-full"
              >
                <div className="flex flex-col flex-grow">
                  {/* Top Bar: Project Number & Tag */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-5 font-mono text-xs tracking-widest uppercase">
                    <span className="text-accent font-bold">{`// ${project.number}`}</span>
                    <span className="text-secondary/60 text-[10px]">MINI SHOWCASE</span>
                  </div>

                  {/* Project Title Container */}
                  <div className="min-h-[3rem] sm:min-h-[3.5rem] flex items-start mb-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                      {hasLiveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline decoration-accent/40 underline-offset-4"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                  </div>

                  {/* Description Container */}
                  <div className="min-h-[4.5rem] sm:min-h-[4rem] flex items-start mb-6">
                    <p className="text-secondary text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills Container */}
                  <div className="min-h-[2.25rem] flex items-center flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 bg-border/40 text-foreground border border-border/80 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Web Interface Frame */}
                  <MiniProjectFrame project={project} />
                </div>

                {/* CTAs: Live Preview & GitHub */}
                <div className="flex items-center gap-6 pt-4 border-t border-border/60 font-mono text-xs tracking-widest uppercase mt-auto">
                  {/* Primary CTA: LIVE PREVIEW ↗ */}
                  {hasLiveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent font-bold hover:text-accent/80 transition-colors py-1 group/live"
                    >
                      <span>LIVE PREVIEW</span>
                      <ArrowUpRight size={14} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  )}

                  {/* Secondary CTA: GITHUB ↗ */}
                  {hasGithubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground font-bold hover:text-accent transition-colors py-1 group/github"
                    >
                      <span>GITHUB</span>
                      <ArrowUpRight size={14} className="group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5 transition-transform duration-300 text-secondary group-hover/github:text-accent" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

const IFRAME_WIDTH = 1280;
const IFRAME_HEIGHT = 800;
const MOBILE_IFRAME_WIDTH = 390;  // real mobile viewport width
const MOBILE_IFRAME_HEIGHT = 844; // real mobile viewport height (iPhone 14)

export default function ProjectItem({ project, index }) {
  const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== "";
  const hasSourceUrl = project.sourceUrl && project.sourceUrl.trim() !== "";
  const targetUrl = project.liveUrl || project.sourceUrl;

  const isMobile = project.mobilePreview === true;

  // Preview scale & height state
  const previewRef = useRef(null);
  const [iframeScale, setIframeScale] = useState(0.35);
  const [iframeHeight, setIframeHeight] = useState(800);

  useEffect(() => {
    if (!hasLiveUrl || !previewRef.current) return;
    const targetWidth = isMobile ? MOBILE_IFRAME_WIDTH : IFRAME_WIDTH;
    const defaultHeight = isMobile ? MOBILE_IFRAME_HEIGHT : IFRAME_HEIGHT;

    const updateDimensions = () => {
      if (previewRef.current) {
        const containerW = previewRef.current.offsetWidth;
        const containerH = previewRef.current.offsetHeight;
        if (containerW > 0 && targetWidth > 0) {
          const newScale = containerW / targetWidth;
          const calculatedH = containerH > 0 ? Math.round(containerH / newScale) : defaultHeight;

          setIframeScale((prev) => (Math.abs(prev - newScale) > 0.002 ? newScale : prev));
          setIframeHeight((prev) => (Math.abs(prev - calculatedH) > 2 ? calculatedH : prev));
        }
      }
    };
    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, [hasLiveUrl, isMobile]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-border py-8 sm:py-12 lg:py-16 group transition-colors hover:bg-background/60"
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
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold uppercase text-foreground tracking-tight mb-4 lg:group-hover:translate-x-2 transition-transform duration-300">
              {targetUrl ? (
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
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

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-border/40 font-mono text-xs tracking-widest uppercase">
            {hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent/80 transition-colors py-1 group/live"
              >
                <ExternalLink size={15} />
                <span>LIVE PREVIEW</span>
                <ArrowUpRight size={14} className="group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-secondary/40 font-bold py-1 select-none">
                <ExternalLink size={15} className="opacity-40" />
                <span>LIVE PREVIEW UNAVAILABLE</span>
              </span>
            )}
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

        {/* Right Column: Live Web Preview (5 cols) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          {hasLiveUrl ? (
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden border border-border bg-background shadow-2xl flex flex-col group/frame">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-border/40 border-b border-border text-[10px] font-mono select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/20 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/20 inline-block"></span>
                </div>
                <div className="flex items-center gap-1 bg-background px-2.5 py-0.5 border border-border text-secondary truncate max-w-[200px] sm:max-w-[260px]">
                  <span className="text-accent font-semibold">https://</span>
                  <span className="truncate">{project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors flex items-center gap-1"
                  title="Open in new tab"
                >
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Live Web Preview Frame */}
              <div
                ref={previewRef}
                data-live-preview="true"
                data-lenis-prevent="true"
                data-lenis-prevent-touch="true"
                data-lenis-prevent-wheel="true"
                className="relative w-full flex-1 bg-background overflow-hidden"
                style={{ touchAction: 'auto', overscrollBehavior: 'contain' }}
              >
                <iframe
                  key={project.liveUrl}
                  src={project.liveUrl}
                  title={`${project.title} Live Preview`}
                  loading="lazy"
                  style={{
                    width: `${isMobile ? MOBILE_IFRAME_WIDTH : IFRAME_WIDTH}px`,
                    height: `${iframeHeight}px`,
                    border: 'none',
                    background: 'white',
                    transform: `scale(${iframeScale})`,
                    transformOrigin: 'top left',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'auto',
                    touchAction: 'auto',
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-border/20 flex flex-col items-center justify-center p-6 text-center select-none font-mono">
              <span className="text-accent font-bold text-xs tracking-widest uppercase mb-2">{"// LIVE PREVIEW UNAVAILABLE"}</span>
              <span className="text-foreground text-sm font-bold uppercase tracking-wider">{project.title}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

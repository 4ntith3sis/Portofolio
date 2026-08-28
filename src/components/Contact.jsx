"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      name: "EMAIL",
      value: "daffaabdulfatah@gmail.com",
      href: "mailto:daffaabdulfatah@gmail.com",
      icon: Mail,
    },
    {
      name: "GITHUB",
      value: "github.com/daffaabdulfatah",
      href: "https://github.com/daffaabdulfatah",
      icon: Github,
    },
    {
      name: "LINKEDIN",
      value: "linkedin.com/in/daffaabdulfatah",
      href: "https://linkedin.com/in/daffaabdulfatah",
      icon: Linkedin,
    },
    {
      name: "INSTAGRAM",
      value: "daffaabdlfth",
      href: "https://instagram.com/daffaabdlfth",
      icon: Instagram,
    },
  ];

  // Smooth staggered container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Smooth card item variants with cubic-bezier easing
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between border-b border-border pb-4 mb-16 font-mono text-xs text-secondary tracking-widest uppercase"
        >
          <span>06 / CONTACT</span>
          <span>GET IN TOUCH</span>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Heading & Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <h2 className="editorial-title font-extrabold uppercase text-foreground tracking-tight mb-8">
                LET&apos;S BUILD<br />
                SOMETHING<br />
                <span className="text-accent">USEFUL.</span>
              </h2>

              <p className="text-secondary text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
                Whether you have a project idea, freelance opportunity, or just want to connect, feel free to reach out.
              </p>
            </div>

            {/* Direct Mail CTA Button */}
            <motion.a
              href="mailto:daffaabdulfatah@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 font-mono text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors self-start group shadow-sm"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right Column: Contact Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 space-y-6"
          >
            <span className="font-mono text-xs text-secondary tracking-widest uppercase block mb-4">
              {"// DIRECT CHANNELS"}
            </span>

            {/* Staggered Cards Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {contactLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
                    whileTap={{ scale: 0.98 }}
                    className="block border border-border p-4 bg-background hover:border-accent hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-secondary mb-1">
                      <span className="flex items-center gap-2 text-foreground font-bold group-hover:text-accent transition-colors duration-300">
                        <IconComponent size={15} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                        {item.name}
                      </span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-secondary group-hover:text-accent" />
                    </div>
                    <span className="font-mono text-sm text-secondary truncate block group-hover:text-foreground transition-colors duration-300">
                      {item.value}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



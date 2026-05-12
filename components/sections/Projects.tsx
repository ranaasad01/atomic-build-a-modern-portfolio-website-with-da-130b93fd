"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, categories } from "@/lib/projects-data";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Projects I&apos;ve built
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A selection of projects that showcase my skills across the full stack — from AI-powered tools to polished consumer apps.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                whileTap={{ scale: 0.95 }}
                className={
                  "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background " +
                  (activeCategory === cat.value
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80")
                }
              >
                {activeCategory === cat.value && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-indigo-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-indigo-500/50 text-muted-foreground hover:text-foreground transition-all duration-200 group"
            >
              View all projects on GitHub
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

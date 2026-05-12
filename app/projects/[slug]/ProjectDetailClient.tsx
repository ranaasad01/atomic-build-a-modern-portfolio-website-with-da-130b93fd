"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, Calendar, Tag, CheckCircle } from 'lucide-react';
import { Project } from "@/lib/projects-data";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wide">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {project.year}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{project.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-xl border border-border hover:border-indigo-500/50 transition-all"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Long description */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">About this project</h2>
        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
      </div>

      {/* Highlights */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Key Features</h2>
        <ul className="space-y-3">
          {project.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Tag className="w-5 h-5 text-indigo-400" />
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-muted border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

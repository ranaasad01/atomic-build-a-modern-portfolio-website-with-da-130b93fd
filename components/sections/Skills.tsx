"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Backend",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Prisma ORM", level: 88 },
      { name: "Redis", level: 75 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-pink-500 to-orange-500",
    skills: [
      { name: "Docker / K8s", level: 78 },
      { name: "AWS / Vercel", level: 82 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "Git / GitHub", level: 95 },
      { name: "Linux / Shell", level: 80 },
    ],
  },
];

const techIcons = [
  { name: "React", bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  { name: "Next.js", bg: "bg-white/5", text: "text-white", border: "border-white/10" },
  { name: "TypeScript", bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  { name: "Node.js", bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  { name: "PostgreSQL", bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
  { name: "Docker", bg: "bg-blue-600/10", text: "text-blue-400", border: "border-blue-600/20" },
  { name: "AWS", bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  { name: "Tailwind", bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20" },
  { name: "GraphQL", bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  { name: "Redis", bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
  { name: "Prisma", bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  { name: "Figma", bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: level + "%" } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={"h-full rounded-full bg-gradient-to-r " + color}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Skills & Expertise
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Technologies I work with
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A curated set of tools and technologies I use to build modern, scalable applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-indigo-500/30 transition-colors">
                <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className={"w-3 h-3 rounded-full bg-gradient-to-r " + category.color} />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech icon cloud */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground">Also familiar with</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={"px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-default " + tech.bg + " " + tech.text + " " + tech.border}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

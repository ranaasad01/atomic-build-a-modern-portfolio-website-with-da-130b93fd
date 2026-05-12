"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Coffee, Code2 } from 'lucide-react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

const stats = [
  { icon: Code2, label: "Projects Shipped", value: "40+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  { icon: Calendar, label: "Years Experience", value: "6+" },
  { icon: MapPin, label: "Location", value: "SF, CA" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              The person behind the code
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
                  <Image
                    src="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3904316%2F0d4ee72a-dfb8-4647-ac78-57b2b3607cde.png"
                    alt="Alex Morgan - Full Stack Developer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 288px, 320px"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Open to work</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I&apos;m a <span className="text-foreground font-semibold">Full Stack Developer</span> with
                  6+ years of experience building scalable web applications. I specialize in React, Next.js,
                  and Node.js ecosystems, with a strong eye for design and user experience.
                </p>
                <p>
                  My journey started with a Computer Science degree from UC Berkeley, followed by roles at
                  startups and scale-ups where I shipped products used by millions. I&apos;m passionate about
                  clean architecture, performance optimization, and mentoring junior developers.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical
                  articles, or exploring the latest in AI/ML tooling. I believe great software is built at
                  the intersection of technical excellence and human empathy.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/resume"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-xl border border-border hover:border-indigo-500/50 transition-all duration-200"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactSchema, ContactFormData } from "@/lib/contact-schema";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex@alexmorgan.dev",
    href: "mailto:alex@alexmorgan.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to chat? I&apos;d love to hear from you. Drop me a message and I&apos;ll get back to you soon.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-indigo-400 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Currently Available</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I&apos;m open to full-time roles, contract work, and interesting freelance projects. Let&apos;s build something great together.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          {...register("name")}
                          placeholder="John Doe"
                          className={
                            "w-full px-4 py-3 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all " +
                            (errors.name ? "border-red-500/50" : "border-border focus:border-indigo-500/50")
                          }
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@example.com"
                          className={
                            "w-full px-4 py-3 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all " +
                            (errors.email ? "border-red-500/50" : "border-border focus:border-indigo-500/50")
                          }
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="subject"
                        {...register("subject")}
                        placeholder="Project inquiry, collaboration, etc."
                        className={
                          "w-full px-4 py-3 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all " +
                          (errors.subject ? "border-red-500/50" : "border-border focus:border-indigo-500/50")
                        }
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        placeholder="Tell me about your project or what you'd like to discuss..."
                        className={
                          "w-full px-4 py-3 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none " +
                          (errors.message ? "border-red-500/50" : "border-border focus:border-indigo-500/50")
                        }
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
                    >
                      {status === "loading" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

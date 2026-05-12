import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Full Stack Developer & Designer",
    template: "%s | Alex Morgan",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Building beautiful, performant digital experiences.",
  keywords: ["developer", "portfolio", "Next.js", "React", "TypeScript", "full stack"],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full Stack Developer & Designer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@alexmorgandev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable + " font-sans antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

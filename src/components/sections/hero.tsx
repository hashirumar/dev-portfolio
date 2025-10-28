"use client";

import { AuroraText } from "@/components/aurora-text";
import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="/blog/introducing-dev-ai"
      className="flex w-auto items-center rounded-full bg-zinc-50 dark:bg-zinc-900 px-2 py-1 ring-1 ring-zinc-300 dark:ring-zinc-800 whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-xs font-medium dark:text-zinc-400 sm:text-sm">
        I'm Hashir Umar
      </p>
    </motion.a>
  );
}


function HeroTitles() {
  return (
    <div className="flex w-full max-w-3xl items-center flex-col text-center overflow-hidden gap-4 ">
      <motion.h1
        className="text-left text-4xl font-semibold leading-tighter text-foreground sm:text-5xl md:text-6xl tracking-tighter"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, staggerChildren: 0.2 }}
      >
        <motion.span
          className="inline-block text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          <h1 className="leading-[60px] dark:text-zinc-200 text-center">
            Full Stack Dev <br/>& Prouct Designer
          </h1>
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-center max-w-xl leading-normal dark:text-zinc-300 sm:text-lg sm:leading-normal text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease }}
      >
      
     I design and build end-to-end digital products from intuitive interfaces to scalable backends.

      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="relative flex flex-col items-center j">
      <motion.div
        className="inline-flex  flex-col items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-300 dark:ring-zinc-800 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <a
          href="https://www.linkedin.com/in/hashirumar-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "px-6 py-2 sm:w-auto dark:text-zinc-300 "
          }
        >
          <h1>Lets work Together</h1>
        </a>
      </motion.div>
      <motion.p
        className="mt-3 text-[12px]  dark:text-zinc-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Open to full-time opportunities
      </motion.p>
    </div>
  );
}


export function Hero() {
  return (
    <Section id="hero">
      <div className="relative flex flex-col items-center justify-center w-full p-6 lg:p-12 border-x overflow-hidden gap-y-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
      </div>
    </Section>
  );
}

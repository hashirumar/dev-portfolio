"use client";

import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import {
  Database,
  Smartphone,
  Brain,
  Palette,
  Layers,
  Server,
} from "lucide-react";

const features = [
  {
    name: "MERN Stack Development",
    description:
      "Full-stack web applications with MongoDB, Express.js, React, and Node.js for scalable solutions.",
    icon: <Layers className="h-6 w-6 text-zinc-400" />,
  },
  {
    name: "LAMP Stack Development",
    description:
      "Robust server-side applications using Linux, Apache, MySQL, and PHP for enterprise platforms.",
    icon: <Server className="h-6 w-6 text-zinc-400" />,
  },
  {
    name: "Mobile App Development",
    description:
      "Cross-platform native apps with Flutter for iOS and Android with stunning UI and performance.",
    icon: <Smartphone className="h-6 w-6 text-zinc-400" />,
  },
  {
    name: "AI & ML Integration",
    description:
      "Intelligent automation and predictive analytics using AI agents, TensorFlow, and OpenCV for cutting-edge solutions.",
    icon: <Brain className="h-6 w-6 text-zinc-400" />,
  },
  {
    name: "UI/UX Design",
    description:
      "User-centered interface design and prototyping with Figma for intuitive digital experiences.",
    icon: <Palette className="h-6 w-6 text-zinc-400" />,
  },
  {
    name: "No-Code UI Design",
    description:
      "Rapid prototyping and production-ready websites using Framer for fast deployment and iteration.",
    icon: <Database className="h-6 w-6 text-zinc-400" />,
  },
];

export function Features() {
  return (
    <Section id="features" title="What I Do">
      <div className="border-x border-t">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ name, description, icon }, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-y-3 items-center justify-center py-8 px-6 border-b transition-colors hover:bg-secondary/20",
                "last:border-b-0",
                "md:[&:nth-child(2n+1)]:border-r md:[&:nth-child(n+5)]:border-b-0",
                "lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0 lg:border-r"
              )}
            >
              <div className="flex flex-col gap-y-3 items-center">
                <div className="bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-3 rounded-lg text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-300 dark:ring-zinc-700 transition-transform hover:scale-110">
                  {icon}
                </div>
                <h2 className="text-xl font-semibold text-card-foreground text-center text-balance">
                  {name}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground text-balance text-center max-w-xs mx-auto leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { Section } from "@/components/section";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Executive Software Developer",
    company: "ChromeDM",
    location: "Remote",
    duration: "Aug 2024 – Present",
    type: "Full-time",
    description:
      "Leading full-stack development and AI integration for enterprise platforms.",
    achievements: [
      "Spearheaded Nature Bright platform (mobile + web) from concept to production",
      "Engineered scalable APIs handling 10K+ daily requests with 99.9% uptime",
      "Implemented Razorpay payment gateway with zero security incidents",
      "Optimized cloud infrastructure reducing load time by 40%",
    ],
    tech: ["Flutter", "PHP", "Node.js", "MySQL", "Razorpay"],
  },
];

function ExperienceCard({ experience }: { experience: typeof experiences[0] }) {
  return (
    <div className="p-0 h-full overflow-hidden border-b lg:border-b-0">
      <div className="flex flex-col h-full w-full">
        {/* Header Section with visual accent */}
        <div className="border-b p-12 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-zinc-400" />
                <h3 className="text-xl font-semibold tracking-tight">
                  {experience.role}
                </h3>
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                {experience.company}
              </p>
            </div>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-50 dark:bg-zinc-900 text-zinc-400 border border-zinc-300 dark:border-zinc-800">
  {experience.type}
</span>

          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-12 flex-1">

          {/* Achievements - 2 Column Layout */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-4 text-foreground/90">
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {experience.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground/90">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg border border-zinc-300 bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"

                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="border border-b-0">
        <div className="grid grid-cols-1">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </Section>
  );
}

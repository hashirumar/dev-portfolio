"use client";

import { Section } from "@/components/section";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    duration: "2020 - 2024",
    grade: "Completed",
    type: "Bachelor's Degree",
    icon: <GraduationCap className="h-5 w-5 text-zinc-400" />,
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Data Structures & Algorithms",
    ],
  },
  {
    id: 2,
    degree: "Class 12 (CBSE)",
    institution: "City Montessori School (CMS), Lucknow",
    duration: "2019 - 2020",
    grade: "85%",
    type: "Higher Secondary",
    icon: <BookOpen className="h-5 w-5 text-zinc-400" />,
  },
  {
    id: 3,
    degree: "Class 10 (CBSE)",
    institution: "City Montessori School (CMS), Lucknow",
    duration: "2017 - 2018",
    grade: "85%",
    type: "Secondary",
    icon: <Award className="h-5 w-5 text-zinc-400" />,
  },
];

function EducationCard({ edu }: { edu: typeof education[0] }) {
  return (
    <div className="p-0 h-full overflow-hidden border-b last:border-b-0">
      <div className="flex flex-col h-full w-full">
        {/* Header Section */}
        <div className="border-b p-6 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-primary">{edu.icon}</div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {edu.degree}
                </h3>
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                {edu.institution}
              </p>
            </div>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-50 dark:bg-zinc-900 text-zinc-400 border border-zinc-300 dark:border-zinc-800">
  {edu.type}
</span>

          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{edu.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4" />
              <span>Grade: {edu.grade}</span>
            </div>
          </div>
        </div>

        {/* Content Section - Coursework (BTech only) */}
        {edu.coursework && (
          <div className="p-6">
            <h4 className="text-sm font-semibold mb-3 text-foreground/90">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="inline-flex items-center rounded-lg border border-zinc-300 bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"

                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="border border-b-0">
        <div className="grid p-12 grid-cols-1">
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "We needed the Nature Bright app done fast. Got it ahead of schedule with clean code. The payment integration worked smoothly from day one.",
    name: "Priya Sharma",
    company: "ChromeDM",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    text: "The analytics system hit 88% accuracy in production. Solid work on the ML models. Would work together again.",
    name: "Rajesh Kumar",
    company: "Media Analytics Corp",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    text: "Good experience working on the facial recognition project. The emotion detection model performed well in our tests at 85%.",
    name: "Dr. Anita Desai",
    company: "TechVision Labs",
    role: "AI Research Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 4,
    text: "The auth system turned out solid. JWT implementation is clean and the role permissions work as expected. No complaints.",
    name: "Michael Chen",
    company: "SecureAuth Solutions",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    text: "The Figma designs were production-ready out of the box. Easy handoff to dev team, minimal back and forth.",
    name: "Sarah Thompson",
    company: "DesignFirst Agency",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 6,
    text: "Load times dropped by 40% after the infrastructure changes. API performance is noticeably better. Solid technical skills.",
    name: "Vikram Patel",
    company: "CloudScale Inc",
    role: "Engineering Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];


export function Testimonials() {
  return (
    <Section id="testimonials" title="Testimonials">
      <div className="border-t">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 lg:bg-grid-3 border-r sm:bg-grid-2 bg-grid-1">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col border-b break-inside-avoid border-l",
                "transition-colors hover:bg-secondary/20"
              )}
            >
              <div className="px-4 py-5 sm:p-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground/80">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

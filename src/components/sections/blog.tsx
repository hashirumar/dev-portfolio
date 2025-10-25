import BlogCard from "@/components/blog-card";
import { Section } from "@/components/section";

// Project data with tech stacks
const projects = [
  {
    title: "News Channel Analytics ",
    publishedAt: "2024-01-15",
    summary: "AI system for real-time broadcast analysis tracking sentiment and ad frequency.",
    author: "Hashir Umar",
    slug: "news-analytics",
    image: "/projects/news-analytics.jpg",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
  },
  {
    title: "AI Headshot Generator",
    publishedAt: "2024-02-20",
    summary: "SaaS platform transforming portraits into professional headshots using AI models.",
    author: "Hashir Umar",
    slug: "headshot-generator",
    image: "/projects/headshot-gen.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Nature Bright App",
    publishedAt: "2024-03-10",
    summary: "Mobile wellness platform with personalized programs and Razorpay payment integration.",
    author: "Hashir Umar",
    slug: "nature-bright",
    image: "/projects/nature-bright.jpg",
    tech: ["Flutter", "Firebase", "Razorpay"],
  },
  {
    title: "Twitter Clone",
    publishedAt: "2024-04-05",
    summary: "Full-stack social platform with real-time feed updates and WebSocket notifications.",
    author: "Hashir Umar",
    slug: "twitter-clone",
    image: "/projects/twitter-clone.jpg",
    tech: ["React", "Express", "WebSockets", "Redis"],
  },
  {
    title: "MERN Authentication System",
    publishedAt: "2024-05-12",
    summary: "Enterprise-grade authentication with JWT tokens and role-based access control.",
    author: "Hashir Umar",
    slug: "mern-auth",
    image: "/projects/mern-auth.jpg",
    tech: ["React", "Node", "Express", "MongoDB"],
  },
  {
    title: "Facial Recognition System",
    publishedAt: "2024-06-18",
    summary: "CNN-based emotion detection achieving 85% accuracy for broadcast analytics.",
    author: "Hashir Umar",
    slug: "facial-recognition",
    image: "/projects/facial-recognition.jpg",
    tech: ["Python", "TensorFlow", "OpenCV", "Docker"],
  },
];

export async function Blog() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4    border border-b-0">
        {projects.map((data, idx) => (
          <BlogCard key={data.slug} data={data} priority={idx <= 2} />
        ))}
      </div>
    </Section>
  );
}

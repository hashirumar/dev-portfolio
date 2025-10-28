import BlogCard from "@/components/blog-card";
import { Section } from "@/components/section";
import { getProjects } from "@/lib/blog"; // Using getProjects now

export async function Blog() {
  const allProjects = await getProjects();
  
  const projects = allProjects.sort((a, b) => 
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-x border-t">
        {projects.map((data, idx) => (
          <BlogCard 
            key={data.slug} 
            data={data} 
            priority={idx <= 2}
            isProject={true} // Mark as project
          />
        ))}
      </div>
    </Section>
  );
}

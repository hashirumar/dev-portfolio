import { getUIDesignBySlug } from "@/content/ui-design";
import { notFound } from "next/navigation";
// If you're using @next/mdx or your own MDX renderer import it here
// import { MDXRemote } from "next-mdx-remote"; // example

interface Props {
  params: { slug: string }
}

export default function UIDesignDetailPage({ params }: Props) {
  const project = getUIDesignBySlug(params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-72 object-cover rounded-xl mb-8"
      />
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-lg text-muted-foreground mb-4">{project.date}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {(project.tools ?? []).map((tool: string) => (
          <span
            key={tool}
            className="text-xs px-2 py-1 bg-primary/70 text-white border border-primary/30 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
      {/* For simple case, just render as markdown */}
      <article className="prose prose-invert max-w-none">
        {project.content}
      </article>
      {/* Replace above with your favorite MDX renderer for full support */}
    </div>
  );
}

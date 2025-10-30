import Link from "next/link";
import { getUIDesigns } from "@/content/ui-design";

function DesignCard({ project }: { project: any }) {
  return (
    <Link
      href={`/ui-design/${project.slug}`}
      className="block w-full group relative rounded-2xl overflow-hidden shadow-lg border border-zinc-800 mb-10 transition hover:shadow-2xl"
    >
      {/* Project Image */}
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[420px] bg-zinc-900">
        <img
          src={project.cover}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
          draggable={false}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent pointer-events-none" />
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 m-6 p-4 rounded-xl bg-black/60 backdrop-blur-md z-10 max-w-[90%]">
          <div className="mb-1 text-white font-semibold text-lg sm:text-xl">{project.title}</div>
          <div className="text-xs text-zinc-200 mb-1 line-clamp-2">{project.description}</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {(project.tools ?? []).map((tool: string) => (
              <span
                key={tool}
                className="inline-block text-xs px-2 py-1 bg-primary/90 text-white rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function UIDesignGallery() {
  const designs = getUIDesigns();

  return (
    <section className="container mx-auto px-0 pb-20 pt-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-foreground tracking-tight px-4">UI Design Gallery</h1>
      <div className="flex flex-col space-y-0">
        {designs.map((project) => (
          <DesignCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

import { Post } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Extend Post type to include tech array
type PostWithTech = Post & {
  tech?: string[];
};

export default function BlogCard({
  data,
  priority,
  isProject = false, // NEW: flag to identify if it's a project
}: {
  data: PostWithTech;
  priority?: boolean;
  isProject?: boolean; // NEW
}) {
  const linkHref = isProject ? `/blog/${data.slug}` : `/blog/${data.slug}`;
  
  return (
    <Link
      href={linkHref}
      className="bg-background transition-colors hover:bg-secondary/20 p-4 rounded-lg border last:border-b-0 lg:border-r last:lg:border-r-0 border-b lg:border-b-0"
    >
      {data.image && (
        <Image
          className="object-cover border rounded-lg mb-4"
          src={data.image}
          width={1200}
          height={630}
          alt={data.title}
          priority={priority}
        />
      )}
      {!data.image && <div className="bg-gray-200 h-[180px] mb-4 rounded" />}
      
      <p className="mb-2">
        <time
          dateTime={data.publishedAt}
          className="text-xs text-muted-foreground"
        >
          {formatDate(data.publishedAt)}
        </time>
      </p>
      
      <h3 className="text-xl font-medium mb-3">{data.title}</h3>
      <p className="text-muted-foreground text-sm mb-3">{data.summary}</p>
      
      {/* Tech Stack Pills - only show if tech exists */}
      {data.tech && data.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg border border-zinc-300 bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

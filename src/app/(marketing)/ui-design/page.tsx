import { getUIDesigns } from "@/content/ui-design/";
import Link from "next/link";

export default function UIDesignPage() {
  const designs = getUIDesigns();

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-10">UI Design Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designs.map(d => (
          <Link
            key={d.slug}
            href={`/ui-design/${d.slug}`}
            className="group rounded-xl bg-card border border-zinc-700 shadow hover:scale-105 transition overflow-hidden relative"
          >
            <img
              src={d.cover}
              alt={d.title}
              className="object-cover w-full h-60"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-lg font-semibold text-white">{d.title}</h2>
              <p className="text-xs text-white/80 my-1">{d.description ?? ""}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {(d.tools ?? []).map((tool: string) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 bg-primary/70 border border-primary/40 text-white rounded mr-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

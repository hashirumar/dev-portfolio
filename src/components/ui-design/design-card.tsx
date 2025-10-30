import Link from "next/link";

export default function DesignCard({ data }) {
  return (
    <Link 
      href={`/ui-design/${data.slug}`}
      className="relative overflow-hidden rounded-xl shadow border border-zinc-700 bg-card group transition-all duration-200 hover:scale-[1.025]"
    >
      <img
        src={data.cover}
        alt={data.title}
        className="object-cover w-full h-64 transition group-hover:opacity-80"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-lg font-semibold text-white tracking-tight drop-shadow">{data.title}</h3>
        <p className="hidden sm:block text-xs text-white/80">{data.tools.join(", ")}</p>
      </div>
    </Link>
  );
}

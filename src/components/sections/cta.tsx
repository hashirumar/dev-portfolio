import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export function CTA() {
  return (
    <Section id="cta">
      <div className="border overflow-hidden relative text-center py-16 mx-auto">
        <p className="max-w-3xl text-foreground mb-6 text-balance mx-auto font-medium text-3xl">
          Open to Opportunities in<br/> AI & Full-Stack Development
        </p>

        <div className="flex justify-center">
          <Link
  href="/Hashir-AiMERN.pdf"
  download
  className={cn(
    buttonVariants({ variant: "default" }),
    "h-8 rounded-lg bg-zinc-50 dark:bg-zinc-900 ring-1 ring-zinc-300 dark:ring-zinc-800 text-zinc-400 group tracking-tight font-medium px-4 flex items-center justify-center"
  )}
>
  Resume
</Link>
        </div>
      </div>
    </Section>
  );
}

import Author from "@/components/blog-author";
import { CTA } from "@/components/sections/cta";
import { getPost, getProject } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  
  // Try to get as project first, fallback to blog post
  let content;
  try {
    content = await getProject(params.slug);
  } catch {
    content = await getPost(params.slug);
  }
  
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = content.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${content.slug}`,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  
  // Try to get as project first, fallback to blog post
  let content;
  try {
    content = await getProject(params.slug);
  } catch {
    try {
      content = await getPost(params.slug);
    } catch {
      notFound();
    }
  }

  if (!content) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: content.metadata.title,
            datePublished: content.metadata.publishedAt,
            dateModified: content.metadata.publishedAt,
            description: content.metadata.summary,
            image: content.metadata.image
              ? `${siteConfig.url}${content.metadata.image}`
              : `${siteConfig.url}/blog/${content.slug}/opengraph-image`,
            url: `${siteConfig.url}/blog/${content.slug}`,
            author: {
              "@type": "Person",
              name: siteConfig.name,
            },
          }),
        }}
      />
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 space-y-4 my-12">
        <Suspense
          fallback={
            <div className="mb-8 w-full h-64 bg-muted animate-pulse rounded-lg"></div>
          }
        >
          {content.metadata.image && (
            <div className="mb-8">
              <Image
                width={1920}
                height={1080}
                src={content.metadata.image}
                alt={content.metadata.title}
                className="w-full h-auto rounded-lg border"
              />
            </div>
          )}
        </Suspense>
        
        <div className="flex flex-col">
          <h1 className="title font-medium text-3xl tracking-tighter">
            {content.metadata.title}
          </h1>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <Suspense fallback={<p className="h-5" />}>
            <div className="flex items-center space-x-2">
              <time dateTime={content.metadata.publishedAt} className="text-sm">
                {formatDate(content.metadata.publishedAt)}
              </time>
            </div>
          </Suspense>
        </div>

        {/* Tech Stack Display (only for projects) */}
        {content.metadata.tech && content.metadata.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 py-4">
            {content.metadata.tech.map((tech: string) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-1 font-mono text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <Author
            twitterUsername={content.metadata.author}
            name={content.metadata.author}
            image={"/projects/hashirpfp.jpg"}
          />
        </div>
        
        <article
          className="prose dark:prose-invert mx-auto max-w-full"
          dangerouslySetInnerHTML={{ __html: content.source }}
        ></article>
      </div>
      <CTA />
    </section>
  );
}

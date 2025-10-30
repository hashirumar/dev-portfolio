import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();
const uiDesignDir = path.join(process.cwd(), "content", "ui-design");

export function getUIDesigns() {
  const files = fs.readdirSync(uiDesignDir).filter(f => f.endsWith(".mdx"));
  return files.map(filename => {
    const filePath = path.join(uiDesignDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      ...data,
      slug: filename.replace(/\.mdx$/, ""),
    };
  });
}

export function getUIDesignBySlug(slug: string) {
  const filePath = path.join(uiDesignDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...data, content, slug };
}

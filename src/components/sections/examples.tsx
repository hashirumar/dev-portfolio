"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

const codeSnippets = {
  react: `import React from 'react';

export default function HelloWorld() {
  return <h1>Hello React!</h1>;
}
`,
  js: `function greet(name) {
  console.log("Hello " + name);
}

greet("JavaScript");
`,
  php: `<?php
function greet($name) {
  echo "Hello " . $name;
}
greet("PHP");
?>
`,
  nextjs: `export default function HomePage() {
  return <h1>Welcome to Next.js!</h1>;
}
`,
};

function CodeCard() {
  const [selected, setSelected] = useState("react");

  const tabs = [
    { id: "react", label: "React" },
    { id: "js", label: "JavaScript" },
    { id: "php", label: "PHP" },
    { id: "nextjs", label: "Next.js" },
  ];

  return (
    <div className="max-w-3xl mx-auto rounded-xl bg-[#17181C] shadow-md border border-zinc-700 p-0 overflow-hidden relative">
      {/* Tabs row */}
      <div className="flex items-center px-4 pt-3 pb-0 border-b border-[#23242A] gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelected(tab.id)}
            className={`px-3 py-1 rounded-t-md text-sm font-medium transition-all duration-150
              ${
                selected === tab.id
                  ? "bg-[#22232b] text-white border border-b-transparent border-zinc-700"
                  : "bg-transparent text-zinc-400 hover:text-white"
              }
            `}
            style={{ marginBottom: '-2px' }}
          >
            {tab.label}
          </button>
        ))}
        <div className="flex-1" />
        {/* Example top-right github star button */}
        <button
          className="ml-auto px-2 py-1 text-zinc-400 hover:text-amber-400 transition-colors"
          title="Star on GitHub"
          onClick={() => window.open("https://github.com/your-repo", "_blank")}
        >
          ★ 2,345
        </button>
      </div>
      {/* Code area with grid background */}
      <div
        className="bg-[#18181E] w-full max-w-full px-8 pt-5 pb-7 font-mono text-sm text-zinc-50 overflow-x-auto rounded-b-xl"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <pre className="whitespace-pre leading-relaxed m-0 p-0">
          {codeSnippets[selected]}
        </pre>
      </div>
    </div>
  );
}

export function Examples() {
  return (
    <Section id="examples" title="Language">
      <div className="border-x border-t">
        <div className="  border py-12">
          <CodeCard />
        </div>
      </div>
    </Section>
  );
}

"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

const codeSnippets = {
  jsx: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
`,

  js: `function greet(name) {
  console.log("Hello " + name);
}

greet("JavaScript");

// Async fetch example
async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();
}
`,

  php: `<?php
function greet($name) {
  echo "Hello " . $name;
}

greet("PHP");
?>`,

  tsx: `import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Example</title>
      </Head>
      <div>Hello Next.js</div>
    </>
  );
}
`,
};

function CodeCard() {
  const [selected, setSelected] = useState("jsx");

  const tabs = [
    { id: "jsx", label: "React" },
    { id: "js", label: "JavaScript" },
    { id: "php", label: "PHP" },
    { id: "tsx", label: "Next.js" },
  ];

  return (
    <div className="max-w-3xl mx-auto rounded-xl bg-[#17181C] shadow-md border border-zinc-700 overflow-hidden relative">
      {/* Tabs */}
      <div className="flex items-center px-4 pt-3 pb-0 border-b border-[#23242A] gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelected(tab.id)}
            className={`px-3 py-1 rounded-t-md text-sm font-medium transition-all duration-150 ${
              selected === tab.id
                ? "bg-[#22232b] text-white border border-b-transparent border-zinc-700"
                : "bg-transparent text-zinc-400 hover:text-white"
            }`}
            style={{ marginBottom: "-2px" }}
          >
            {tab.label}
          </button>
        ))}
        <div className="flex-1" />
        <button
          className="ml-auto px-2 py-1 text-zinc-400 hover:text-amber-400 transition-colors"
          title="Star on GitHub"
          onClick={() => window.open("https://github.com/your-repo", "_blank")}
        >
          ★ 2,345
        </button>
      </div>
      {/* Code display */}
      <div className="p-4 overflow-x-auto">
        <SyntaxHighlighter
          language={selected}
          style={vscDarkPlus}
          customStyle={{
            backgroundColor: "transparent",
            margin: 0,
            padding: 0,
            fontSize: 14,
          }}
          wrapLines
          showLineNumbers
        >
          {codeSnippets[selected]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export function Examples() {
  return (
    <Section id="examples" title="Language">
      <div className="border-x border-t">
        <div className="border py-12">
          <CodeCard />
        </div>
      </div>
    </Section>
  );
}

"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Container from "@/components/common/container";
import Divider from "@/components/common/divider";
import { FloatingBlogNav } from "@/components/common/floating-blog-nav";
import Footer from "@/components/common/footer";
import type { BlogPost } from "@/lib/blogs-data";
import "./highlight-theme.css";

// Copy button for code blocks
function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(getText());
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="text-xs cursor-pointer text-muted-foreground hover:text-foreground border border-border rounded px-2 py-0.5 transition-colors bg-background"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function BlogContent({ blog }: { blog: BlogPost }) {
  return (
    <main className="relative min-h-screen w-full">
      <FloatingBlogNav title={blog.title} />

      <Container className="border-l-muted border-r-muted bg-background">
        <article className="px-4 py-12 md:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span>{blog.date}</span>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>{blog.author.name}</span>
              </div>
            </div>

            <h1 className="font-serif text-5xl italic leading-tight text-foreground md:text-6xl mb-12">
              {blog.title}
            </h1>

            {blog.coverImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-muted">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Markdown body */}
          <div className="blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[[rehypeHighlight, { detect: true }], rehypeRaw]}
              components={{
                // Code blocks with language label + copy button
                pre({ children, ...props }) {
                  const codeEl = (children as React.ReactElement)?.props;
                  const originalClassName = codeEl?.className ?? "";
                  const rawText = codeEl?.children ?? "";

                  // Expected format in className: "language-typescript:index.ts"
                  const cleanLangStr = originalClassName
                    .replace("language-", "")
                    .trim();

                  const [lang, filename] = cleanLangStr.split(":");
                  const displayLabel = filename || lang || "code";

                  // Reconstruct a clean class for highlight.js to find
                  const hljsClass = lang ? `language-${lang}` : "";

                  return (
                    <div className="relative my-8 rounded-2xl border border-muted/50 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-muted/20 border-b border-muted/30">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1 mr-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/20" />
                            <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                          </div>
                          <span className="text-[10px] font-bold tracking-widest text-muted-foreground">
                            {displayLabel}
                          </span>
                        </div>
                        <CopyButton getText={() => String(rawText)} />
                      </div>
                      <pre
                        {...props}
                        className="!m-0 !p-0 !rounded-none overflow-x-auto"
                      >
                        {/* Clone the code element with a cleaned-up className for hljs */}
                        {React.cloneElement(children as React.ReactElement, {
                          className: `${codeEl?.className} ${hljsClass} hljs`,
                        })}
                      </pre>
                    </div>
                  );
                },
                // Inline code
                code({ className, children, ...props }) {
                  const isBlock =
                    className?.startsWith("language-") ||
                    className?.includes("hljs");
                  if (isBlock) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code
                      className="font-mono text-[0.9em] bg-muted/50 border border-muted/30 rounded px-1.5 py-0.5 text-foreground/90"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* Footer Navigation */}
          <div className="mt-20 border-t border-muted pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blogs"
                className="flex items-center gap-2 font-medium text-foreground transition-opacity hover:opacity-70"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted">
                  <ArrowLeft className="h-4 w-4" />
                </div>
                Read more Blogs
              </Link>

              <a
                href="https://buymeacoffee.com/priyanshuu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-foreground transition-opacity hover:opacity-70"
              >
                Send a little caffeine love ☕️💖
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        </article>

        <Divider />
        <Footer />
      </Container>
    </main>
  );
}

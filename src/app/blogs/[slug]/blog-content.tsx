"use client";

import { ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
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

function ShareButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-1.5 rounded-full border border-muted/50 bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground cursor-pointer ml-auto"
    >
      <Share2 className="h-3.5 w-3.5" />
      {copied ? "Copied Link!" : "Share"}
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
              <ShareButton />
            </div>

            <h1 className="font-serif text-4xl italic leading-tight text-foreground md:text-5xl mb-6">
              {blog.title}
            </h1>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground border border-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

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
              rehypePlugins={[
                rehypeSlug,
                [rehypeHighlight, { detect: true }],
                rehypeRaw,
              ]}
              components={{
                video: ({ src, style, node, ...props }) => (
                  <video
                    src={src}
                    controls
                    width="100%"
                    style={{ borderRadius: "8px", marginTop: "8px" }}
                    {...props}
                  />
                ),
                // Code blocks with language label + copy button
                pre({ children, ...props }) {
                  const codeEl = (
                    children as React.ReactElement<{
                      className?: string;
                      children?: React.ReactNode;
                    }>
                  )?.props;
                  const originalClassName = codeEl?.className ?? "";

                  const extractText = (element: React.ReactNode): string => {
                    if (
                      typeof element === "string" ||
                      typeof element === "number"
                    ) {
                      return String(element);
                    }
                    if (Array.isArray(element)) {
                      return element.map(extractText).join("");
                    }
                    if (React.isValidElement(element)) {
                      return extractText(
                        (element.props as { children?: React.ReactNode })
                          .children,
                      );
                    }
                    return "";
                  };

                  const rawText = extractText(codeEl?.children);

                  // Expected format in className: "language-typescript:index.ts"
                  const cleanLangStr = originalClassName
                    .replace("language-", "")
                    .replace("hljs", "")
                    .trim();

                  const [rawLang, filename] = cleanLangStr.split(":");
                  const lang = rawLang?.split(" ")[0]?.trim() || "";
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
                        {React.cloneElement(
                          children as React.ReactElement<{
                            className?: string;
                          }>,
                          {
                            className: `${codeEl?.className} ${hljsClass} hljs`,
                          },
                        )}
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
                      className="font-mono text-[0.9em] bg-muted dark:bg-muted/50 border border-muted-foreground/20 rounded px-1.5 py-0.5 text-foreground font-semibold"
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
            </div>
          </div>
        </article>

        <Divider />
        <Footer />
      </Container>
    </main>
  );
}

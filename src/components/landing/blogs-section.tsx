"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogListCard } from "@/app/blogs/blog-list-card";
import type { BlogPost } from "@/lib/blogs-server";
import Container from "../common/container";
import Heading from "../common/Heading";
import GradientButton from "../ui/gradient-button";

const BlogsSection = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          // Only show 2-3 blogs
          setBlogs(data.slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Container className="px-4 sm:px-8 py-4">
        <Heading text="Recent Blogs" />
        <div className="py-4 animate-pulse">
          <div className="h-24 bg-muted/50 rounded-lg w-full mb-4" />
          <div className="h-24 bg-muted/50 rounded-lg w-full" />
        </div>
      </Container>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Recent Blogs" />
      <div className="py-4 flex flex-col gap-4 divide-y divide-muted/30">
        {blogs.map((blog) => (
          <div key={blog.slug} className="-my-4">
            <BlogListCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-2">
        <GradientButton
          onClick={() => router.push("/blogs")}
          className="px-4 flex items-center gap-x-2 py-2 text-sm"
        >
          View All <ChevronRight className="size-4" />
        </GradientButton>
      </div>
    </Container>
  );
};

export default BlogsSection;

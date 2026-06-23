import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogs-server";
import BlogContent from "./blog-content";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return <BlogContent blog={blog} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogs-server";
import BlogContent from "./blog-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Priyanshu Kayarkar",
    };
  }

  // blog.coverImage from frontmatter (assumed to be a URL)
  const ogImage = blog.coverImage || "https://priyanshuu.tech/profile.jpg";
  // The user wanted "title should be title of blog"
  // "make the banner of that link to be banner of the blog !!"

  return {
    title: `${blog.title} | Priyanshu Kayarkar`,
    description: blog.excerpt || `Read more about ${blog.title}`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || `Read more about ${blog.title}`,
      type: "article",
      url: `https://priyanshuu.tech/blogs/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || `Read more about ${blog.title}`,
      images: [ogImage],
    },
  };
}

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

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
  tags?: string[];
  author: {
    name: string;
    avatar: string;
  };
};

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export async function getAllBlogs(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        coverImage: data.coverImage,
        tags: data.tags || [],
        author: {
          name: data.authorName,
          avatar: data.authorAvatar,
        },
      } as BlogPost;
    });

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      coverImage: data.coverImage,
      tags: data.tags || [],
      author: {
        name: data.authorName,
        avatar: data.authorAvatar,
      },
    } as BlogPost;
  } catch (_e) {
    return null;
  }
}

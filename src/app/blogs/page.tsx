import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/container";
import Divider from "@/components/common/divider";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import type { BlogPost } from "@/lib/blogs-data";
import { getAllBlogs } from "@/lib/blogs-server";

const BlogListCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block py-8 transition-opacity hover:opacity-70"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.author.name}</span>
        </div>
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          {blog.title}
        </h2>
        <p className="line-clamp-2 text-muted-foreground">{blog.excerpt}</p>
        <div className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
          Read article <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <main className="relative min-h-screen w-full">
      <Container className="min-h-screen border-l-muted border-r-muted bg-background">
        <PageNavigation />

        <div className="px-4 py-12 md:px-6">
          <header className="mb-12">
            <h1 className="font-serif text-5xl italic text-foreground md:text-6xl">
              Blogs
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thoughts on design, engineering, and everything in between.
            </p>
          </header>

          <div className="divide-y divide-muted/30">
            {blogs.map((blog) => (
              <BlogListCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>

        <Divider />
        <Footer />
      </Container>
    </main>
  );
}

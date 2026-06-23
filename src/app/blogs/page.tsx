import Container from "@/components/common/container";
import Divider from "@/components/common/divider";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { getAllBlogs } from "@/lib/blogs-server";
import { BlogListCard } from "./blog-list-card";

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

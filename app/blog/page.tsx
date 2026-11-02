import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { ArchiveGrid } from "@/components/archive-grid";
import { CategoryTabs } from "@/components/category-tabs";

import { getCategories, getPosts } from "@/lib/content";
import { groupByYearMonth } from "@/lib/grouping";

export const metadata = {
  title: "文章",
  description: "Agent 开发实践、独立开发记录与后端笔记。",
};

export default function BlogPage() {
  const posts = getPosts();
  const categories = getCategories(posts);
  const groups = groupByYearMonth(posts);

  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">文章</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Agent 开发实践、独立开发记录与后端笔记。
          </p>
          <span className="pixel-badge text-sm">共 {posts.length} 篇</span>
        </div>

        <PixelSeparator />

        <CategoryTabs categories={categories} totalCount={posts.length} />

        <ArchiveGrid
          groups={groups}
          emptyMessage="还没有文章。"
          renderItem={(post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              category={post.category}
              imageUrl={post.imageUrl}
              readTime={post.readTime}
              index={index}
            />
          )}
        />
      </section>
    </div>
  );
}

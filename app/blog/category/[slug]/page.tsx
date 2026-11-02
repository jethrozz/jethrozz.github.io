import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { ArchiveGrid } from "@/components/archive-grid";
import { CategoryTabs } from "@/components/category-tabs";

import { getCategories, getPosts } from "@/lib/content";
import { groupByYearMonth } from "@/lib/grouping";

/** 每个分类一张静态归档页，generateStaticParams 按分类集合生成 */

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getCategories(getPosts()).map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategories(getPosts()).find((c) => c.slug === params.slug);
  return {
    title: category ? `${category.name} - 文章` : "分类 - 文章",
  };
}

export default function BlogCategoryPage({ params }: CategoryPageProps) {
  const posts = getPosts();
  const categories = getCategories(posts);
  const active = categories.find((category) => category.slug === params.slug);

  if (!active) {
    return (
      <div className="pixel-grid min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">分类不存在。</p>
      </div>
    );
  }

  const filtered = posts.filter((post) => post.categorySlug === params.slug);
  const groups = groupByYearMonth(filtered);

  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground mb-2">文章 · 分类</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{active.name}</h1>
          <span className="pixel-badge text-sm">共 {filtered.length} 篇</span>
        </div>

        <PixelSeparator />

        <CategoryTabs categories={categories} totalCount={posts.length} activeSlug={params.slug} />

        <ArchiveGrid
          groups={groups}
          emptyMessage={`「${active.name}」分类下还没有文章。`}
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

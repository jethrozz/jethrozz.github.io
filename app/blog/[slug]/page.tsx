import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeftIcon, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PixelSeparator } from "@/components/pixel-separator";
import { MarkdownContent } from "@/components/markdown-renderer";

import { findPost, getPosts } from "@/lib/content";
import { formatDate } from "@/lib/grouping";

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = findPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = findPost(params.slug as string);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">文章不存在</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              返回文章列表
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-grid min-h-screen">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="pixel-button mb-8">
            <Link href="/blog" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              返回文章列表
            </Link>
          </Button>

          <div>
            <Link
              href={`/blog/category/${post.categorySlug}`}
              className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 border-2 border-black hover:bg-primary/80 transition-colors mb-4"
            >
              {post.category}
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {formatDate(post.date)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                约 {post.readTime} 分钟阅读
              </span>
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <MarkdownContent content={post.content} />
          </div>
        </div>
      </article>
    </div>
  );
}

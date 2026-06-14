import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
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
              Back to Blog
            </Link>
          </Button>

          <div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>{post.date.toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
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

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
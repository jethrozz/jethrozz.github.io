import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PixelSeparator } from "@/components/pixel-separator";
import { MarkdownContent } from "@/components/markdown-renderer";
import { ArrowLeftIcon, Calendar, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { findWork, getWorks } from "@/lib/content";
import { formatDate } from "@/lib/grouping";

export function generateStaticParams() {
  return getWorks().map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const work = findWork(params.slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.description,
  };
}

export default function WorksPost({ params }: { params: { slug: string } }) {
  const work = findWork(params.slug as string);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">项目不存在</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              返回作品列表
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
            <Link href="/works" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              返回作品列表
            </Link>
          </Button>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{work.title}</h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar size={16} />
                {formatDate(work.date)}
              </span>
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary text-black px-3 py-1 text-sm font-medium border-2 border-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <MarkdownContent content={work.content} />

            <PixelSeparator />

            <div className="mt-8 text-center">
              <Button asChild className="pixel-button text-lg py-6">
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  访问项目
                  <ExternalLinkIcon className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

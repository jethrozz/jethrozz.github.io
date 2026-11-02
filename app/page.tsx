import { PixelHero } from "@/components/pixel-hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { WorksCard } from "@/components/works-card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getPosts, getWorks } from "@/lib/content";

const featuredPosts = getPosts().slice(0, 3);
const featuredWorks = getWorks().slice(0, 2);

export default function Home() {
  return (
    <div className="pixel-grid min-h-screen">
      <PixelHero />
      
      <PixelSeparator />
      
      <AboutSection />
      
      <PixelSeparator />
      
      <ServicesSection />
      
      <PixelSeparator />
      
      {/* Featured Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">精选作品</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works" className="flex items-center">
              查看全部
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, index) => (
            <WorksCard
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              imageUrl={work.imageUrl}
              tags={work.tags}
              index={index}
            />
          ))}
        </div>
      </section>
      
      <PixelSeparator />
      
      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">最新文章</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog" className="flex items-center">
              阅读全部
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              imageUrl={post.imageUrl}
              readTime={post.readTime}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
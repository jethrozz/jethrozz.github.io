import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  date: Date;
  imageUrl: string;
  readTime: number;
  index?: number;
}

export function BlogCard({ title, excerpt, slug, date, imageUrl, readTime, index = 0 }: BlogPostProps) {
  return (
    <div
      style={{ animationDelay: `${index * 75}ms` }}
      className="pixel-card overflow-hidden h-full flex flex-col pixel-card-animate transition-all duration-200 hover:-translate-y-2"
    >
      <Link href={`/blog/${slug}`} className="block h-full flex flex-col group">
        <div className="h-48 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {format(date, "MMM dd, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {readTime} min read
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">{excerpt}</p>
          
          <div className="bg-primary text-black font-bold px-4 py-2 inline-block border-2 border-black mt-auto transition-colors group-hover:bg-primary/80">
            Read More
          </div>
        </div>
      </Link>
    </div>
  );
}
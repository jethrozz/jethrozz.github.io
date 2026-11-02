import Link from "next/link";
import { LayoutGrid } from "lucide-react";

import type { CategorySummary } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: CategorySummary[];
  totalCount: number;
  /** 当前激活的分类 slug；null 表示「全部」 */
  activeSlug?: string | null;
}

const ACTIVE_CLASSES =
  "bg-primary text-black border-black dark:bg-primary dark:text-black";
const INACTIVE_CLASSES =
  "bg-white text-black border-black hover:bg-primary/80 dark:bg-zinc-900 dark:text-white dark:border-zinc-950 dark:hover:bg-primary dark:hover:text-black";

/** 文章分类 Tab：全部 N / 各分类 N，服务端渲染的链接按钮组，无客户端 JS */
export function CategoryTabs({ categories, totalCount, activeSlug = null }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
      <Link
        href="/blog"
        className={cn(
          "pixel-button rounded-none inline-flex items-center gap-1.5 text-xs sm:text-sm",
          activeSlug === null ? ACTIVE_CLASSES : INACTIVE_CLASSES
        )}
      >
        <LayoutGrid size={14} />
        全部
        <span className="opacity-70">{totalCount}</span>
      </Link>

      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          className={cn(
            "pixel-button rounded-none inline-flex items-center gap-1.5 text-xs sm:text-sm",
            activeSlug === category.slug ? ACTIVE_CLASSES : INACTIVE_CLASSES
          )}
        >
          {category.name}
          <span className="opacity-70">{category.count}</span>
        </Link>
      ))}
    </div>
  );
}

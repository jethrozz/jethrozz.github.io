import { cn } from "@/lib/utils";

/**
 * 年月归档分隔头：延续 PixelSeparator 的黑色像素块 + 黄色投影语言，
 * 中间是标签牌（年份/月份文字 + 数量徽标），两侧留白色带填充。
 */

function PixelSquares() {
  return (
    <span aria-hidden className="flex gap-1">
      {[...Array(2)].map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 bg-black"
          style={{ boxShadow: `2px 2px 0 0 #FFC72C` }}
        />
      ))}
    </span>
  );
}

interface ArchiveHeadingProps {
  label: string;
  count: number;
  level?: "year" | "month";
}

export function ArchiveHeading({ label, count, level = "year" }: ArchiveHeadingProps) {
  const isYear = level === "year";
  const fillLine = <div aria-hidden className="hidden sm:block flex-1 h-1 bg-foreground/10" />;

  if (!isYear) {
    return (
      <div className="flex items-center gap-2 sm:gap-3 mt-12 mb-6">
        <PixelSquares />
        <div
          className="flex items-center gap-2 bg-foreground px-3 py-1"
          style={{ boxShadow: `3px 3px 0 0 #FFC72C` }}
        >
          <h3 className="text-base md:text-lg text-background">{label}</h3>
          <span className="pixel-badge text-[0.65rem]">{count}</span>
        </div>
        {fillLine}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 mt-16 first:mt-12 mb-8">
      {fillLine}
      <PixelSquares />
      <div
        className="flex items-center gap-3 bg-foreground px-5 py-2"
        style={{ boxShadow: `4px 4px 0 0 #FFC72C` }}
      >
        <h2 className="text-xl md:text-2xl text-background">{label}</h2>
        <span className="pixel-badge">{count}</span>
      </div>
      <PixelSquares />
      {fillLine}
    </div>
  );
}

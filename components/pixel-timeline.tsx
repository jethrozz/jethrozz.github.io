import { cn } from "@/lib/utils";

export interface TimelineItem {
  /** 职位 / 学位 */
  title: string;
  /** 公司 / 学校 */
  subtitle: string;
  period: string;
  points: string[];
}

interface PixelTimelineProps {
  items: TimelineItem[];
  className?: string;
}

/**
 * 像素风时间线：左侧半透明垂直轨道 + 黄色方块节点 + pixel-card 内容卡。
 * 用于简历的工作经历与教育背景。
 */
export function PixelTimeline({ items, className }: PixelTimelineProps) {
  return (
    <ol
      className={cn(
        "relative ml-3 space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-1 before:bg-foreground/15",
        className
      )}
    >
      {items.map((item, index) => (
        <li key={`${item.subtitle}-${index}`} className="relative pl-10">
          <span
            aria-hidden
            className="absolute left-0 top-2 w-4 h-4 bg-primary border-2 border-foreground"
          />
          <div className="pixel-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-1">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <span className="pixel-badge text-[0.65rem] whitespace-nowrap">{item.period}</span>
            </div>
            <p className="font-bold mb-3 text-accent">{item.subtitle}</p>
            <ul className="space-y-1.5 list-disc list-outside marker:text-primary pl-5 text-muted-foreground">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

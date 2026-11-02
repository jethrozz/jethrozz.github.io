import type { ReactNode } from "react";
import { Ghost } from "lucide-react";

import { ArchiveHeading } from "@/components/archive-heading";
import type { YearGroup } from "@/lib/grouping";
import { cn } from "@/lib/utils";

interface ArchiveGridProps<T extends { slug: string; date: string }> {
  groups: YearGroup<T>[];
  renderItem: (item: T, index: number) => ReactNode;
  /** 覆盖默认的三列网格（如随想页两列） */
  gridClassName?: string;
  emptyMessage?: string;
}

/**
 * 四大模块共用的「卡片流 + 年月分隔头」归档版式。
 * 结构：年份头(该年数量) → 月份头(该月数量) → 该月卡片网格。
 */
export function ArchiveGrid<T extends { slug: string; date: string }>({
  groups,
  renderItem,
  gridClassName,
  emptyMessage = "这里还什么都没有。",
}: ArchiveGridProps<T>) {
  const total = groups.reduce((sum, group) => sum + group.count, 0);
  if (total === 0) {
    return (
      <div className="pixel-card p-12 text-center mt-12">
        <Ghost size={48} className="mx-auto mb-4 text-muted-foreground" />
        <p className="text-xl text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div>
      {groups.map((group) => (
        <section key={group.year} aria-label={`${group.year} · ${group.count} entries`}>
          <ArchiveHeading level="year" label={String(group.year)} count={group.count} />
          {group.months.map((monthGroup) => (
            <div key={`${group.year}-${monthGroup.month}`}>
              <ArchiveHeading
                level="month"
                label={monthGroup.label}
                count={monthGroup.count}
              />
              <div
                className={cn(
                  "grid grid-cols-1 gap-8 mb-10",
                  gridClassName ?? "md:grid-cols-2 lg:grid-cols-3"
                )}
              >
                {monthGroup.items.map((item, index) => renderItem(item, index))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

import { PixelSeparator } from "@/components/pixel-separator";
import { ArchiveGrid } from "@/components/archive-grid";
import { ThoughtCard } from "@/components/thought-card";

import { getThoughts } from "@/lib/content";
import { groupByYearMonth } from "@/lib/grouping";

export const metadata = {
  title: "随想",
  description: "一些火花、深夜的点子和随手记下的便签——按月份归档。",
};

export default function ThoughtsPage() {
  const thoughts = getThoughts();
  const groups = groupByYearMonth(thoughts);

  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">随想</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            一些火花、深夜的点子和随手记下的便签——按月份归档。
          </p>
          <span className="pixel-badge text-sm">共 {thoughts.length} 条</span>
        </div>

        <PixelSeparator />

        <ArchiveGrid
          groups={groups}
          gridClassName="grid-cols-1 md:grid-cols-2"
          emptyMessage="还没有随想。"
          renderItem={(thought, index) => <ThoughtCard thought={thought} index={index} />}
        />
      </section>
    </div>
  );
}

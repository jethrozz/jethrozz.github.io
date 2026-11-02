import { PixelSeparator } from "@/components/pixel-separator";
import { WorksCard } from "@/components/works-card";
import { ArchiveGrid } from "@/components/archive-grid";

import { getWorks } from "@/lib/content";
import { groupByYearMonth } from "@/lib/grouping";

export const metadata = {
  title: "作品",
  description: "我做过的项目、设计与创意实验合集。",
};

export default function WorksPage() {
  const works = getWorks();
  const groups = groupByYearMonth(works);

  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我的作品</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            我做过的项目、设计与创意实验合集。
          </p>
          <span className="pixel-badge text-sm">共 {works.length} 个项目</span>
        </div>

        <PixelSeparator />

        <ArchiveGrid
          groups={groups}
          emptyMessage="还没有作品。"
          renderItem={(work, index) => (
            <WorksCard
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              imageUrl={work.imageUrl}
              tags={work.tags}
              index={index}
            />
          )}
        />
      </section>
    </div>
  );
}

import type { Thought } from "@/lib/types";

interface ThoughtCardProps {
  thought: Thought;
  index?: number;
}

/** 随想卡片：只展示一段文字，无标题/日期/详情页（时间由年月归档头表达） */
export function ThoughtCard({ thought, index = 0 }: ThoughtCardProps) {
  return (
    <article
      style={{ animationDelay: `${index * 75}ms` }}
      className="pixel-card p-6 h-full flex flex-col pixel-card-animate transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="space-y-3">
        {thought.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

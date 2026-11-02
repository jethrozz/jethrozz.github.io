/**
 * 简历数据源。
 * 简历是结构化的多段落数据（不适合塞进单篇 markdown），
 * 集中放在这里便于维护。
 */

import type { TimelineItem } from "@/components/pixel-timeline";

export interface ResumeSkill {
  name: string;
  /** 0-100 */
  level: number;
}

export const resumeProfile = {
  name: "Jethrozz",
  role: "后端 · 全栈 · Agent 工程师",
  avatar: "/images/avatar.png",
  location: "重庆",
  /** 没有邮箱就留空字符串，页面上会自动隐藏 */
  email: "jethrozhu@qq.com",
  github: "https://github.com/jethrozz",
  bio: [
    "8 年后端开发经验，长期深耕大型系统的设计与开发——高并发、高可用对我来说是日常工作，而不是简历上的装饰词。",
    "如今把重心延伸到 Agent 的设计与开发，也写全栈。业余时间是一名独立开发爱好者，正在打磨自己的产品。",
    "2022 年起关注 Sui，2024 年底正式转向 Move 智能合约开发；连续两届参加 Sui Overflow（2025 全球前 100）。下一个目标是做一款自己的游戏——用写后端的方式理解它，用像素的方式表达它。",
  ],
};

export const resumeSkills: ResumeSkill[] = [
  { name: "后端开发与架构", level: 95 },
  { name: "大型系统设计", level: 90 },
  { name: "Agent 设计与开发", level: 85 },
  { name: "全栈开发", level: 80 },
  { name: "Sui / Move 智能合约", level: 65 },
  { name: "游戏开发（计划中）", level: 30 },
];

export const resumeExperience: TimelineItem[] = [
  {
    title: "高级后端开发工程师",
    subtitle: "重庆中科云重科技",
    period: "2023 – 至今",
    points: [
      "负责核心业务的后端研发，持续支撑高并发、高可用的生产环境。",
      "期间接触 Web3 与远程开发：2022 年起关注 Sui，2024 年底正式转向 Move 智能合约开发。",
      "业余时间投入独立产品与 Agent 方向的探索。",
    ],
  },
  {
    title: "高级后端开发工程师",
    subtitle: "货拉拉（深圳）",
    period: "2019 – 2023",
    points: [
      "参与大型物流平台的后端研发，直面海量订单与高并发场景。",
      "四年实战，积累了大规模分布式系统的设计与开发经验。",
    ],
  },
  {
    title: "Java 开发工程师",
    subtitle: "中国科学院重庆绿色智能技术研究院 · 智能研究中心",
    period: "2018 – 2019",
    points: ["毕业后第一份工作，参与研究院智能研究中心的系统开发工作。"],
  },
  {
    title: "独立开发 & 黑客松",
    subtitle: "Sui Overflow 参赛者",
    period: "2025 – 至今",
    points: [
      "Sui Overflow 2025 全球前 100（参赛作品：Lucky1SUI 链上彩票）。",
      "2026 年再度参赛，持续深耕 Sui 生态。",
      "业余独立开发：Deck It（AI 装修设计）、LeadFlow Memory（社媒线索自动化）等产品。",
    ],
  },
];

export const resumeEducation: TimelineItem[] = [];

/** 精选项目（对应 content/works/ 下的 slug），展示在简历页底部 */
export const featuredWorkSlugs = ["leadflow-memory", "deck-it", "lucky1sui"];

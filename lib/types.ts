/**
 * 全站统一的内容条目数据模型。
 * 文章 / 随想 / 作品集共用基础字段，各自扩展特有字段。
 * 内容源为 content/ 目录下的 markdown 文件（见 lib/content.ts）。
 */

export interface BaseEntry {
  slug: string;
  title: string;
  /** ISO 日期字符串，格式 YYYY-MM-DD（避免时区问题，直接按字符串处理） */
  date: string;
  excerpt: string;
  /** markdown 正文 */
  content: string;
}

export interface Post extends BaseEntry {
  category: string;
  categorySlug: string;
  imageUrl: string;
  tags: string[];
  /** 阅读时长（分钟），由正文自动估算 */
  readTime: number;
}

/** 随想：就是一段文字，日期仅用于年月归档分组 */
export interface Thought {
  slug: string;
  /** ISO 日期字符串，格式 YYYY-MM-DD */
  date: string;
  content: string;
}

export interface Work extends BaseEntry {
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface CategorySummary {
  name: string;
  slug: string;
  count: number;
}

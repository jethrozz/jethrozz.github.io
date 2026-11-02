import fs from "fs";
import path from "path";

import matter from "gray-matter";

import type { CategorySummary, Post, Thought, Work } from "@/lib/types";

/**
 * 内容加载器：构建期读取 content/ 目录下的 markdown 文件。
 * 站点为 output: 'export' 纯静态导出，所有 fs 读取都发生在 SSG 阶段。
 */

const CONTENT_ROOT = path.join(process.cwd(), "content");

type Frontmatter = Record<string, unknown>;

interface LoadedEntry {
  slug: string;
  fm: Frontmatter;
  body: string;
}

function readDir(dirName: string): LoadedEntry[] {
  const dir = path.join(CONTENT_ROOT, dirName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, fm: data as Frontmatter, body: content.trim() };
    });
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

/**
 * gray-matter 会把未加引号的 YAML 日期解析成 Date 对象，
 * 这里统一归一化为 YYYY-MM-DD 字符串；文件名形如
 * `2023-04-15-xxx.md` 时可从文件名兜底提取日期。
 */
function normalizeDate(value: unknown, slug: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const str = asString(value);
  if (str && /^\d{4}-\d{2}-\d{2}/.test(str)) return str.slice(0, 10);
  const fromSlug = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  return fromSlug ? fromSlug[1] : "1970-01-01";
}

/** 分类名 → URL 友好的 slug：保留中日文等 Unicode 字母，空格转连字符 */
export function slugifyText(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "");
}

function humanizeSlug(slug: string): string {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function deriveExcerpt(body: string, maxLength = 160): string {
  const plain = body
    // 去掉图片、链接语法和行内标记，得到纯文本摘要
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*`_~|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trimEnd()}…`;
}

/** 中英混排的阅读时长估算：中文按字符数（400/分钟），英文按词数（200/分钟） */
function computeReadTime(text: string): number {
  const cjk = (text.match(/[\u4e00-\u9fff\u3040-\u30ff]/g) ?? []).length;
  const words = text
    .replace(/[\u4e00-\u9fff\u3040-\u30ff]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(cjk / 400 + words / 200));
}

function byDateDesc<T extends { date: string; }>(a: T, b: T): number {
  return b.date.localeCompare(a.date);
}

// ---- Posts -----------------------------------------------------------------

let postsCache: Post[] | null = null;

const DEFAULT_POST_IMAGE = "/images/blog/evolution-pixel-art.webp";

export function getPosts(): Post[] {
  if (postsCache) return postsCache;
  postsCache = readDir("posts")
    .map<Post>((entry) => {
      const category = asString(entry.fm.category) ?? "Uncategorized";
      return {
        slug: entry.slug,
        title: asString(entry.fm.title) ?? humanizeSlug(entry.slug),
        date: normalizeDate(entry.fm.date, entry.slug),
        excerpt: asString(entry.fm.excerpt) ?? deriveExcerpt(entry.body),
        content: entry.body,
        category,
        categorySlug: slugifyText(category),
        imageUrl: asString(entry.fm.imageUrl) ?? DEFAULT_POST_IMAGE,
        tags: Array.isArray(entry.fm.tags)
          ? entry.fm.tags.filter((t): t is string => typeof t === "string")
          : [],
        readTime: computeReadTime(entry.body),
      };
    })
    .sort(byDateDesc);
  return postsCache;
}

/** 聚合分类及各类文章数量，数量多的在前，同类按名称排序 */
export function getCategories(posts: Post[]): CategorySummary[] {
  const map = new Map<string, CategorySummary>();
  for (const post of posts) {
    const existing = map.get(post.category);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(post.category, { name: post.category, slug: post.categorySlug, count: 1 });
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
}

export function findPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

// ---- Thoughts --------------------------------------------------------------

let thoughtsCache: Thought[] | null = null;

export function getThoughts(): Thought[] {
  if (thoughtsCache) return thoughtsCache;
  thoughtsCache = readDir("thoughts")
    .map<Thought>((entry) => ({
      slug: entry.slug,
      date: normalizeDate(entry.fm.date, entry.slug),
      content: entry.body,
    }))
    .sort(byDateDesc);
  return thoughtsCache;
}

// ---- Works -----------------------------------------------------------------

let worksCache: Work[] | null = null;

const DEFAULT_WORK_IMAGE = "/images/works/pixel-arcade.webp";

export function getWorks(): Work[] {
  if (worksCache) return worksCache;
  worksCache = readDir("works")
    .map<Work>((entry) => ({
      slug: entry.slug,
      title: asString(entry.fm.title) ?? humanizeSlug(entry.slug),
      date: normalizeDate(entry.fm.date, entry.slug),
      excerpt: asString(entry.fm.excerpt) ?? deriveExcerpt(entry.body),
      description: asString(entry.fm.description) ?? deriveExcerpt(entry.body, 100),
      content: entry.body,
      imageUrl: asString(entry.fm.imageUrl) ?? DEFAULT_WORK_IMAGE,
      tags: Array.isArray(entry.fm.tags)
        ? entry.fm.tags.filter((t): t is string => typeof t === "string")
        : [],
      link: asString(entry.fm.link) ?? "#",
    }))
    .sort(byDateDesc);
  return worksCache;
}

export function findWork(slug: string): Work | undefined {
  return getWorks().find((work) => work.slug === slug);
}

import { format } from "date-fns";

import type { BaseEntry } from "@/lib/types";

export const MONTH_LABELS = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

/**
 * 把 YYYY-MM-DD 解析为「本地时区正午」的 Date。
 * 直接 new Date(iso) 会得到 UTC 零点，在东八区以西的时区会向前漂移一天，
 * 取正午时刻可以同时避开夏令时切换的边界问题。
 */
export function toDate(iso: string): Date {
  const [y = 1970, m = 1, d = 1] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12);
}

export function formatDate(iso: string, pattern = "yyyy年M月d日"): string {
  return format(toDate(iso), pattern);
}

export interface MonthGroup<T> {
  /** 1-12 */
  month: number;
  label: string;
  count: number;
  items: T[];
}

export interface YearGroup<T> {
  year: number;
  count: number;
  months: MonthGroup<T>[];
}

/**
 * 按年份 → 月份两级分组，并统计每级数量。
 * 入参需已按日期倒序（内容加载器保证），组内保持原有顺序。
 */
export function groupByYearMonth<T extends { date: string }>(items: T[]): YearGroup<T>[] {
  const years: YearGroup<T>[] = [];

  for (const item of items) {
    const year = Number(item.date.slice(0, 4));
    const month = Number(item.date.slice(5, 7));

    let yearGroup = years.find((g) => g.year === year);
    if (!yearGroup) {
      yearGroup = { year, count: 0, months: [] };
      years.push(yearGroup);
    }
    yearGroup.count += 1;

    let monthGroup = yearGroup.months.find((g) => g.month === month);
    if (!monthGroup) {
      monthGroup = { month, label: MONTH_LABELS[month - 1] ?? String(month), count: 0, items: [] };
      yearGroup.months.push(monthGroup);
    }
    monthGroup.count += 1;
    monthGroup.items.push(item);
  }

  return years
    .sort((a, b) => b.year - a.year)
    .map((y) => ({ ...y, months: [...y.months].sort((a, b) => b.month - a.month) }));
}

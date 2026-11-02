# 内容更新指南

本站所有内容都是**纯静态文件**，不需要数据库。

| 内容 | 位置 | 说明 |
|---|---|---|
| 文章 | `content/posts/*.md` | URL = `/blog/文件名` |
| 随想 | `content/thoughts/*.md` | 一段话，无详情页 |
| 作品 | `content/works/*.md` | URL = `/works/文件名` |
| 简历 | `lib/resume.ts` | 结构化数据，直接改 TS 文件 |

图片统一放 `public/images/` 下（文章图 `blog/`、作品图 `works/`），frontmatter 里用 `/images/...` 绝对路径引用。

## 发布流程（GitHub Pages 自动部署）

线上地址：**https://jethrozz.github.io/**

```bash
# 1. 改完内容后，提交并推送
git add -A
git commit -m "新文章：xxx"     # 备注随意，写清楚改了什么即可
git push

# 2. 等待 1~2 分钟自动构建上线（无需任何手动操作）
```

- 推送后 GitHub Actions 自动 `npm run build` 并发布，进度可在仓库 Actions 页查看
- 本地想先预览再推：`npm run build && npx serve out`（out/ 目录就是最终站点）

> ⚠️ `npm run dev` 模式下新增/修改 md 文件**不会自动热更新**（内容在构建期读取并缓存）。dev 下改了内容请重启 dev server，或直接用上面的 build + serve 验证。
> ⚠️ dev 运行期间**不要执行 `npm run build`**（共用 .next 目录会互相损坏缓存，导致页面样式错乱；如遇此情况：停掉 dev → 删 .next → 重启）。

---

## 一、写文章（content/posts/）

新建 `content/posts/my-first-post.md`（**文件名即 URL slug，建好后不要随意改名**，否则链接会变）：

```markdown
---
title: 文章标题
date: 2026-08-28
category: 随笔
tags:
  - 标签一
  - 标签二
excerpt: 列表卡片上的摘要（可选，不写则自动截取正文前 160 字）
imageUrl: /images/blog/evolution-pixel-art.webp（可选，卡片封面图）
---

正文用 Markdown 书写，支持标题、列表、**加粗**、`行内代码`、代码块、表格、引用。
空行分段。
```

**规则**：
- `title`、`date` 必填；`date` 格式必须是 `YYYY-MM-DD`，用于年月归档分组和排序
- `category` 建议必填：写一个新分类名，分类 Tab 和 `/blog/category/分类名` 页面会**自动生成**
- 阅读时长自动估算（中文 400 字/分钟、英文 200 词/分钟），不用手填
- 首页「最新文章」自动取日期最近的 3 篇

## 二、写随想（content/thoughts/）

新建 `content/thoughts/2026-08-28-today.md`，只有日期加一段话：

```markdown
---
date: 2026-08-28
---

这里写随想正文。空行可以分段，但通常一两句话就够。
```

无标题、无分类、无详情页；时间信息由归档页的年月标牌表达。列表按日期倒序展示。

## 三、编辑作品（content/works/）

每个作品一个 md 文件（文件名即 slug）：

```markdown
---
title: 项目名称
date: 2026-08-28
description: 作品列表卡片上的一句话简介
imageUrl: /images/works/pixel-arcade.webp
tags:
  - React
  - 像素艺术
link: "https://github.com/yourname/your-repo"
---

详情页正文，Markdown 书写。常用结构：

## 主要特性

1. **特性名**：说明。

## 技术栈

- 技术一
- 技术二
```

作品同样参与 `/works` 的年月分组统计；简历页底部的「精选项目」由 `lib/resume.ts` 里的 `featuredWorkSlugs` 控制（填 3 个 slug）。

## 四、编辑简历（lib/resume.ts）

打开 `lib/resume.ts`，按注释改对应字段：

| 字段 | 内容 |
|---|---|
| `resumeProfile` | 姓名、职位、头像路径、城市、邮箱、GitHub、「关于我」段落数组 |
| `resumeSkills` | 技能名 + 熟练度 0-100（进度条） |
| `resumeExperience` | 工作经历数组：`title` 职位 / `subtitle` 公司 / `period` 时间段 / `points` 要点列表 |
| `resumeEducation` | 教育背景，结构同上 |
| `featuredWorkSlugs` | 精选项目（3 个，对应 `content/works/` 的文件名） |

改完同样 `npm run build`。

---

## 常见问题

- **新分类没出现？** 分类页和 Tab 在构建时生成，确认 `npm run build` 已重新执行。
- **改了 md 没生效？** 见上方「发布流程」的热更新提醒。
- **日期分组不对？** 检查 frontmatter `date` 是否为 `YYYY-MM-DD` 格式（引号可加可不加）。
- **字体显示为方框？** Zpix 字体覆盖常用汉字，极生僻字可能缺失，会回退到系统字体显示。

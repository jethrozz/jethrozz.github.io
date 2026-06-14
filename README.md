# Retro Pixel Art Portfolio and Blog Starter Template (基于 Next.js 与 Tailwind CSS)

这是一个专为创意开发者、像素艺术家、独立游戏开发者打造的复古 8-bit / 16-bit 像素艺术风格个人作品集与博客网站模版。项目已进行了深度的性能调优与细节优化，确保了在多端设备上均能实现极佳的 SEO (搜索引擎优化) 与 GEO (生成式引擎优化) 效果。

## 项目核心优化亮点

* 极致的跳转流畅度与性能优化：重构了博客卡片、作品卡片及服务卡片，将原本耗费主线程 CPU 算力的 JS 动画库 (Framer Motion) 彻底替换为硬件加速的 CSS 过渡与关键帧动画。结合 steps 逐帧函数实现符合复古风的动画入场。首屏 First Load JS 传输大小显著缩减 (博客与作品页 JS 削减至 193 字节)，确保静态导出后页面跳转和加载实现毫秒级瞬间呈现。
* 健壮的自定义光标交互 (Custom Cursor)：在 PC 端支持精细的可交互节点 hover 状态缩放与旋转物理反馈，同时使用 3D 变换提升滑动帧率。在移动触摸屏设备上加入自适应拦截逻辑，自动销毁光标，解决小黄点残留的痛点。并且通过类名隔离，保障了即使 React 运行时发生崩溃，系统光标也不会彻底消失。
* 彻底修复水合 mismatch 报错：通过在主题切换按钮中引入挂载状态检测 (Mounted State Verification)，完美消除了 Next.js 与 next-themes 因服务器偏好与客户端初始化不一致引起的 Hydration mismatch 运行时闪退报错。
* 精简紧凑的页脚占比：重新设计了 Footer 结构，删除了臃肿重复的导航，以极其优雅的一行 Flex 双栏排版呈现在页脚，提升视觉呼吸感。
* SEO 与 GEO 双重最佳实践：全站应用语义化 HTML5 标签体系，规范 H1-H6 标题级别。所有博客与项目内容已全部静态化托管 (SSG)，大幅提升 AI 搜索引擎和传统爬虫的抓取精度与分词权重。

## 核心功能特色

* 英雄展示区 (Hero Section)：通过 SVG / CSS 动态像素电脑交互效果，凸显您的个人亮点。
* 关于我们 (About Section)：包含自适应技能条和经历时间线。
* 精致像素风表单 (Contact Form)：位于独立联系路由，配有精致的 Framer Motion 提交成功反馈弹窗。
* 静态内容中心 (lib/data.ts)：集中式存储 6 篇精选博客与 6 个精选项目，确保全站跳转可访问，无 404 死链。
* 明暗模式切换 (Theme Toggle)：支持一键切换黑白像素风。
* 本地像素图资产化：所有占位图已全部替换为高清晰度的本地像素艺术 WebP 图片，彻底消除外部拉伸大图导致的噪点和白屏延迟。

## 技术栈选择 (Tech Stack)

* 核心框架：Next.js (App Router, 支持 Static Exports 静态导出)
* 渲染库：React 18 & TypeScript
* 样式工具：Tailwind CSS & Autoprefixer
* 动画系统：纯 CSS 硬件加速 (Compositor Thread) & Framer Motion
* 交互组件库：Shadcn/ui & Lucide React
* 日期格式化：date-fns

## 本地开发与安装

### 系统要求

已安装 Node.js (推荐 v18+) 以及 npm / yarn。

### 安装步骤

1. 克隆当前仓库：
   ```bash
   git clone <你的GitHub项目地址>
   ```
2. 进入项目主目录：
   ```bash
   cd pixel-portfolio
   ```
3. 安装依赖：
   ```bash
   npm install
   ```

### 运行开发环境

运行本地开发服务器：
```bash
npm run dev
```
项目将在 `http://localhost:3000` 端口拉起。

### 静态编译构建

Next.js 将静态编译出优化后的 HTML/CSS/JS 资产并输出至 `out` 目录，适合托管于 GitHub Pages、Vercel 或 Cloudflare Pages 等平台：
```bash
npm run build
```

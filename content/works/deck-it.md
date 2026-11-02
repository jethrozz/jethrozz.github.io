---
title: "Deck It · AI 装修设计师"
date: 2026-06-26
description: "面向装修小白业主的 AI 装修设计 Agent，从需求到方案一站式搞定。"
imageUrl: "/images/works/pixel-arcade.webp"
tags:
  - AI Agent
  - Next.js
  - Prisma / MySQL
  - 支付集成
link: "https://github.com/jethrozz/deck-it"
---

Deck It 是一个面向消费者业主的 AI 装修设计 Agent MVP：不懂装修的业主只需描述自己的想法，就能获得结构化的装修设计方案，把"装修第一课"的成本降到最低。

## 主要特性

1. **AI 设计 Agent**：理解业主需求并生成装修设计方案，支持多种 AI Provider，可一键切换 Mock / 真实模型。
2. **全栈独立交付**：Next.js 应用 + Prisma 作为唯一数据层（MySQL），从界面到数据库一个人搞定。
3. **商业化闭环**：集成虎皮椒支付，跑通了从获客到收费的完整流程。
4. **工程化工具链**：内置数据库迁移、连接校验与数据盘点命令，交付质量可控。

## 技术栈

- Next.js + TypeScript
- Prisma ORM + MySQL
- AI Provider 抽象层（可插拔模型）
- 虎皮椒支付集成

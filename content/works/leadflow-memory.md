---
title: "LeadFlow Memory · 社媒线索自动化"
date: 2026-06-19
description: "双 Agent 驱动的社媒销售线索自动化与长期记忆系统，首个渠道为小红书。"
imageUrl: "/images/works/burger-bytes.webp"
tags:
  - AI Agent
  - 长期记忆
  - RAG
  - TypeScript
link: "https://github.com/jethrozz/LeadFlow-Memory"
---

LeadFlow Memory 是一套面向房产等社媒获客场景的**可验证线索自动化与长期记忆系统**：把销售在社交平台上手工完成的获客闭环，交给两个协作的 AI Agent 自动执行。

## 主要特性

1. **双 Agent 架构**：线索发现 Agent 负责从小红书帖子/评论中识别高意向用户并生成画像；线索转化 Agent 负责自动开场、轮询回复、基于长期记忆的多轮个性化跟进。
2. **长期记忆**：沉淀客户确认过的事实与需求，跨会话召回，跟进话术有据可依。
3. **可审计**：每一次自动化决策都留有记录，销售过程透明可回溯。
4. **可扩展渠道**：当前落地小红书（基于 xiaohongshu-mcp），连接器与剧本架构设计上支持接入更多社交平台。

## 技术栈

- TypeScript + LLM 工作流编排
- 结构化线索 / 客户画像记录
- MemWal 语义记忆
- xiaohongshu-mcp 社交渠道连接器

---
title: "xhs-operator-mcp"
date: 2026-06-01
description: "基于 Midscene + ADB 的安卓小红书自动化 HTTP MCP 服务。"
imageUrl: "/images/works/pixel-arcade.webp"
tags:
  - MCP
  - Midscene
  - ADB 自动化
  - Node.js
link: "https://github.com/jethrozz/xhs-operator-mcp"
---

xhs-operator-mcp 是一个把**安卓真机上的小红书操作**封装成标准 MCP 服务的工具：AI 客户端（如 Claude、Cursor 等）可以直接调用工具，自动完成发布、评论、私聊等动作。

## 主要特性

1. **发布图文笔记**：本地图片自动推送到安卓设备、上传发布并清理临时目录，一气呵成。
2. **互动自动化**：评论帖子、私信发送消息，配合模型实现拟人化运营。
3. **标准 MCP 协议**：完整实现 initialize / tools list / tools call 的 JSON-RPC 规范，任何 MCP 客户端即插即用。
4. **HTTP 服务形态**：默认 `127.0.0.1:8787/mcp`，带健康检查，模型与设备参数均可通过环境变量配置。

## 技术栈

- Midscene（AI 操作安卓 UI）
- ADB 设备控制
- Node.js + HTTP MCP 服务

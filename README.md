# Quiz App

一个完整的在线考试系统，包含管理后台和服务器。

## 项目结构

```
├── admin/          # React 管理后台
├── server/         # Express 服务器
└── shared/         # 共享模型和类型
```

## 快速开始

### 前置要求

- [Bun](https://bun.com) v1.3.8+

### Admin（管理后台）

```bash
cd admin
bun install
bun dev          # 开发模式
bun start        # 生产模式
bun run build    # 构建
```

### Server（服务器）

```bash
cd server
bun install
bun run dev      # 开发模式
```

## 技术栈

### Admin

- React 19
- TanStack Router
- Tailwind CSS
- Shadcn UI
- Bun

### Server

- Express 5
- TypeScript
- Mongoose
- Bun

## 环境配置

Server 需要配置 `.env` 文件，参考 `.env.example`：

```bash
cp server/.env.example server/.env
```

## 开发

使用 Bun 作为包管理器和运行时，提供更快的开发体验。

## 许可证

本项目采用 Apache License 2.0 许可证。详见 [LICENSE](./LICENSE) 和 [LICENSE.zh-CN](./LICENSE.zh-CN)。

使用本项目时，您需要：

- 保留原始许可证和版权声明
- 在修改文件时标注修改内容
- 在分发时包含许可证副本

## 相关链接

- [Bun 文档](https://bun.com)
- [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)

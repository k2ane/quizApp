# Quiz App

一个在线考试系统，采用前后端分离架构，基于 Bun 运行时构建。

## 项目结构

```
quiz-app/
├── admin/          # 前端管理后台（React）
├── server/         # 后端服务（Express）
└── shared/         # 前后端共享的类型定义
```

## 技术栈

### 前端（admin）

- React 19
- TanStack Router - 类型安全的路由
- Tailwind CSS 4 - 样式框架
- Base UI - 无样式组件库
- Bun - 运行时和构建工具

### 后端（server）

- Express 5 - Web 框架
- TypeScript - 类型系统
- Helmet - 安全中间件
- CORS - 跨域支持
- Joi - 数据验证
- Mongoose - MongoDB ODM（已安装但未配置）
- Bun - 运行时

## 快速开始

### 环境要求

- Bun >= 1.3.8

### 启动后端服务

```bash
cd server
bun install
bun run dev
```

服务默认运行在 `http://localhost:3000`

可选：复制 `.env.example` 为 `.env` 自定义端口

```bash
cp .env.example .env
```

### 启动前端应用

```bash
cd admin
bun install
bun dev
```

### 构建前端

```bash
cd admin
bun run build
```

构建产物输出到 `admin/dist/` 目录

## API 路由

当前已实现的 API 端点：

- `GET /api/v1/health` - 服务健康检查
- `/api/v1/auth` - 用户认证
- `/api/v1/user` - 用户管理
- `/api/v1/department` - 部门管理
- `/api/v1/question` - 题目管理
- `/api/v1/question-bank` - 题库管理
- `/api/v1/record` - 考试记录

## 开发说明

- 使用 Bun 作为包管理器和运行时
- 前端支持热重载（`--hot` 模式）
- 后端支持文件监听（`--watch` 模式）
- 共享类型定义位于 `shared/models/` 目录

## 许可证

Apache License 2.0 - 详见 [LICENSE](./LICENSE) 和 [LICENSE.zh-CN](./LICENSE.zh-CN)

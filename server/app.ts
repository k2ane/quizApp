import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import { getNowDateToString } from "./src/utils/tools.utils";
import { apiRouter } from "./src/api/routes";
import { loggerMiddleware } from "./src/middleware/logger.middle";

// 引入环境变量
dotenv.config();
// 定义后端服务
const app = express();
// 定义服务器端口
const server_port = Number(process.env.SERVER_PORT) | 3000;
// helmet中间件处理安全头
app.use(helmet());
// 使用json中间件让express可以处理json数据
app.use(json());
// cors中间件处理跨域
app.use(cors());
// 挂载中间件
app.use(loggerMiddleware);
// 挂载api
app.use("/api", apiRouter);
// 监听服务
app.listen(server_port, () => {
  console.log(
    `---------------------------------------------------\n\n`,
    `⌚️ 日期: ${getNowDateToString()}\n`,
    `😀 服务运行在: http://localhost:${server_port}`,
    `\n\n---------------------------------------------------`,
  );
});

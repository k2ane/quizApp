import { type Request, type Response, type NextFunction } from "express";
export const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  console.log(
    `------------------------ 📔 日志开始 --------------------------\n`,
    `\n----- 🎈 新的 ${req.method} 请求, 来自: ${req.socket.remoteAddress}`,
    req.body !== undefined
      ? `\n----- 🈶 有附带的数据: \n${req.body}\n`
      : `\n----- 🈳 无附带数据\n`,
    `\n------------------------ 📔 日志结束 --------------------------`,
  );
  next();
};

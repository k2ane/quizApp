import { type Request } from "express";
import type { serverBaseResponse } from "../configs/api.config";

/**
 * 获取当前时间ms
 * @returns 返回修正偏移后的本地时间ms
 */
export const getNowDate = (): number => {
  const now = new Date(Date.now());
  const date = now.getTime();
  const date_offset = now.getTimezoneOffset();
  return date + date_offset;
};

/**
 * 获取当前时间字符串
 * @returns 当前时间字符串
 */
export const getNowDateToString = (): string => {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const date_string = `${year}/${month}/${day}-${hour}:${minute}:${second}`;
  return date_string;
};

/**
 * 获取服务启动日期
 * @returns 服务器启动日期ms
 */
export const getServerStartDate = (): number => {
  return 0;
};

export const devLogger = (req: Request, data: serverBaseResponse) => {
  console.log(
    `------------------------ 📃 服务端返回数据开始 --------------------------\n`,
    `\n----- 🎈 请求地址 ${req.originalUrl} 请求, 来自: ${req.socket.remoteAddress}`,
    `\n-----  服务端返回的数据: \n\n${JSON.stringify(data)}\n`,
    `\n------------------------ 📃 服务端返回数据结束 --------------------------`,
  );
};

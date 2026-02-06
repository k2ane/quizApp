export const SERVER_STATES = {
  OK: 200, // 响应成功
  BAD_REQUEST: 400, // 客户端请求错误
  UNATUHORIZED: 401, // 客户端用户未登陆
  FORBIDDEN: 403, // 客户端用户无权限
  NOT_FOUND: 404, // 客户端用户未找到
  INTERNAL_SERVER_ERROR: 500, // 服务器内部错误
  BAD_GATEWAY: 502, // 服务器响应错误
  SERVER_UNAVAILABLE: 503, // 服务器服务为提供
  TIME_OUT: 504, // 服务器超时
};

/**
 * API基本成功返回结构
 */
export interface serverBaseResponse {
  status: number;
  message: string;
  timestamp: string;
}

/**
 * API基本响应错误返回结构
 */
export interface serverBaseErrorResponse {
  status: number;
  reson: unknown;
  timestamp: string;
}

import { Router, type Request, type Response } from "express";
import {
  SERVER_STATES,
  type serverBaseResponse,
} from "../../configs/api.config";
import { getNowDateToString } from "../../utils/tools.utils";

/**
 * 服务器健康状态api
 */
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const status = SERVER_STATES.OK;
  const response: serverBaseResponse = {
    status: SERVER_STATES.OK,
    message: "服务状态健康 😄",
    timestamp: getNowDateToString(),
  };
  res.status(status).json(response);
});

export { router as healthRouter };

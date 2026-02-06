import { Router } from "express";
import { healthRouter } from "./v1/health.api";
import { authRouter } from "./v1/auth.api";
import { departmentRouter } from "./v1/department.api";
import { userRouter } from "./v1/user.api";
import { questionBankRouter } from "./v1/question-bank.api";
import { questionRouter } from "./v1/question.api";
import { recordRouter } from "./v1/record.api";

const router = Router();

// 挂载api下的路由节点
router.use("/v1/health", healthRouter);
router.use("/v1/auth", authRouter);
router.use("/v1/user", userRouter);
router.use("/v1/department", departmentRouter);
router.use("/v1/question-bank", questionBankRouter);
router.use("/v1/question", questionRouter);
router.use("/v1/record", recordRouter);

export { router as apiRouter };

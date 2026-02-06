import { expect, test } from "bun:test";

test(
  "路由测试应该返回200",
  async () => {
    const response = await fetch("http://localhost:3000/api/v1/health");
    expect(response.ok).toBe(true);
  },
  { timeout: 500, repeats: 1000 },
);

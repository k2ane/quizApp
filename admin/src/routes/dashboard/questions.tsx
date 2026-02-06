import { createFileRoute } from "@tanstack/react-router";

// 导出路由
export const Route = createFileRoute("/dashboard/questions")({
  component: Questions,
});

function Questions() {
  return (
    <div className="p-2">
      <h3>Dashboard Questions</h3>
    </div>
  );
}

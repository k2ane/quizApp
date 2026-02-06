import { createFileRoute } from "@tanstack/react-router";

// 导出路由
export const Route = createFileRoute("/dashboard/ai")({
  component: Ai,
});

function Ai() {
  return (
    <div className="p-2">
      <h3>Dashboard Ai</h3>
    </div>
  );
}

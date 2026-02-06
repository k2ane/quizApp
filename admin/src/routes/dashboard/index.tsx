import { createFileRoute } from "@tanstack/react-router";

// 导出路由
export const Route = createFileRoute("/dashboard/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Dashboard Index</h3>
    </div>
  );
}

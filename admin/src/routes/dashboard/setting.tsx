import { createFileRoute } from "@tanstack/react-router";

// 导出路由
export const Route = createFileRoute("/dashboard/setting")({
  component: Settings,
});

function Settings() {
  return (
    <div className="p-2">
      <h3>Dashboard Settings</h3>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

// 导出路由
export const Route = createFileRoute("/dashboard/departments")({
  component: Departments,
});

function Departments() {
  return (
    <div className="p-2">
      <h3>Dashboard Departmeants</h3>
    </div>
  );
}

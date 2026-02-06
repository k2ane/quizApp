import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as dashboardRoute } from "@/routes/dashboard/index";
import { Route as departmentsdRoute } from "@/routes/dashboard/departments";
import { Route as questionBanksRoute } from "@/routes/dashboard/questionBanks";
import { Route as questionsRoute } from "@/routes/dashboard/questions";
import { Route as aiRoute } from "@/routes/dashboard/ai";
import { Route as settingRoute } from "@/routes/dashboard/setting";

// 导出路由
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1>qzuz-admin</h1>
      <div className="flex flex-col">
        <Link className="nav-link-item" to={Route.to}>
          Home
        </Link>
        <Link className="nav-link-item" to={dashboardRoute.to}>
          Dashboard
        </Link>
        <Link className="nav-link-item" to={departmentsdRoute.to}>
          Departments
        </Link>
        <Link className="nav-link-item" to={questionBanksRoute.to}>
          QuestionBanks
        </Link>
        <Link className="nav-link-item" to={questionsRoute.to}>
          Questions
        </Link>
        <Link className="nav-link-item" to={aiRoute.to}>
          Ai
        </Link>
        <Link className="nav-link-item" to={settingRoute.to}>
          Settings
        </Link>
      </div>
    </div>
  );
}

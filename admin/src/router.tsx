import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import PublicLayout from "./layouts/public.layout";
import DashboardLayout from "./layouts/dashboard.layout";
import HomeIndex from "./pages/index.home";
import DashboardIndex from "./pages/dashboard/index.dashboard";
import DashboardDepartments from "./pages/dashboard/departments.dashboard";
import DashboardQuestionBanks from "./pages/dashboard/questionBanks.dashboard";
import DashboardQuestions from "./pages/dashboard/questions.dashboard";
import DashboardAi from "./pages/dashboard/ai.dashboard";
import DashboardSettings from "./pages/dashboard/settings.dashboard";

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// Public layout route (无路径的布局路由)
const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PublicLayout,
});

// Dashboard layout route (无路径的布局路由)
const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardLayout,
});

// Public pages (使用 PublicLayout)
const indexRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  id: "public-layout-route",
  component: HomeIndex,
});

// Dashboard pages (使用 DashboardLayout)
const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/",
  component: DashboardIndex,
});

const departmentsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/departments",
  component: DashboardDepartments,
});

const questionBanksRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/questionBanks",
  component: DashboardQuestionBanks,
});

const questionsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/questions",
  component: DashboardQuestions,
});

const aiRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/ai",
  component: DashboardAi,
});

const settingsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/setting",
  component: DashboardSettings,
});

// 创建路由树
const routeTree = rootRoute.addChildren([
  publicLayoutRoute.addChildren([indexRoute]),
  dashboardLayoutRoute.addChildren([
    dashboardIndexRoute,
    departmentsRoute,
    questionBanksRoute,
    questionsRoute,
    aiRoute,
    settingsRoute,
  ]),
]);

// 导出路由树
export const router = createRouter({ routeTree });

// 为类型安全注册路由模块
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

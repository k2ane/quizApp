import { Link, Outlet } from "@tanstack/react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard 头部 */}
      <header className="bg-white shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Admin User</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 侧边栏 */}
        <aside className="w-64 bg-white shadow-sm min-h-[calc(100vh-57px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                  activeOptions={{ exact: true }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/departments"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/questionBanks"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                >
                  Question Banks
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/questions"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                >
                  Questions
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/ai"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                >
                  AI
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/setting"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  activeProps={{ className: "bg-blue-50 text-blue-600" }}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* 主内容区域 */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { Outlet } from "@tanstack/react-router";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 公共页面的头部 */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">QZUZ Admin</h1>
        </div>
      </header>

      {/* 页面内容 */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* 公共页面的底部 */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-600">
          © 2026 QZUZ Admin
        </div>
      </footer>
    </div>
  );
}

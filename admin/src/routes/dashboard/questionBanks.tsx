import { createFileRoute } from "@tanstack/react-router";

// 导出路由
export const Route = createFileRoute("/dashboard/questionBanks")({
  component: QuestionBanks,
});

function QuestionBanks() {
  return (
    <div className="p-2">
      <h3>Dashobaord QuestionBank</h3>
    </div>
  );
}

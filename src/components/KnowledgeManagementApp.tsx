export default function KnowledgeManagementApp() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex">
      <aside className="w-64 bg-white border-r p-4">
        <div className="font-semibold mb-4">Knowledge Manager</div>
        <ul className="space-y-2 text-sm">
          <li>Dashboard</li>
          <li>Knowledge</li>
          <li>Documents</li>
          <li>Chat</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-lg font-medium mb-2">Dashboard</h1>
        <p>This UI is rendering correctly.</p>
      </main>
    </div>
  );
}

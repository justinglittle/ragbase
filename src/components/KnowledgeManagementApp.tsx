import { useState } from "react";

export default function KnowledgeManagementApp() {
  const [active, setActive] = useState("Dashboard");

  const nav = [
    "Dashboard",
    "Knowledge",
    "Documents",
    "Chat",
    "Settings",
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-4">
        <div className="font-semibold mb-4">Knowledge Manager</div>
        <ul className="space-y-2 text-sm">
          {nav.map(item => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer px-2 py-1 rounded ${
                active === item ? "bg-slate-100 font-medium" : "hover:bg-slate-50"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <h1 className="text-lg font-medium mb-2">{active}</h1>

        {active === "Dashboard" && (
          <p>System overview and metrics go here.</p>
        )}

        {active === "Knowledge" && (
          <p>Semantic taxonomy and vector relationships.</p>
        )}

        {active === "Documents" && (
          <p>Document ingestion and pipeline status.</p>
        )}

        {active === "Chat" && (
          <p>RAG-powered chat interface.</p>
        )}

        {active === "Settings" && (
          <p>System and integration configuration.</p>
        )}
      </main>
    </div>
  );
}

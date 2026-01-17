import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { LayoutDashboard, BookOpen, FileText, MessageSquare, Settings } from "lucide-react";

export default function KnowledgeManagementApp() {
  const [active, setActive] = useState("Containers");

  const nav = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Knowledge", icon: BookOpen },
    { name: "Documents", icon: FileText },
    { name: "Chat", icon: MessageSquare },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-14 flex items-center px-4 border-b font-semibold">Knowledge Manager</div>
        <nav className="flex-1 p-2 space-y-1">
          {nav.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                active === item.name
                  ? "bg-slate-100 font-medium"
                  : "hover:bg-slate-100"
              }`}
            >
              <item.icon className="w-4 h-4 text-slate-500" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 text-sm">
          <div className="font-medium">Production</div>
          <div className="text-slate-500">Linux · Docker · Live</div>
        </header>

        {/* Content */}
        <section className="flex-1 p-6 overflow-auto">
          {active === "Dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card><CardContent className="p-4 text-sm">Vectors<br/><span className="text-2xl font-semibold">12,430</span></CardContent></Card>
              <Card><CardContent className="p-4 text-sm">Documents<br/><span className="text-2xl font-semibold">842</span></CardContent></Card>
              <Card><CardContent className="p-4 text-sm">Pipelines<br/><span className="text-2xl font-semibold">6</span></CardContent></Card>
              <Card><CardContent className="p-4 text-sm">Health<br/><span className="text-2xl font-semibold text-green-600">OK</span></CardContent></Card>
            </div>
          )}

          {active === "Documents" && (
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b font-medium text-sm">Documents</div>
                <Table className="text-sm">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Processed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Cloud Migration Guide.pdf</TableCell>
                      <TableCell>Reference Architecture</TableCell>
                      <TableCell><span className="text-green-600">Indexed</span></TableCell>
                      <TableCell>30h ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mainframe Ops.md</TableCell>
                      <TableCell>Best Practice</TableCell>
                      <TableCell><span className="text-green-600">Indexed</span></TableCell>
                      <TableCell>2d ago</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {active === "Chat" && (
            <Card className="h-full">
              <CardContent className="p-4 flex flex-col h-full">
                <div className="text-sm font-medium mb-2">Knowledge Chat</div>
                <div className="flex-1 border rounded-md bg-white p-3 text-sm text-slate-500">Ask questions about your knowledge base…</div>
                <div className="mt-3 flex gap-2">
                  <Input className="text-sm" placeholder="Ask something" />
                  <Button size="sm">Send</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {active === "Knowledge" && (
            <Card>
              <CardContent className="p-4 text-sm">
                <div className="font-medium mb-2">Semantic Knowledge</div>
                <div className="text-slate-600">Practice → Value Proposition → Pattern → Component</div>
              </CardContent>
            </Card>
          )}

          {active === "Settings" && (
            <Card>
              <CardContent className="p-4 text-sm">Integration & system settings</CardContent></Card>
          )}
        </section>
      </main>
    </div>
  );
}

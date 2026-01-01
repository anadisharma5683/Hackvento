"use client";

import { useAuth } from "@/hooks/useAuth";
import { logout } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { CreateProject } from "@/components/features/CreateProject";
import { ProjectList } from "@/components/features/ProjectList";
import { AttendanceQR } from "@/components/features/AttendanceQR";
import { AttendanceList } from "@/components/features/AttendanceList";

export default function Dashboard() {
  const { user, role } = useAuth();
  const sessionId = "research-meet-001";

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-mutedTeal">
            {user?.displayName}
          </p>
        </div>

        <Button onClick={logout}>Logout</Button>
      </div>

      <CreateProject />
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
        <ProjectList userRole={role || undefined} />
      </div>

      {role === "teacher" && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Attendance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AttendanceQR sessionId={sessionId} />
            <AttendanceList sessionId={sessionId} />
          </div>
        </div>
      )}
    </div>
  );
}
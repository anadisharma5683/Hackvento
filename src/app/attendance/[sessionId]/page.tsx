"use client";

import { useParams } from "next/navigation";
import { markAttendance } from "@/lib/attendance";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function AttendancePage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [done, setDone] = useState(false);

  async function handleMark() {
    await markAttendance(
      sessionId,
      "demo-student-id",
      "Demo Student"
    );
    setDone(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-azureMist p-6 rounded-xl text-center">
        <h2 className="text-xl font-semibold mb-3">
          Attendance
        </h2>

        {done ? (
          <p className="text-green-600">Attendance marked ✅</p>
        ) : (
          <Button onClick={handleMark}>
            Mark Attendance
          </Button>
        )}
      </div>
    </div>
  );
}
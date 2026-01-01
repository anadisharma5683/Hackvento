"use client";

import { useEffect, useState } from "react";
import { getAttendanceForSession } from "@/lib/attendance";
import { Attendance } from "@/types/attendance";

export function AttendanceList({
  sessionId,
}: {
  sessionId: string;
}) {
  const [records, setRecords] = useState<Attendance[]>([]);

  useEffect(() => {
    async function fetchAttendance() {
      const data = await getAttendanceForSession(sessionId);
      setRecords(data);
    }
    fetchAttendance();
  }, [sessionId]);

  if (!records.length) {
    return <p className="text-sm mt-2">No attendance yet</p>;
  }

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Attendance</h4>

      {records.map((r) => (
        <div
          key={r.id}
          className="bg-frozenWater p-2 rounded mb-2 text-sm"
        >
          {r.studentName}
        </div>
      ))}
    </div>
  );
}
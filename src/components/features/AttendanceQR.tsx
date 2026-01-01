"use client";

import { QRCodeCanvas } from "qrcode.react";

export function AttendanceQR({ sessionId }: { sessionId: string }) {
  const url = `${window.location.origin}/attendance/${sessionId}`;

  return (
    <div className="bg-azureMist p-4 rounded-xl text-center">
      <h4 className="font-semibold mb-2">Scan for Attendance</h4>
      <QRCodeCanvas value={url} size={200} />
      <p className="text-xs mt-2 text-mutedTeal">
        Valid for this session only
      </p>
    </div>
  );
}
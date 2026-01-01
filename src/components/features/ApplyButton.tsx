"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { applyToProject } from "@/lib/applications";

export function ApplyButton({
  projectId,
}: {
  projectId: string;
}) {
  const [applied, setApplied] = useState(false);

  async function handleApply() {
    await applyToProject(
      projectId,
      "demo-student-id",
      "Demo Student",
      "I am interested in this research and have relevant skills."
    );
    setApplied(true);
  }

  return (
    <Button onClick={handleApply} disabled={applied}>
      {applied ? "Applied" : "Apply"}
    </Button>
  );
}
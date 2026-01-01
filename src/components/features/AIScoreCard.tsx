"use client";

import { useEffect, useState } from "react";
import { scoreApplicant } from "@/lib/gemini";

export function AIScoreCard({
  projectTitle,
  projectSkills,
  studentNote,
}: {
  projectTitle: string;
  projectSkills: string[];
  studentNote: string;
}) {
  const [result, setResult] = useState<{
    score: number;
    reasoning: string;
  } | null>(null);

  useEffect(() => {
    async function runAI() {
      const res = await scoreApplicant(
        projectTitle,
        projectSkills,
        studentNote
      );
      setResult(res);
    }
    runAI();
  }, [projectTitle, projectSkills, studentNote]);

  if (!result) {
    return (
      <p className="text-xs text-mutedTeal mt-1">
        AI analyzing application…
      </p>
    );
  }

  return (
    <div className="bg-azureMist p-3 rounded-lg mt-2">
      <p className="text-sm font-semibold">
        AI Match Score: {result.score}%
      </p>
      <p className="text-xs mt-1 text-mutedTeal">
        {result.reasoning}
      </p>
    </div>
  );
}
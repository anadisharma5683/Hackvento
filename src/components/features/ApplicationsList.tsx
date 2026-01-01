"use client";

import { useEffect, useState } from "react";
import { getApplicationsForProject } from "@/lib/applications";
import { Application } from "@/types/application";
import { AIScoreCard } from "./AIScoreCard";

export function ApplicationsList({
  projectId,
}: {
  projectId: string;
}) {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    async function fetchApps() {
      const data = await getApplicationsForProject(projectId);
      setApplications(data);
    }
    fetchApps();
  }, [projectId]);

  if (!applications.length) {
    return <p className="text-sm mt-2">No applications yet</p>;
  }

  return (
    <div className="mt-3">
      <h4 className="font-semibold mb-2">Applications</h4>

      {applications.map((app) => (
        <div
          key={app.id}
          className="bg-frozenWater p-3 rounded-lg mb-3"
        >
          <p className="font-medium">{app.studentName}</p>
          <p className="text-xs mb-2">{app.note}</p>

          <AIScoreCard
            projectTitle="AI Research"
            projectSkills={["AI", "ML", "Research"]}
            studentNote={app.note}
          />
        </div>
      ))}
    </div>
  );
}
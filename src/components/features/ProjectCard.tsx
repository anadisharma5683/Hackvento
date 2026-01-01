import { Project } from "@/types/project";
import { ApplyButton } from "./ApplyButton";
import { ApplicationsList } from "./ApplicationsList";

export function ProjectCard({ 
  project,
  userRole 
}: { 
  project: Project; 
  userRole?: string;
}) {
  const isTeacher = userRole === "teacher";
  
  return (
    <div className="bg-azureMist border border-frozenWater rounded-xl p-4">
      <h3 className="font-semibold text-lg">
        {project.title}
      </h3>

      <p className="text-sm text-mutedTeal mt-1">
        {project.description}
      </p>

      <p className="text-xs mt-2 mb-3">
        Skills: {project.skillsRequired.join(", ")}
      </p>

      {isTeacher ? (
        <ApplicationsList projectId={project.id} />
      ) : (
        <ApplyButton projectId={project.id} />
      )}
    </div>
  );
}
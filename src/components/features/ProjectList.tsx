import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types/project";

// Mock data for now - this would come from your database
const mockProjects: Project[] = [
  {
    id: "1",
    title: "AI Research Project",
    description: "Research project on machine learning algorithms",
    skillsRequired: ["AI", "Research", "Python"],
    createdBy: "user123",
  },
  {
    id: "2",
    title: "Web Development Project",
    description: "Building a full-stack web application",
    skillsRequired: ["React", "Node.js", "TypeScript"],
    createdBy: "user123",
  },
];

export function ProjectList({ userRole }: { userRole?: string }) {
  return (
    <div className="space-y-4">
      {mockProjects.map((project) => (
        <ProjectCard key={project.id} project={project} userRole={userRole} />
      ))}
    </div>
  );
}
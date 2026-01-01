import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Project } from "@/types/project";

const projectsRef = collection(db, "projects");

export async function createProject(
  title: string,
  description: string,
  skills: string[],
  userId: string
) {
  await addDoc(projectsRef, {
    title,
    description,
    skillsRequired: skills,
    createdBy: userId,
    createdAt: Timestamp.now(),
  });
}

export async function getProjects(): Promise<Project[]> {
  const snapshot = await getDocs(projectsRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}

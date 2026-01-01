import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { getFirestoreInstance } from "@/lib/firebase";
import { Project } from "@/types/project";

const getProjectsRef = () => collection(getFirestoreInstance(), "projects");

export async function createProject(
  title: string,
  description: string,
  skills: string[],
  userId: string
) {
  await addDoc(getProjectsRef(), {
    title,
    description,
    skillsRequired: skills,
    createdBy: userId,
    createdAt: Timestamp.now(),
  });
}

export async function getProjects(): Promise<Project[]> {
  const snapshot = await getDocs(getProjectsRef());
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}
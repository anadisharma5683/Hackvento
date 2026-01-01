import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Application } from "@/types/application";

const applicationsRef = collection(db, "applications");

export async function applyToProject(
  projectId: string,
  studentId: string,
  studentName: string,
  note: string
) {
  await addDoc(applicationsRef, {
    projectId,
    studentId,
    studentName,
    note,
    createdAt: Timestamp.now(),
  });
}

export async function getApplicationsForProject(
  projectId: string
): Promise<Application[]> {
  const q = query(applicationsRef, where("projectId", "==", projectId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Application, "id">),
  }));
}
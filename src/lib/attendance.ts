import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { getFirestoreInstance } from "@/lib/firebase";
import { Attendance } from "@/types/attendance";

const getAttendanceRef = () => collection(getFirestoreInstance(), "attendance");

export async function markAttendance(
  sessionId: string,
  studentId: string,
  studentName: string
) {
  await addDoc(getAttendanceRef(), {
    sessionId,
    studentId,
    studentName,
    timestamp: Timestamp.now(),
  });
}

export async function getAttendanceForSession(
  sessionId: string
): Promise<Attendance[]> {
  const q = query(getAttendanceRef(), where("sessionId", "==", sessionId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Attendance, "id">),
  }));
}
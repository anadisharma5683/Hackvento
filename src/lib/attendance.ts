import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Attendance } from "@/types/attendance";

const attendanceRef = collection(db, "attendance");

export async function markAttendance(
  sessionId: string,
  studentId: string,
  studentName: string
) {
  await addDoc(attendanceRef, {
    sessionId,
    studentId,
    studentName,
    timestamp: Timestamp.now(),
  });
}

export async function getAttendanceForSession(
  sessionId: string
): Promise<Attendance[]> {
  const q = query(attendanceRef, where("sessionId", "==", sessionId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Attendance, "id">),
  }));
}
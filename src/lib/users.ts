import { doc, setDoc } from "firebase/firestore";
import { getFirestoreInstance } from "@/lib/firebase";

export async function saveUser(user: any) {
  const db = getFirestoreInstance();
  await setDoc(
    doc(db, "users", user.uid),
    {
      name: user.displayName,
      email: user.email,
      role: "teacher", // demo
    },
    { merge: true }
  );
}
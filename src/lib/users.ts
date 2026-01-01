import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function saveUser(user: any) {
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
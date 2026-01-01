import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { saveUser } from "./users";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  await saveUser(result.user);
  return result;
}

export async function logout() {
  await signOut(auth);
}
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuthInstance } from "@/lib/firebase";
import { saveUser } from "./users";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const authInstance = getAuthInstance();
  const result = await signInWithPopup(authInstance, provider);
  await saveUser(result.user);
  return result;
}

export async function logout() {
  const authInstance = getAuthInstance();
  await signOut(authInstance);
}
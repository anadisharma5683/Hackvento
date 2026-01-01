import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      
      // In a real app, you would fetch the user's role from Firestore
      // For now, we'll set a default role or fetch from user data
      if (firebaseUser) {
        // This is where you'd typically fetch the role from Firestore
        // For demo purposes, we'll set it to teacher
        setRole("teacher");
      } else {
        setRole(null);
      }
      
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { user, role, loading };
}
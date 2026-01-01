import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuthInstance } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Only initialize auth listener on the client side
    if (typeof window !== 'undefined') {
      const authInstance = getAuthInstance();
      const unsub = onAuthStateChanged(authInstance, (firebaseUser) => {
        setUser(firebaseUser);
        
        // In a real app, you would fetch the user's role from Firestore
        // For demo purposes, we'll set it to teacher
        if (firebaseUser) {
          setRole("teacher");
        } else {
          setRole(null);
        }
        
        setLoading(false);
      });
      return () => unsub();
    } else {
      // If not in browser, set loading to false and user to null
      setLoading(false);
    }
  }, []);

  return { user, role, loading };
}
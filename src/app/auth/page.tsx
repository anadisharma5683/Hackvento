"use client";

import { signInWithGoogle } from "@/lib/auth";
import { Button } from "@/components/ui/Button";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-azureMist p-6 rounded-xl shadow max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-2">
          Welcome to Academic Collab
        </h2>

        <p className="text-sm text-mutedTeal mb-4">
          Sign in to continue
        </p>

        <Button onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
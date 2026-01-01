import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        Academic Collaboration Hub
      </h1>
      <p className="text-mutedTeal mb-6 text-center max-w-xl">
        Discover research opportunities. Collaborate smarter. Organize academia with AI.
      </p>

      <Link
        href="/auth"
        className="bg-jungleTeal text-mintCream px-6 py-3 rounded-lg"
      >
        Get Started
      </Link>
    </main>
  );
}

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Academic Collab",
  description: "Teacher–Student Research Platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-mintCream text-jungleTeal">
        {children}
      </body>
    </html>
  );
}

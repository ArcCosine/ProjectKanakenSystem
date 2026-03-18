import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Kanaken System",
  description: "Next.js migration of Project Kanaken System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="app-container">{children}</div>
      </body>
    </html>
  );
}

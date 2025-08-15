import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overwatch",
  description: "A NextJS retelling of the Overwatch universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

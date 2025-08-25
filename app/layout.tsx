import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/fonts.css";
import { AppProvider } from "@/context/AppContext";

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
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

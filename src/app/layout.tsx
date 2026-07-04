import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "@/home/Home.css";

export const metadata: Metadata = {
  title: "Our First Anniversary",
  description: "A tiny anniversary site built with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}

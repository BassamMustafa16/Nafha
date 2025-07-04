import type { Metadata } from "next";
import "./globals.css";
import "@/lib/fontawesome";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nafha Thabet",
  description: "Dress Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

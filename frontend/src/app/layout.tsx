import type { Metadata } from "next";
import "./globals.css";
import "@/lib/fontawesome";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";

export const metadata: Metadata = {
  title: "Nafha Thabet",
  description: "Fashion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <footer className="border-t border-gray-300">
          <Footer1 />
          <Footer2 />
        </footer>
      </body>
    </html>
  );
}

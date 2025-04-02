import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar";

export const metadata: Metadata = {
  title: "Barun Mandal",
  description: "Portfolio of Barun Mandal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen bg-black`}>
        <header className="p-3 sm:py-4 md:px-20 lg:px-56">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

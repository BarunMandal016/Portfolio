import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barun Mandal",
  description: "Portfolio of Barun Mandal"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full p-4 sticky top-0 shadow-md z-10 rounded-b-md">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        {/* <footer className="w-full bg-gray-800 p-4 text-center">
            &copy; 2023 My Portfolio
          </footer> */}
      </body>
    </html>
  );
}

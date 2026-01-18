import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import miniIcon from "../public/mini.jpg";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Barun Mandal",
  description: "Portfolio of Barun Mandal",
  icons: {
    icon: miniIcon.src
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen bg-black flex flex-col justify-between`}>
        <div>
        <Navbar />
        <main className="flex justify-center">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

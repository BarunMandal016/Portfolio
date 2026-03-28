import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import miniIcon from "../public/mini.jpg";
import Footer from "@/components/Footer";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_NAME, SITE_KEYWORDS } from "@/data";
import { JsonLd } from "@/components/JsonLd";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import TanStackQueryClientProvider from "./TanStackQueryClientProvider";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  icons: {
    icon: miniIcon.src,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TanStackQueryClientProvider>
          <JsonLd />
          <Navbar />
          <main className="flex-1 flex justify-center">
            <ErrorBoundary>{children}</ErrorBoundary>
          </main>
          <Footer />
        </TanStackQueryClientProvider>
      </body>
    </html>
  );
}

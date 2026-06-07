import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/NavBar"
import miniIcon from "../public/mini.jpg"
import Footer from "@/components/Footer"
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_NAME,
  SITE_KEYWORDS,
} from "@/data"
import { JsonLd } from "@/components/JsonLd"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import TanStackQueryClientProvider from "./TanStackQueryClientProvider"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

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
    images: [
      {
        url: `${SITE_URL}/profile.jpg`,
        width: 640,
        height: 640,
        alt: "Barun Mandal — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/profile.jpg`],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TanStackQueryClientProvider>
            <JsonLd />
            <div className="bg-foreground/5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-3 text-sm text-center">
              <div className="size-1.5 border bg-amber-300 animate-pulse-dot rounded-full"></div>
              <span>Open to work — Remote · Full-time · Contract</span>
            </div>
            <Navbar />
            <main className="flex-1 flex justify-center">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <Footer />
            <Toaster />
          </TanStackQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

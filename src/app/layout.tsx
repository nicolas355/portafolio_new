import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import { config, siteUrl } from "@/config"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
import ScrollTopButton from "@/Components/ScrollTopButton"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const title = "Nicolas Gonzalez — Frontend Developer | React, Next.js & TypeScript"
const description =
  "Frontend Developer specialized in React, Next.js and TypeScript. I build modern web applications, dashboards and product interfaces, with additional work in APIs, automation and applied AI."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Nicolas Gonzalez",
  ],
  authors: [{ name: config.name, url: siteUrl }],
  creator: config.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: config.name,
    locale: "en_US",
    images: [
      {
        url: "/projects/tastygo.png",
        alt: "TastyGo — food ordering platform by Nicolas Gonzalez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projects/tastygo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.name,
  jobTitle: config.role,
  url: siteUrl,
  email: config.email,
  sameAs: config.socialMedia.map((item) => item.url),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <ScrollTopButton limit={400} />
        <Footer />
        <Script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          id="person-jsonld"
          strategy="afterInteractive"
          type="application/ld+json"
        />
      </body>
    </html>
  )
}

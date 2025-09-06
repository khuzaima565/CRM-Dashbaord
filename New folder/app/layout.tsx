import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Salman Khan - Performance Marketing Consultant",
  description:
    "Expert performance marketing consultant specializing in Google Ads, social media advertising, and data-driven digital marketing strategies. 10+ years experience with 50+ leading brands.",
  keywords:
    "performance marketing, digital marketing consultant, Google Ads, Facebook Ads, programmatic advertising, Karachi Pakistan",
  authors: [{ name: "Salman Khan" }],
  creator: "Salman Khan",
  openGraph: {
    title: "Salman Khan - Performance Marketing Consultant",
    description: "Transform your business with data-driven marketing strategies that deliver measurable results.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

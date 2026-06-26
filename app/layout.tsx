import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navneet Bhardwaj | Cloud & DevOps Engineer",
    template: "%s | Navneet Bhardwaj"
  },
  description:
    "Premium Cloud and DevOps portfolio for Navneet Bhardwaj, focused on AWS, Kubernetes, CI/CD, infrastructure automation, and production operations.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Navneet Bhardwaj | Cloud & DevOps Engineer",
    description:
      "Cloud, DevOps, Kubernetes, AWS, CI/CD, infrastructure automation, and production reliability portfolio.",
    siteName: "Navneet Bhardwaj Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Navneet Bhardwaj | Cloud & DevOps Engineer",
    description:
      "Cloud and DevOps portfolio focused on production infrastructure, automation, and reliability."
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#080b10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

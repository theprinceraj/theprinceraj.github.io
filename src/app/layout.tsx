import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { siteOrigin } from "@/content/site-content";
import { personLd, shareImagePath, websiteLd } from "@/content/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
    title: { default: "Prince Raj", template: "%s | Prince Raj" },
    description:
        "Prince Raj — full-stack developer building SaaS products, backend systems, and AI infrastructure. Creator of GST Reco Pro (tax compliance SaaS) and Project Sentinel (AI governance proxy). Writes about authentication, payments, and data structures.",
    metadataBase: new URL(siteOrigin),
    alternates: { canonical: "/" },
    openGraph: {
        title: "Prince Raj",
        description:
            "Prince Raj — full-stack developer building SaaS products, backend systems, and AI infrastructure. Creator of GST Reco Pro (tax compliance SaaS) and Project Sentinel (AI governance proxy).",
        url: siteOrigin,
        siteName: "Prince Raj",
        images: [
            {
                url: shareImagePath,
                width: 1200,
                height: 630,
                alt: "Prince Raj — Software Engineer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Prince Raj",
        description:
            "Prince Raj — full-stack developer building SaaS products, backend systems, and AI infrastructure. Creator of GST Reco Pro and Project Sentinel.",
        images: [shareImagePath],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white font-sans antialiased")}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
                <Script
                    id="google-gtag"
                    src="https://www.googletagmanager.com/gtag/js?id=G-7M8S3FX4CC"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7M8S3FX4CC');`}
                </Script>
                {children}
            </body>
        </html>
    );
}

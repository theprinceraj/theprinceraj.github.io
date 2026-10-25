import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
    title: { default: "Prince Raj", template: "%s | Prince Raj" },
    description:
        "Prince Raj — full-stack developer building SaaS products, backend systems, and AI infrastructure. Creator of GST Reco Pro (tax compliance SaaS) and Project Sentinel (AI governance proxy). Writes about authentication, payments, and data structures.",
    metadataBase: new URL("https://theprinceraj.in"),
    alternates: { canonical: "/" },
    openGraph: {
        title: "Prince Raj",
        description:
            "Prince Raj — full-stack developer building SaaS products, backend systems, and AI infrastructure. Creator of GST Reco Pro (tax compliance SaaS) and Project Sentinel (AI governance proxy).",
        url: "https://theprinceraj.in",
        siteName: "Prince Raj",
        images: [
            {
                url: "/images/hero-screenshot.png",
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
        images: ["/images/hero-screenshot.png"],
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://theprinceraj.in#person",
        name: "Prince Raj",
        url: "https://theprinceraj.in",
        sameAs: [
            "https://x.com/theprinceraj",
            "https://github.com/theprinceraj",
            "https://www.linkedin.com/in/theprinceraj",
            "https://medium.com/@theprinceraj",
        ],
        identifier: "@theprinceraj",
        jobTitle: "Full-Stack Developer & SaaS Builder",
        email: "profile.princeraj@gmail.com",
        image: "https://theprinceraj.in/images/hero-screenshot.png",
        knowsAbout: [
            "Backend Engineering",
            "NestJS",
            "Node.js",
            "TypeScript",
            "API Design",
            "Authentication Systems",
            "Payment Integration",
            "Razorpay",
            "SaaS Products",
            "Database Architecture",
            "AI Governance",
            "Document Automation",
            "OCR",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
            "Prisma",
            "Cloud Deployment",
        ],
        worksFor: {
            "@type": "Organization",
            name: "GST Reco Pro",
            url: "https://gstrecopro.in",
        },
    } as const;

    const websiteLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://theprinceraj.in#website",
        url: "https://theprinceraj.in",
        name: "Prince Raj — Portfolio",
        description:
            "Prince Raj is a full-stack developer and SaaS builder. Portfolio, projects, and engineering blog.",
        author: { "@id": "https://theprinceraj.in#person" },
        inLanguage: "en-US",
    } as const;
    return (
        <html lang="en">
            <body
                className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white font-sans antialiased")}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

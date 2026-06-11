import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
    title: { default: "Prince Raj", template: "%s | Prince Raj" },
    description: "An engineering undergrad who likes making end-to-end web experiences",
    metadataBase: new URL("https://theprinceraj.tech"),
    alternates: { canonical: "https://theprinceraj.tech" },
    openGraph: {
        title: "Prince Raj",
        description: "An engineering undergrad who likes making end-to-end web experiences",
        url: "https://theprinceraj.tech",
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
        description: "An engineering undergrad who likes making end-to-end web experiences",
        images: ["/images/hero-screenshot.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/images/flowchart-local-social.png",
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
    verification: {
        other: {
            "monetag": "12d796ea721ddf665211124f3bdc6c4e",
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
        name: "Prince Raj",
        url: "https://theprinceraj.tech",
        sameAs: [
            "https://x.com/theprinceraj",
            "https://github.com/theprinceraj",
            "https://www.linkedin.com/in/theprinceraj",
        ],
        jobTitle: "Software Engineer",
        email: "profile.princeraj@gmail.com",
    } as const;
    return (
        <html lang="en">
            <body
                className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white font-sans antialiased")}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                {children}
            </body>
        </html>
    );
}

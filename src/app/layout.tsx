// External Imports
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Local Imports
import { Providers } from "./providers";
import Navbar from "@/components/ui/navbar";

// Styles
import "@/styles/globals.css";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "UniHub - Academic Dashboard",
        template: "%s | UniHub"
    },
    description: "Centralized academic dashboard for university students. Track assignments, manage courses, and access all your educational resources in one place.",
    keywords: ["university", "academic dashboard", "assignment tracker", "gradescope", "course management", "student portal"],
    authors: [{ name: "Salkaro" }],
    creator: "Salkaro",
    publisher: "Salkaro",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://unihub.salkaro.com",
        siteName: "UniHub",
        title: "UniHub - Academic Dashboard",
        description: "Centralized academic dashboard for university students. Track assignments, manage courses, and access all your educational resources in one place.",
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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}

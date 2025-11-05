import type { Metadata } from "next";
import HomePage from "@/components/app/HomePage";

export const metadata: Metadata = {
    title: "UniHub - Question Bank",
    description: "Access comprehensive question banks across different subjects and modules",
    openGraph: {
        title: "UniHub - Question Bank",
        description: "Access comprehensive question banks across different subjects and modules",
    },
};

export default function Root() {
    return <HomePage />;
}

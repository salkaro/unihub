import type { Metadata } from "next";
import NotFoundPage from "@/components/ui/not-found";

export const metadata: Metadata = {
    title: "404 - Page Not Found | UniHub",
    description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
    return (
        <NotFoundPage />
    );
}

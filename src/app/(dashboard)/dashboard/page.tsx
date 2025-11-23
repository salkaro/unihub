import type { Metadata } from "next";
import Page from '@/components/app/dashboard/Page';

export const metadata: Metadata = {
    title: "Dashboard",
    description: "View your upcoming assignments, enrolled modules, and deadlines. Stay on top of your academic schedule with UniHub's centralized dashboard.",
    openGraph: {
        title: "Dashboard | UniHub",
        description: "View your upcoming assignments, enrolled modules, and deadlines. Stay on top of your academic schedule with UniHub's centralized dashboard.",
    },
};

export default function Home() {
    return (
        <Page />
    );
}

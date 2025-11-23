import PhysicsPage from "@/components/app/home/bank/subjects/PhysicsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Physics - Question Bank - UniHub",
    description: "Practice questions for university physics, including Mechanics, Thermodynamics, Electricity & Magnetism, Waves, and Modern Physics.",
    openGraph: {
        title: "Physics - Question Bank - UniHub",
        description: "Practice questions for university physics, including Mechanics, Thermodynamics, Electricity & Magnetism, Waves, and Modern Physics.",
    },
};


export default function Physics() {
    return <PhysicsPage />;
}

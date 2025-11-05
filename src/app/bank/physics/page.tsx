import type { Metadata } from "next";
import PhysicsPage from "@/components/app/bank/subjects/PhysicsPage";

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

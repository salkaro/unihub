import AstronomyPage from "@/components/app/bank/subjects/AstronomyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Astronomy - Question Bank - UniHub",
    description: "Practice questions for university-level astronomy, including planetary science, stellar evolution, galaxies, cosmology, and observational methods.",
    openGraph: {
        title: "Astronomy - Question Bank - UniHub",
        description: "Practice questions for university astronomy, covering planetary motion, stars, galaxies, cosmology, and observational techniques.",
    },
};


export default function Astronomy() {
    return <AstronomyPage />;
}

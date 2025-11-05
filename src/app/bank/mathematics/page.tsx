import type { Metadata } from "next";
import MathematicsPage from "@/components/app/bank/subjects/MathematicsPage";

export const metadata: Metadata = {
    title: "Mathematics - Question Bank - UniHub",
    description: "Practice questions for university mathematics including Calculus, Linear Algebra, Differential Equations, and more",
    openGraph: {
        title: "Mathematics - Question Bank - UniHub",
        description: "Practice questions for university mathematics including Calculus, Linear Algebra, Differential Equations, and more",
    },
};

export default function Mathematics() {
    return <MathematicsPage />;
}

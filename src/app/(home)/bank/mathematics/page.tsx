import MathematicsPage from "@/components/app/home/bank/subjects/MathematicsPage";
import type { Metadata } from "next";

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

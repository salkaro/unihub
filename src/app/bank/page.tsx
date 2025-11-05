import type { Metadata } from "next";
import BankPage from "@/components/app/bank/BankPage";

export const metadata: Metadata = {
    title: "Question Bank - UniHub",
    description: "Browse our comprehensive collection of practice questions organized by subjects and modules",
    openGraph: {
        title: "Question Bank - UniHub",
        description: "Browse our comprehensive collection of practice questions organized by subjects and modules",
    },
};

export default function Bank() {
    return <BankPage />;
}

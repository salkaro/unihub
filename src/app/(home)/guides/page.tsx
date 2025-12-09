import { Metadata } from "next";
import GuidesPage from "@/components/app/home/guides/GuidesPage";

export const metadata: Metadata = {
  title: "Student Guides | UniHub",
  description: "Learn how to make the most of UniHub with our comprehensive student guides. Study tips, question bank tutorials, and exam preparation strategies.",
  openGraph: {
    title: "Student Guides | UniHub",
    description: "Learn how to make the most of UniHub with our comprehensive student guides.",
  },
};

export default function Page() {
  return <GuidesPage />;
}

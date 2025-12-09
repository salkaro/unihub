import { Metadata } from "next";
import AboutPage from "@/components/app/home/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | UniHub",
  description: "Learn about UniHub's mission to help university students excel through quality practice questions and exam preparation resources.",
  openGraph: {
    title: "About Us | UniHub",
    description: "Your trusted platform for university exam preparation and practice questions.",
  },
};

export default function Page() {
  return <AboutPage />;
}

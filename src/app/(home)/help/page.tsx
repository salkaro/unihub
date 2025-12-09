import { Metadata } from "next";
import HelpPage from "@/components/app/home/help/HelpPage";

export const metadata: Metadata = {
  title: "Help Centre | UniHub",
  description: "Get support and find answers to your questions. Contact our team at contact@salkaro.com for assistance with UniHub.",
  openGraph: {
    title: "Help Centre | UniHub",
    description: "We're here to help you succeed. Get support and find answers to your questions.",
  },
};

export default function Page() {
  return <HelpPage />;
}

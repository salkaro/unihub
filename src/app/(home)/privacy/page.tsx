import { Metadata } from "next";
import PrivacyPage from "@/components/app/home/privacy/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | UniHub",
  description: "Learn about how UniHub collects, uses, and protects your personal information. Read our complete privacy policy.",
  openGraph: {
    title: "Privacy Policy | UniHub",
    description: "Your privacy and data security are our top priorities.",
  },
};

export default function Page() {
  return <PrivacyPage />;
}

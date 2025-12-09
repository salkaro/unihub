import { Metadata } from "next";
import ContactPage from "@/components/app/home/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | UniHub",
  description: "Get in touch with the UniHub team. Email us at contact@salkaro.com for questions, support, or feedback.",
  openGraph: {
    title: "Contact Us | UniHub",
    description: "Have questions or need support? Contact the UniHub team at contact@salkaro.com",
  },
};

export default function Page() {
  return <ContactPage />;
}

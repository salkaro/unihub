import type { Metadata } from "next";
import LoginPage from "@/components/app/login/LoginPage";

export const metadata: Metadata = {
    title: "Login",
    description: "Sign in to UniHub to access your academic dashboard, track assignments, and manage your university courses.",
    openGraph: {
        title: "Login | UniHub",
        description: "Sign in to UniHub to access your academic dashboard, track assignments, and manage your university courses.",
    },
};

export default function Login() {
    return <LoginPage />;
}

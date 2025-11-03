import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Physics Resources",
    description: "Access all your physics course resources including Blackboard, lecture recordings, gradebook, and the Durham Physics teaching portal.",
    openGraph: {
        title: "Physics Resources | UniHub",
        description: "Access all your physics course resources including Blackboard, lecture recordings, gradebook, and the Durham Physics teaching portal.",
    },
};

export default function PhysicsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

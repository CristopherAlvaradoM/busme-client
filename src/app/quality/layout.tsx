import type { Metadata } from "next";
import BusmeSidebar from "../components/BusmeSidebar";

export const metadata: Metadata = {
    title: "BusMe - Administración",
    description: "layout del dashboard",
};

export default function CalidadLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userRole = 'calidad';

    return (
        <html lang="en">
            <body className="font-poppins">
                <div className="flex h-screen w-full bg-muted-100">
                    <BusmeSidebar userRole={userRole} />
                    {children}
                </div>
            </body>
        </html>
    );
}
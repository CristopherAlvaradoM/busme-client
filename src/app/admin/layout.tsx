import type { Metadata } from "next";
import BusmeSidebar from "../components/BusmeSidebar";

export const metadata: Metadata = {
    title: "BusMe - Administración",
    description: "layout del dashboard",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-poppins">
                <div className="flex h-screen w-full bg-muted-100">
                    <BusmeSidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}
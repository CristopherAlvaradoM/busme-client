import type { Metadata } from "next";
import Sidebar from "../components/Sidebar";

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
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}
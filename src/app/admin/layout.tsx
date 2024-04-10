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
    const userRole = 'admin';

    return (
        <html lang="en">
            <body className="font-poppins">
                <div className="flex h-screen w-full bg-complementary-100">
                    {//<BusmeSidebar userRole={userRole} />
                    }
                    <div className="p-5 overflow-auto w-full h-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
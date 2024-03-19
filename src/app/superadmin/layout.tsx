import type { Metadata } from "next";
import BusmeSidebar from "../components/BusmeSidebar";

export const metadata: Metadata = {
    title: "BusMe - Administración superior",
    description: "Generated by create next app",
};

export default function SuperAdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userRole = 'superadmin';

    return (
        <html lang="en">
            <body className="font-poppins bg-complementary-100">
                <div className="flex h-screen w-full bg-complementary-100">
                    <BusmeSidebar userRole={userRole} />
                    <div className="p-5 overflow-auto h-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}

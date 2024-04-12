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
            <body className="font-poppins bg-complementary-100">
            <div className="flex h-screen w-full bg-complementary-100">
                {// <BusmeSidebar userRole={userRole}/>
                }
                <div className="p-5 overflow-auto w-full h-full">
                    {children}
                </div>
            </div>
            </body>
        </html>
    );
}
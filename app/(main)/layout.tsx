"use client";

import { Spinner } from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";
import Navigation from "./_components/Navigation";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size={"lg"} />
            </div>
        );
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return <div className="h-full flex dark:bg-[#1F1F1f]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
            {children}
        </main>
    </div>;
};

export default Layout;

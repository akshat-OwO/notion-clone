import { FC, ReactNode } from "react";
import Navbar from "./_components/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return <div className="h-full dark:bg-[#1F1F1F]">
        <Navbar />
        <main className="h-full pt-40">{children}</main></div>;
};

export default Layout;

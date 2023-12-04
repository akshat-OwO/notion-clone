import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default Layout;

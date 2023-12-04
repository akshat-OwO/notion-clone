import { ConvexClientProvider } from "@/components/providers/convex-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Notion",
    description: "The connected workspace where better, faster work happens.",
    icons: {
        icon: {
            url: "/logo.svg",
            href: "/logo.svg",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ConvexClientProvider>
                    <EdgeStoreProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                            storageKey="notion-theme-2"
                        >
                            <Toaster position="bottom-center" />
                            <ModalProvider />
                            {children}
                        </ThemeProvider>
                    </EdgeStoreProvider>
                </ConvexClientProvider>
            </body>
        </html>
    );
}

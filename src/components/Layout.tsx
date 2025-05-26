import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navigation />
            <main className="flex-1 px-4 mt-[72px] mb-[72px]">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;

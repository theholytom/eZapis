import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-1 flex flex-col pt-[72px]">
                <main className="flex-1">
                    <div className="overflow-x-auto">{children}</div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;

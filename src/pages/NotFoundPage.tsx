import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center animate-fadeIn">
                <p className="text-base font-semibold text-primary-foreground">
                    404
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                    Stránka nenalezena
                </h1>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                    Omlouváme se, ale požadovaná stránka nebyla nalezena.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button
                        variant="outline"
                        className="text-primary-foreground font-semibold bg-secondary hover:bg-primary-foreground transition-colors duration-300 hover:text-primary"
                    >
                        <Link to="/">Zpět na hlavní stránku</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;

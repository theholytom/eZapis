import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function ViewButtons() {
    return (
        <header className="flex gap-4 p-4 [&>button]:text-primary-foreground [&>button]:font-semibold [&>button]:bg-secondary [&>button]:hover:bg-primary-foreground transition-colors duration-300 [&>button]:hover:text-primary">
            <Button variant="outline">
                <Link to="/matches">Zpět na zápasy</Link>
            </Button>
            <Button variant="outline">
                <Link to="/">Domů</Link>
            </Button>
            <Button variant="outline">
                <Link to={`./edit`}>Zapsat Zápas</Link>
            </Button>
        </header>
    );
}

export default ViewButtons;

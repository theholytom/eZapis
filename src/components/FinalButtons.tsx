import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import EndMatchDialog from "./EndMatchDialog";

interface Props {
    disabled: boolean
    onMatchEnd: () => void;
}

function FinalButtons({disabled, onMatchEnd}: Props) {
    return (
        <div className="flex justify-center gap-8 pb-30 items-center [&>button]:bg-primary-foreground [&>button]:text-primary [&>button]:font-bold [&>button]:hover:bg-secondary [&>button]:hover:text-primary-foreground [&>button]:w-[140px] [&>button]:min-h-[40px] [&>button]:whitespace-normal">
            <Button>
                <Link to="/matches">Zpět na Zápasy</Link>
            </Button>
            <div>
                <EndMatchDialog onMatchEnd={onMatchEnd} disabled={disabled}/>
            </div>
            <Button>
                <Link to="/">Domů</Link>
            </Button>
        </div>
    );
}

export default FinalButtons;

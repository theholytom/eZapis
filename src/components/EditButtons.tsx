import type { Player } from "@/types/player";
import CardDialog from "./CardDialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"; // Assuming cn utility is available
import SubstituteDialog from "./SubtituteDialog";

interface Props {
    className?: string;
    players: Player[];
    onScoreIncrement?: () => void;
    onScoreDecrement?: () => void;
    onTOincrement?: () => void;
}

function EditButtons({
    className = "",
    players,
    onScoreIncrement,
    onScoreDecrement,
    onTOincrement,
}: Props) {
    return (
        <section
            className={cn("bg-primary flex flex-col gap-10 pt-20", className)}
        >
            <Button className="edit-button" onClick={onScoreIncrement}>
                + bod
            </Button>
            <Button className="edit-button" onClick={onScoreDecrement}>
                - bod
            </Button>
            <Button className="edit-button" onClick={onTOincrement}>
                Time-out
            </Button>
            <SubstituteDialog players={players} buttonText="Střídání" buttonClass="edit-button"></SubstituteDialog>
            <CardDialog card="žlutá" players={players} buttonText="Žlutá karta" buttonClass="edit-button" />
            <CardDialog card="červená" players={players} buttonText="Červená karta" buttonClass="edit-button" />
        </section>
    );
}

export default EditButtons;

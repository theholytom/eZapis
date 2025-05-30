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
    onYellowCard: (playerId: string) => void;
    onRedCard: (playerId: string) => void;
    disabled: boolean;
}

function EditButtons({
    className = "",
    players,
    onScoreIncrement,
    onScoreDecrement,
    onTOincrement,
    onYellowCard,
    onRedCard,
    disabled,
}: Props) {
    return (
        <section
            className={cn("bg-primary flex flex-col gap-10 pt-20", className)}
        >
            <Button
                disabled={disabled}
                className="edit-button"
                onClick={onScoreIncrement}
            >
                + bod
            </Button>
            <Button
                disabled={disabled}
                className="edit-button"
                onClick={onScoreDecrement}
            >
                - bod
            </Button>
            <Button
                disabled={disabled}
                className="edit-button"
                onClick={onTOincrement}
            >
                Time-out
            </Button>
            <SubstituteDialog
                disabled={disabled}
                players={players}
                buttonText="Střídání"
                buttonClass="edit-button"
            />
            <CardDialog
                disabled={disabled}
                card="žlutá"
                players={players}
                buttonText="Žlutá karta"
                buttonClass="edit-button"
                onCardGiven={onYellowCard}
            />
            <CardDialog
                disabled={disabled}
                card="červená"
                players={players}
                buttonText="Červená karta"
                buttonClass="edit-button"
                onCardGiven={onRedCard}
            />
        </section>
    );
}

export default EditButtons;

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import type { Player } from "@/types/player";
import PlayerSelect from "./PlayerSelect";
import { useState } from "react";

interface Props {
    card: string;
    players: Player[];
    buttonText: string;
    buttonClass?: string;
    disabled: boolean;
    onCardGiven: (playerId: string) => void;
}

function CardDialog({
    card,
    players,
    buttonText,
    buttonClass,
    disabled,
    onCardGiven,
}: Props) {
    const [playerSelect, setPlayerSelect] = useState("");

    const handleSelect = (playerId: string) => {
        setPlayerSelect(playerId);
    };

    const handleCardConfirm = () => {
        if (playerSelect) {
            onCardGiven(playerSelect);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button
                    disabled={disabled}
                    className={buttonVariants({ className: buttonClass })}
                >
                    {buttonText}
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Komu je {card} karta udělena?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <PlayerSelect
                            onSelect={handleSelect}
                            players={players}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Zrušit</AlertDialogCancel>
                    <AlertDialogAction onClick={handleCardConfirm}>
                        <button className="font-bold bg-primary-foreground text-primary w-[110px] hover:bg-secondary hover:text-primary-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm h-9 px-4 py-2">
                            Udělit Kartu
                        </button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CardDialog;

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
    players: Player[];
    buttonClass: string;
    buttonText: string;
    disabled: boolean
    onSubstitute: (playerOutId: string, playerInId: string) => void
}

function SubstituteDialog({ players, buttonClass, buttonText, disabled, onSubstitute }: Props) {

    const [playerOut, setPlayerOut] = useState("")
    const [playerIn, setPlayerIn] = useState("")

    const handleSubstitute = () => {
        if (playerOut && playerIn) {
            onSubstitute(playerOut, playerIn);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button disabled={disabled} className={buttonVariants({ className: buttonClass })}>
                    {buttonText}
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Odchází:</AlertDialogTitle>
                    <AlertDialogDescription>
                        <PlayerSelect onSelect={setPlayerOut} players={players} />
                    </AlertDialogDescription>
                    <AlertDialogTitle>Přichází:</AlertDialogTitle>
                    <AlertDialogDescription>
                        <PlayerSelect onSelect={setPlayerIn} players={players} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Zrušit</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubstitute}>
                        <button
                            className="font-bold bg-primary-foreground text-primary w-[110px] hover:bg-secondary hover:text-primary-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm h-9 px-4 py-2">
                            Vystřídat
                        </button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default SubstituteDialog;

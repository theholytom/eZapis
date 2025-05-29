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
import { Button } from "@/components/ui/button";
import type { Player } from "@/types/player";
import PlayerSelect from "./PlayerSelect";

interface Props {
    card: string;
    players: Player[];
    buttonText: string;
    buttonClass?: string;
}

function CardDialog({ card, players, buttonText, buttonClass }: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={buttonClass}>{buttonText}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Komu je {card} karta udělena?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <PlayerSelect players={players} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Zrušit</AlertDialogCancel>
                    <AlertDialogAction>
                        <Button className=" font-bold bg-primary-foreground text-primary w-[110px] hover:bg-secondary hover:text-primary-foreground">
                            Udělit Kartu
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default CardDialog;

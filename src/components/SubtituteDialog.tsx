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
    players: Player[];
    buttonClass: string;
    buttonText: string;
}

function SubstituteDialog({ players, buttonClass, buttonText }: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={buttonClass}>{buttonText}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Odchází:</AlertDialogTitle>
                    <AlertDialogDescription>
                        <PlayerSelect players={players} />
                    </AlertDialogDescription>
                    <AlertDialogTitle>Přichází:</AlertDialogTitle>
                    <AlertDialogDescription>
                        <PlayerSelect players={players} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Zrušit</AlertDialogCancel>
                    <AlertDialogAction>
                        <Button className=" font-bold bg-primary-foreground text-primary w-[110px] hover:bg-secondary hover:text-primary-foreground">
                            Vystřídat
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default SubstituteDialog;

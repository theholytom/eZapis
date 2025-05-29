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
import { Link } from "react-router-dom";

interface Props {
    disabled: boolean;
}

function EndMatchDialog({ disabled }: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button
                    disabled={disabled}
                    className="text-3xl p-8 bg-destructive text-destructive-foreground hover:bg-to/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:bg-background/50"
                >
                    {disabled ? "Zápas již skončil" : "Ukončit zápas"}
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Opravdu chceš ukončit zápas?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Tato akce nejde vrátit zpět.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Ne</AlertDialogCancel>
                    <Link
                        to="/matches"
                        className="text-destructive-foreground bg-destructive hover:bg-destructive/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm h-9 px-4 py-2"
                    >
                        Ano
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default EndMatchDialog;

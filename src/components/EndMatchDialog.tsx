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

interface Props {
    disabled: boolean;
    onMatchEnd: () => void;
}

function EndMatchDialog({ disabled, onMatchEnd }: Props) {
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
                    <AlertDialogAction onClick={onMatchEnd}>
                    <button
                        className="text-destructive-foreground bg-destructive hover:bg-to/80 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm h-9 px-4 py-2"
                    >
                        Ano
                    </button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default EndMatchDialog;

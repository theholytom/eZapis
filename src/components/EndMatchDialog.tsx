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
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function EndMatchDialog() {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant="destructive" className="text-3xl p-8">
                    Ukončit Zápas
                </Button>
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
                    <AlertDialogAction>
                        <Button variant="destructive">
                            <Link to="/matches">Ano</Link>
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default EndMatchDialog;

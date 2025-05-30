import { matches } from "@/data/matches.json";
import { teams } from "@/data/teams";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

function MatchTable() {
    // Get team name by ID
    const getTeamName = (teamId: string) => {
        const team = teams.find((t) => t.id === teamId);
        return team?.name || "Unknown Team";
    };

    // Format date to local string
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleString("cs-CZ", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Check if match is today
    const isToday = (dateStr: string) => {
        const date = new Date(dateStr);
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    // Check if match is upcoming (in next 7 days)
    const isUpcoming = (dateStr: string) => {
        const date = new Date(dateStr);
        const today = new Date();
        const sevenDays = new Date();
        sevenDays.setDate(sevenDays.getDate() + 7);
        return date > today && date <= sevenDays;
    };

    return (
        <div className="p-5 space-y-4 flex justify-center ">
            <div className="rounded-lg border bg-card-foreground overflow-hidden max-w-7xl w-full">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-primary hover:bg-primary">
                            <TableHead className="text-primary-foreground font-bold w-[100px]">
                                Číslo
                            </TableHead>
                            <TableHead className="text-primary-foreground font-bold w-[180px]">
                                Datum
                            </TableHead>
                            <TableHead className="text-primary-foreground font-bold">
                                Domácí
                            </TableHead>
                            <TableHead className="text-primary-foreground font-bold">
                                Hosté
                            </TableHead>
                            <TableHead className="text-primary-foreground font-bold w-[200px]">
                                Výsledek
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {matches.map((match) => {
                            const matchIsToday = isToday(match.date);
                            const matchIsUpcoming = isUpcoming(match.date);

                            return (
                                <TableRow
                                    key={match.id}
                                    className={cn(
                                        "transition-colors duration-200",
                                        matchIsToday &&
                                            "bg-primary/10 hover:bg-primary/40",
                                        matchIsUpcoming && "bg-chart-1/20",
                                        !matchIsToday &&
                                            !matchIsUpcoming &&
                                            "hover:bg-ring"
                                    )}
                                >
                                    <TableCell className="font-medium">
                                        <Link
                                            to={`/matches/${match.id}`}
                                            className="block w-full transition-colors"
                                        >
                                            #{match.id}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            to={`/matches/${match.id}`}
                                            className="block w-full transition-colors"
                                        >
                                            <span
                                                className={cn(
                                                    "px-2 py-1 rounded-md text-sm",
                                                    matchIsToday &&
                                                        "bg-primary text-primary-foreground"
                                                )}
                                            >
                                                {formatDate(match.date)}
                                            </span>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            to={`/matches/${match.id}`}
                                            className="block w-full transition-colors font-medium"
                                        >
                                            {getTeamName(match.firstTeamId)}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            to={`/matches/${match.id}`}
                                            className="block w-full transition-colors font-medium"
                                        >
                                            {getTeamName(match.secondTeamId)}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            to={`/matches/${match.id}`}
                                            className="block w-full transition-colors"
                                        >
                                            {match.final ? (
                                                <div className="flex gap-2">
                                                    {match.sets?.map(
                                                        (set, index) => (
                                                            <span
                                                                key={index}
                                                                className={cn(
                                                                    "px-2 py-1 rounded-md text-sm",
                                                                    set.scoreTeamA >
                                                                        set.scoreTeamB
                                                                        ? "bg-green-100 text-green-800"
                                                                        : "bg-red-100 text-red-800"
                                                                )}
                                                            >
                                                                {set.scoreTeamA}
                                                                :
                                                                {set.scoreTeamB}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-background/80">
                                                    Naplánováno
                                                </span>
                                            )}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default MatchTable;

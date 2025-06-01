import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { matches } from "@/data/matches.json";
import { teams } from "@/data/teams";
import { Link } from "react-router-dom";

interface MatchCardProps {
    matchId: string;
}

export default function MatchCard({ matchId }: MatchCardProps) {
    const match = matches.find((m) => m.id === matchId);
    const team1 = teams.find((t) => t.id === match?.firstTeamId)?.name || "";
    const team2 = teams.find((t) => t.id === match?.secondTeamId)?.name || "";
    const time = match ? new Date(match.date) : new Date();

    return (
        <Card className="bg-chart-1 text-primary-foreground flex-column w-[300px]">
            <Link to={`/matches/${matchId}`}>
                <CardHeader>
                    <CardTitle className="break-words">
                        {team1} vs {team2}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    {time.toLocaleString()}
                </CardContent>
            </Link>
        </Card>
    );
}

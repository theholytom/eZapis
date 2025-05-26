import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface MatchCardProps {
    team1: string;
    team2: string;
    time: Date;
}

export default function MatchCard({ team1, team2, time }: MatchCardProps) {
    return (
        <Card className="bg-foreground text-background flex-column min-w-[300px]">
            <CardHeader>
                <CardTitle className="whitespace-nowrap">
                    {team1} vs {team2}
                </CardTitle>
            </CardHeader>
            <CardContent>{time.toLocaleString()}</CardContent>
        </Card>
    );
}

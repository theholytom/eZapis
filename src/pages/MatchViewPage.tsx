import Rosters from "@/components/Rosters";
import ScoreTable from "@/components/ScoreTable";
import TeamLeft from "@/components/TeamLeft";
import TeamRight from "@/components/TeamRight";
import type { Match } from "@/types/match";
import { matches } from "@/data/matches.json";
import { teams } from "@/data/teams";
import type { SetScore } from "./MatchEditPage";
import ViewButtons from "@/components/ViewButtons";
import { useEffect, useState } from "react";

interface Props {
    matchId: string;
}

function MatchViewPage({ matchId }: Props) {
    const [match, setMatch] = useState<Match | null>(null);

    useEffect(() => {
        const foundMatch = matches.find((t) => t.id === matchId);
        if (foundMatch) {
            setMatch({
                ...foundMatch,
                date: new Date(foundMatch.date),
            });
        }
    }, [matchId]);

    if (!match) {
        return <div>Loading...</div>;
    }

    const sets = match.sets || [];

    // Calculate all the values we need from match data
    const leftSetsWon = sets.filter(
        (set) => set.scoreTeamA > set.scoreTeamB
    ).length;
    const rightSetsWon = sets.filter(
        (set) => set.scoreTeamB > set.scoreTeamA
    ).length;

    // Current scores only shown if match is in progress
    const leftScore =
        sets.length > 0 && !match.final ? sets[sets.length - 1].scoreTeamA : 0;
    const rightScore =
        sets.length > 0 && !match.final ? sets[sets.length - 1].scoreTeamB : 0;

    // Convert match sets to setScores format
    const setScores: SetScore[] = Array(5)
        .fill(null)
        .map((_, index) => {
            if (index < sets.length) {
                return {
                    team1: sets[index].scoreTeamA,
                    team2: sets[index].scoreTeamB,
                };
            }
            return { team1: 0, team2: 0 };
        });

    // Get team data
    const team1 = teams.find((t) => t.id === match.firstTeamId);
    const team1Name = team1?.name || "Unknown Team";
    const team2 = teams.find((t) => t.id === match.secondTeamId);
    const team2Name = team2?.name || "Unknown Team";

    return (
        <div className="fixed inset-0 bg-primary overflow-auto">
            <div className="p-4">
                <ViewButtons />
                <div className="overflow-auto -mx-4 px-4">
                    <div className="min-w-[800px] flex items-center gap-5 justify-center my-4">
                        <TeamLeft
                            name={team1Name}
                            score={leftScore}
                            sets={leftSetsWon}
                            TOcount={0}
                        />
                        <p className="text-5xl text-primary-foreground">:</p>
                        <TeamRight
                            name={team2Name}
                            score={rightScore}
                            sets={rightSetsWon}
                            TOcount={0}
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="overflow-auto -mx-4 px-4">
                        <div className="min-w-[800px]">
                            <ScoreTable
                                team1={team1Name}
                                team2={team2Name}
                                set={sets.length + 1}
                                team1Points={leftScore}
                                team2points={rightScore}
                                setScores={setScores}
                            />
                        </div>
                    </div>
                    <div className="overflow-auto -mx-4 px-4">
                        <div className="min-w-[800px] px-12">
                            <Rosters
                                playersA={team1?.roster || []}
                                playersB={team2?.roster || []}
                                yellowCards={match.yellowCard || []}
                                redCards={match.redCard || []}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchViewPage;

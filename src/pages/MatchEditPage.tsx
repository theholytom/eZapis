import SwitchSidesButton from "@/components/icons/SwitchSidesButton";
import ScoreTable from "@/components/ScoreTable";
import TeamLeft from "@/components/TeamLeft";
import TeamRight from "@/components/TeamRight";
import Rosters from "@/components/Rosters";
import EditButtons from "@/components/EditButtons";
import { useEffect } from "react";
import FinalButtons from "@/components/FinalButtons";
import type { Player } from "@/types/player";
import type { Match } from "@/types/match";
import { matches } from "@/data/matches.json";
import { teams } from "@/data/teams";
import { usePersistentState } from "@/components/hooks/UsePersistentState";

export interface SetScore {
    team1: number;
    team2: number;
}

interface Props {
    matchId: string;
}

function MatchEditPage({ matchId }: Props) {
    const [match, setMatch] = usePersistentState<Match | null>("match", null);
    const [isFinal, setIsFinal] = usePersistentState<boolean>("final", false);
    const [leftScore, setLeftScore] = usePersistentState<number>(
        "leftScore",
        0
    );
    const [rightScore, setRightScore] = usePersistentState<number>(
        "rightScore",
        0
    );
    const [leftSets, setLeftSets] = usePersistentState<number>("leftSets", 0);
    const [rightSets, setRightSets] = usePersistentState<number>(
        "rightSets",
        0
    );
    const [setNum, setSetNum] = usePersistentState<number>("setNum", 1);
    const [setScores, setSetScores] = usePersistentState<SetScore[]>(
        "setScores",
        Array(5)
            .fill(null)
            .map(() => ({ team1: 0, team2: 0 }))
    );
    const [leftTOCount, setLeftTOCount] = usePersistentState<number>(
        "leftTOCount",
        0
    );
    const [rightTOCount, setRightTOCount] = usePersistentState<number>(
        "rightTOCount",
        0
    );
    const [team1Players, setTeam1Players] = usePersistentState<Player[]>(
        "team1Players",
        []
    );
    const [team2Players, setTeam2Players] = usePersistentState<Player[]>(
        "team2Players",
        []
    );

    const [yellowCard, setYellowCard] = usePersistentState<string[]>(
        "yellowCard",
        []
    );

    const [redCard, setRedCard] = usePersistentState<string[]>("redCard", []);

    useEffect(() => {
        // Reset all state when matchId changes
        if (!match || match.id !== matchId) {
            const foundMatch = matches.find((t) => t.id === matchId);
            if (foundMatch) {
                setMatch({
                    ...foundMatch,
                    date: new Date(foundMatch.date),
                });
                // Calculate sets won from match history
                const leftSetsWon = foundMatch.sets.filter(
                    (set) => set.scoreTeamA > set.scoreTeamB
                ).length;
                const rightSetsWon = foundMatch.sets.filter(
                    (set) => set.scoreTeamB > set.scoreTeamA
                ).length;

                // Set current scores if match is in progress
                setLeftScore(
                    foundMatch.sets.length > 0 && !foundMatch.final
                        ? foundMatch.sets[foundMatch.sets.length - 1].scoreTeamA
                        : 0
                );
                setRightScore(
                    foundMatch.sets.length > 0 && !foundMatch.final
                        ? foundMatch.sets[foundMatch.sets.length - 1].scoreTeamB
                        : 0
                );
                setLeftSets(leftSetsWon);
                setRightSets(rightSetsWon);
                setSetNum(foundMatch.sets.length + 1);
                setIsFinal(foundMatch.final);

                // Convert historical sets to setScores format
                const initialSetScores = Array(5)
                    .fill(null)
                    .map(() => ({ team1: 0, team2: 0 }));
                foundMatch.sets.forEach((set, index) => {
                    initialSetScores[index] = {
                        team1: set.scoreTeamA,
                        team2: set.scoreTeamB,
                    };
                });
                setSetScores(initialSetScores);

                // Initialize timeouts and cards
                setLeftTOCount(0);
                setRightTOCount(0);
                setYellowCard(foundMatch.yellowCard);
                setRedCard(foundMatch.redCard);

                // Load team rosters when match is available
                const team1 = teams.find(
                    (t) => t.id === foundMatch.firstTeamId
                );
                const team2 = teams.find(
                    (t) => t.id === foundMatch.secondTeamId
                );

                if (team1?.roster) setTeam1Players(team1.roster);
                if (team2?.roster) setTeam2Players(team2.roster);
            }
        }
    }, [matchId]);

    // Get team names for display
    const team1 = match ? teams.find((t) => t.id === match.firstTeamId) : null;
    const team1Name = team1?.name || "Unknown Team";
    const team2 = match ? teams.find((t) => t.id === match.secondTeamId) : null;
    const team2Name = team2?.name || "Unknown Team";

    const handleLeftTO = () => {
        setLeftTOCount((prev) => {
            const newTOCount = prev + 1;
            if (newTOCount > 2) {
                return 2;
            }
            return newTOCount;
        });
    };

    const handleRightTO = () => {
        setRightTOCount((prev) => {
            const newTOCount = prev + 1;
            if (newTOCount > 2) {
                return 2;
            }
            return newTOCount;
        });
    };

    const handleMatchEnd = () => {
        if (match) {
            match.final = true;
        }
        setIsFinal(true);
    };

    const handleYellowCard = (playerId: string) => {
        setYellowCard((prev) => [...prev, playerId]);
    };

    const handleRedCard = (playerId: string) => {
        setRedCard((prev) => [...prev, playerId]);
    };

    function isEnd(): boolean {
        if (!match) return false;
        return leftSets === 3 || rightSets === 3 || match.final === true;
    }

    const handleLeftScoreIncrement = () => {
        if (!isEnd()) {
            const newLeftScore = leftScore + 1;
            const isLastSet = setNum === 5;
            const winningScore = isLastSet ? 15 : 25;

            if (
                newLeftScore >= winningScore &&
                newLeftScore - rightScore >= 2
            ) {
                setSetScores((prev) => {
                    const newScores = [...prev];
                    newScores[setNum - 1] = {
                        team1: newLeftScore,
                        team2: rightScore,
                    };
                    return newScores;
                });
                setLeftSets((prev) => prev + 1);
                setSetNum((prev) => prev + 1);
                setLeftScore(0);
                setRightScore(0);
                setLeftTOCount(0);
                setRightTOCount(0);
            } else {
                setLeftScore(newLeftScore);
            }
        }
    };

    const handleLeftScoreDecrement = () => {
        setLeftScore((prev) => Math.max(0, prev - 1));
    };

    const handleRightScoreIncrement = () => {
        if (!isEnd()) {
            const newRightScore = rightScore + 1;
            const isLastSet = setNum === 5;
            const winningScore = isLastSet ? 15 : 25;

            if (
                newRightScore >= winningScore &&
                newRightScore - leftScore >= 2
            ) {
                setSetScores((prev) => {
                    const newScores = [...prev];
                    newScores[setNum - 1] = {
                        team1: leftScore,
                        team2: newRightScore,
                    };
                    return newScores;
                });
                setRightSets((prev) => prev + 1);
                setSetNum((prev) => prev + 1);
                setLeftScore(0);
                setRightScore(0);
                setLeftTOCount(0);
                setRightTOCount(0);
            } else {
                setRightScore(newRightScore);
            }
        }
    };

    const handleRightScoreDecrement = () => {
        setRightScore((prev) => Math.max(0, prev - 1));
    };

    const handleSubstitute = (playerOutId: string, playerInId: string) => {
        console.log("Player Out: " + playerOutId + ", Player In: " + playerInId)
    }

    if (!match) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex w-full">
            <EditButtons
                disabled={isFinal}
                players={team1Players}
                className="pl-10"
                onScoreIncrement={handleLeftScoreIncrement}
                onScoreDecrement={handleLeftScoreDecrement}
                onTOincrement={handleLeftTO}
                onYellowCard={handleYellowCard}
                onRedCard={handleRedCard}
                onSubstitute={handleSubstitute}
            />
            <main className="bg-primary min-h-screen flex-1">
                <SwitchSidesButton />
                <div className="flex items-center gap-5 justify-center">
                    <TeamLeft
                        name={team1Name}
                        score={leftScore}
                        sets={leftSets}
                        TOcount={leftTOCount}
                    />
                    <p className="text-5xl text-primary-foreground">:</p>
                    <TeamRight
                        name={team2Name}
                        score={rightScore}
                        sets={rightSets}
                        TOcount={rightTOCount}
                    />
                </div>
                <ScoreTable
                    team1={team1Name}
                    team2={team2Name}
                    set={setNum}
                    team1Points={leftScore}
                    team2points={rightScore}
                    setScores={setScores}
                />
                <Rosters
                    playersA={team1Players}
                    playersB={team2Players}
                    yellowCards={yellowCard}
                    redCards={redCard}
                />
                <FinalButtons onMatchEnd={handleMatchEnd} disabled={isFinal} />
            </main>
            <EditButtons
                disabled={isFinal}
                players={team2Players}
                className="pr-10"
                onScoreIncrement={handleRightScoreIncrement}
                onScoreDecrement={handleRightScoreDecrement}
                onTOincrement={handleRightTO}
                onRedCard={handleRedCard}
                onYellowCard={handleYellowCard}
                onSubstitute={handleSubstitute}
            />
        </div>
    );
}

export default MatchEditPage;

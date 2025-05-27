import SwitchSidesButton from "@/components/icons/SwitchSidesButton";
import ScoreTable from "@/components/ScoreTable";
import TeamLeft from "@/components/TeamLeft";
import TeamRight from "@/components/TeamRight";
import Rosters from "@/components/Rosters";
import EditButtons from "@/components/EditButtons";
import { useState } from "react";

interface SetScore {
    team1: number;
    team2: number;
}

const team1 = "Lvi Praha";
const team2 = "Karlovarsko";
const playersA = [
    "František Josef II.",
    "Tomáš Holý",
    "Tomáš Holý Veliký",
    "Napoleon Bonaparte",
    "Wilfredo Leon",
    "Bartosz Kurek",
    "Alessandro Michieletto",
    "Tomáš Holý",
    "František Josef II.",
    "Tomáš Holý",
    "Tomáš Holý Veliký",
    "Napoleon Bonaparte",
    "Wilfredo Leon",
    "Bartosz Kurek",
];
const playersB = [...playersA];

function MatchEditPage() {
    const [leftScore, setLeftScore] = useState(0);
    const [rightScore, setRightScore] = useState(0);
    const [leftSets, setLeftSets] = useState(0);
    const [rightSets, setRightSets] = useState(0);
    const [setNum, setSetNum] = useState(1);
    const [setScores, setSetScores] = useState<SetScore[]>(
        Array(5)
            .fill(null)
            .map(() => ({ team1: 0, team2: 0 }))
    );
    const [leftTOCount, setLeftTOCount] = useState(0)
    const [rightTOCount, setRightTOCount] = useState(0)

    const handleLeftTO = () => {
        setLeftTOCount((prev) => {
            const newTOCount = prev + 1
            if (newTOCount > 2) {
                return 2
            }
            return newTOCount
        })
    }

    const handleRightTO = () => {
        setRightTOCount((prev) => {
            const newTOCount = prev + 1
            if (newTOCount > 2) {
                return 2
            }
            return newTOCount
        })
    }

    const handleLeftScoreIncrement = () => {
        const newLeftScore = leftScore + 1;
        if (newLeftScore >= 25 && newLeftScore - rightScore >= 2) {
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
            setLeftTOCount(0)
            setRightTOCount(0)
        } else {
            setLeftScore(newLeftScore);
        }
    };

    const handleLeftScoreDecrement = () => {
        setLeftScore((prev) => Math.max(0, prev - 1));
    };

    const handleRightScoreIncrement = () => {
        const newRightScore = rightScore + 1;
        if (newRightScore >= 25 && newRightScore - leftScore >= 2) {
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
            setLeftTOCount(0)
            setRightTOCount(0)
        } else {
            setRightScore(newRightScore);
        }
    };

    const handleRightScoreDecrement = () => {
        setRightScore((prev) => Math.max(0, prev - 1));
    };

    return (
        <div className="flex w-full">
            <EditButtons
                className="pl-10"
                onScoreIncrement={handleLeftScoreIncrement}
                onScoreDecrement={handleLeftScoreDecrement}
                onTOincrement={handleLeftTO}
            />
            <main className="bg-primary min-h-screen flex-1">
                <SwitchSidesButton />
                <div className="flex items-center gap-5 justify-center">
                    <TeamLeft name={team1} score={leftScore} sets={leftSets} TOcount={leftTOCount}/>
                    <p className="text-5xl text-primary-foreground">:</p>
                    <TeamRight
                        name={team2}
                        score={rightScore}
                        sets={rightSets}
                        TOcount={rightTOCount}
                    />
                </div>
                <ScoreTable
                    team1={team1}
                    team2={team2}
                    set={setNum}
                    team1Points={leftScore}
                    team2points={rightScore}
                    setScores={setScores}
                />
                <Rosters playersA={playersA} playersB={playersB} />
            </main>
            <EditButtons
                className="pr-10"
                onScoreIncrement={handleRightScoreIncrement}
                onScoreDecrement={handleRightScoreDecrement}
                onTOincrement={handleRightTO}
            />
        </div>
    );
}

export default MatchEditPage;

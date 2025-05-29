interface SetScores {
    team1: number;
    team2: number;
}

interface Props {
    team1: string;
    team2: string;
    set: number;
    team1Points: number;
    team2points: number;
    setScores: SetScores[];
}

function ScoreTable({
    team1,
    team2,
    set,
    team1Points,
    team2points,
    setScores,
}: Props) {
    // Create a copy of setScores to display
    const displayScores = [...setScores];

    // Update current set's score
    if (set <= 5) {
        displayScores[set - 1] = { team1: team1Points, team2: team2points };
    }

    const team1Total = displayScores.reduce((sum, s) => sum + s.team1, 0);
    const team2Total = displayScores.reduce((sum, s) => sum + s.team2, 0);

    return (
        <table className="border-collapse mx-auto mt-2 [&_th]:px-8 [&_th]:py-4 [&_th]:text-primary-foreground [&_th]:text-2xl [&_td]:px-8 [&_td]:py-4 [&_td]:text-primary-foreground [&_td]:text-2xl [&_td]:text-center">
            <thead>
                <tr className="[&_th]:border-b-2 [&_th]:border-primary-foreground">
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>Součet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-left font-bold">{team1}</td>
                    {displayScores.map((s, index) => (
                        <td key={index}>{s.team1}</td>
                    ))}
                    <td>{team1Total}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">{team2}</td>
                    {displayScores.map((s, index) => (
                        <td key={index}>{s.team2}</td>
                    ))}
                    <td>{team2Total}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ScoreTable;

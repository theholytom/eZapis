interface Props {
    team1: string;
    team2: string;
    s1a?: number;
    s1b?: number;
    s2a?: number;
    s2b?: number;
    s3a?: number;
    s3b?: number;
    s4a?: number;
    s4b?: number;
    s5a?: number;
    s5b?: number;
}

function ScoreTable({
    team1,
    team2,
    s1a = 0,
    s1b = 0,
    s2a = 0,
    s2b = 0,
    s3a = 0,
    s3b = 0,
    s4a = 0,
    s4b = 0,
    s5a = 0,
    s5b = 0,
}: Props) {
    const team1Total = s1a + s2a + s3a + s4a + s5a;
    const team2Total = s1b + s2b + s3b + s4b + s5b;

    return (
        <table className="border-collapse mx-auto mt-8 [&_th]:px-8 [&_th]:py-4 [&_th]:text-primary-foreground [&_th]:text-2xl [&_td]:px-8 [&_td]:py-4 [&_td]:text-primary-foreground [&_td]:text-2xl [&_td]:text-center">
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
                <tr>
                    <td className="text-left font-bold">{team1}</td>
                    <td>{s1a}</td>
                    <td>{s2a}</td>
                    <td>{s3a}</td>
                    <td>{s4a}</td>
                    <td>{s5a}</td>
                    <td>{team1Total}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-left font-bold">{team2}</td>
                    <td>{s1b}</td>
                    <td>{s2b}</td>
                    <td>{s3b}</td>
                    <td>{s4b}</td>
                    <td>{s5b}</td>
                    <td>{team2Total}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ScoreTable;

import MatchCard from "./ui/MatchCard";

function TopMatchesCard() {
    return (
        <div className="flex-col space-y-5 p-5">
            <h2 className="text-3xl">Top Zápasy dne</h2>
            <ul className="flex flex-row gap-4">
                <li>
                    <MatchCard
                        team1="Karlovarsko"
                        team2="Lvi Praha"
                        time={new Date(2025, 11, 24, 19, 0)}
                    />
                </li>
                <li>
                    <MatchCard
                        team1="Kladno"
                        team2="Hradec Králové"
                        time={new Date(2025, 11, 24, 19, 0)}
                    />
                </li>
                <li>
                    <MatchCard
                        team1="Karlovarsko"
                        team2="Lvi Praha"
                        time={new Date(2025, 11, 24, 19, 0)}
                    />
                </li>
            </ul>
        </div>
    );
}

export default TopMatchesCard;

import MatchCard from "./ui/MatchCard";

function TopMatchesCard() {
    return (
        <div className="flex-col space-y-5 p-5">
            <h2 className="text-3xl">Top Zápasy</h2>
            <ul className="flex flex-col md:flex-row gap-4">
                <li>
                    <MatchCard matchId="11" />
                </li>
                <li>
                    <MatchCard matchId="19" />
                </li>
                <li>
                    <MatchCard matchId="21" />
                </li>
            </ul>
        </div>
    );
}

export default TopMatchesCard;

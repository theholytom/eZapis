import StatisticCard from "./ui/StatisticCard";
import { matches } from "@/data/matches.json";

function Statistics() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const matchesToday = matches.filter((match) => {
        const matchDate = new Date(match.date);
        matchDate.setHours(0, 0, 0, 0);
        return matchDate.getTime() === today.getTime();
    }).length;

    const weekStart = new Date(today);
    weekStart.setDate(
        today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
    );
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    const matchesThisWeek = matches.filter((match) => {
        const matchDate = new Date(match.date);
        return matchDate >= weekStart && matchDate <= weekEnd;
    }).length;

    return (
        <div className="flex-col space-y-5 p-5">
            <h2 className="text-3xl">Zajímavé statistiky</h2>
            <ul className="flex flex-col md:flex-row gap-4">
                <li>
                    <StatisticCard
                        title="Počet zápasů dnes:"
                        value={matchesToday}
                    />
                </li>
                <li>
                    <StatisticCard
                        title="Počet zápasů tento týden:"
                        value={matchesThisWeek}
                    />
                </li>
                <li>
                    <StatisticCard
                        title="Zajímavá statistika:"
                        value={189635}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Statistics;

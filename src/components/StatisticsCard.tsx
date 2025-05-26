import StatisticCard from "./ui/StatisticCard"

function Statistics() {
    return (
        <div className="flex-col space-y-5 p-5">
            <h2 className="text-3xl">Top Zápasy dne</h2>
            <ul className="flex flex-row gap-4">
                <li>
                    <StatisticCard
                        title="Počet zápasů dnes:"
                        value={25}
                    />
                </li>
                <li>
                    <StatisticCard
                        title="Počet zápasů tento týden:"
                        value={1}
                    />
                </li>
                <li>
                    <StatisticCard
                        title="Zajímavá statistika:"
                        value={2}
                    />
                </li>
            </ul>
        </div>
        
    )
}

export default Statistics
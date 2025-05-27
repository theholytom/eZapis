interface Props {
    playersA: string[];
    playersB: string[];
}

function Rosters({ playersA, playersB }: Props) {
    return (
        <div className="flex gap-10 justify-center pt-3 pb-30">
            {[playersA, playersB].map((players, tableIndex) => (
                <div key={tableIndex} className="flex-none">
                    <table className="w-[350px] table-fixed bg-primary-foreground text-background border-collapse overflow-hidden rounded-md [&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-primary [&_tr]:hover:bg-gray-300">
                        <thead className="font-bold">
                            <tr>
                                <td className="w-[80px] text-center">
                                    Číslo
                                </td>
                                <td className="w-[270px]">
                                    Jméno
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player, index) => (
                                <tr key={index}>
                                    <td className="w-[80px] text-center">
                                        {index + 1}
                                    </td>
                                    <td className="w-[270px] truncate">
                                        {player}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default Rosters;

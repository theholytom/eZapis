import type { Player } from "@/types/player";
import RedCard from "./icons/RedCard";
import YellowCard from "./icons/YellowCard";

export interface RostersProps {
    playersA: Player[];
    playersB: Player[];
    yellowCards: string[]
    redCards: string[]
}

export default function Rosters({ playersA, playersB, yellowCards, redCards }: RostersProps) {
    return (
        <div className="flex gap-10 justify-center pt-3 pb-10">
            {[playersA, playersB].map((players, tableIndex) => (
                <div key={tableIndex} className="flex-none">
                    <table className="w-[350px] table-fixed bg-primary-foreground text-background border-collapse overflow-hidden rounded-md [&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-primary [&_tr]:hover:bg-gray-300">
                        <thead className="font-bold">
                            <tr>
                                <td className="w-[80px] text-center">Číslo</td>
                                <td className="w-[300px]">Jméno</td>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player, index) => {
                                const yellowCardCount = yellowCards.filter(id => id === player.id).length;
                                const redCardCount = redCards.filter(id => id === player.id).length;
                                
                                return (
                                    <tr key={index}>
                                        <td className="w-[80px] text-center">
                                            {player.number}
                                        </td>
                                        <td className="w-[300px] truncate">
                                            <div className="flex justify-between">
                                                {player.name}
                                                <div className="flex gap-0,5 items-center">
                                                    {yellowCardCount > 0 && (
                                                        <>
                                                            <p>{yellowCardCount}</p>
                                                            <YellowCard />
                                                        </>
                                                    )}
                                                    {redCardCount > 0 && (
                                                        <>
                                                            <p>{redCardCount}</p>
                                                            <RedCard />
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

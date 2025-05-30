import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { Player } from "@/types/player";

interface Props {
    players: Player[];
    onSelect: (playerId: string) => void;
}

function PlayerSelect({ players, onSelect }: Props) {
    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-[180px] bg-primary-foreground text-black">
                <SelectValue placeholder="Vyber hráče" />
            </SelectTrigger>
            <SelectContent>
                {players.map((player) => (
                    <SelectItem key={player.id} value={player.id}>
                        {player.number} {player.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default PlayerSelect;

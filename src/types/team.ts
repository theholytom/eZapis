import type { Player } from "./player";

export interface Team {
    id: string;
    name: string;
    roster: Player[]
}
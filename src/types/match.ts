import type { Set } from "./set";

export interface Match {
    id: string;
    firstTeamId: string;
    secondTeamId: string;
    date: Date;
    yellowCard?: string[]
    redCard?: string[]
    sets?: Set[];
    final?: boolean;
}
import type { Match } from "@/types/match";

// Helper to create past match data
const createPastMatch = (id: string, firstTeamId: string, secondTeamId: string, date: Date, sets: Array<{number: number, scoreTeamA: number, scoreTeamB: number}>) => ({
    id,
    firstTeamId,
    secondTeamID: secondTeamId,
    date,
    yellowCard: [], // Simplified for static data
    redCard: [],
    sets,
    final: true
});

// Helper to create future match data
const createFutureMatch = (id: string, firstTeamId: string, secondTeamId: string, date: Date) => ({
    id,
    firstTeamId,
    secondTeamID: secondTeamId,
    date,
    yellowCard: [],
    redCard: [],
    sets: [],
    final: false
});

export const matches: Match[] = [
    // Past matches (10)
    {
        id: "1",
        firstTeamId: "1",
        secondTeamID: "2",
        date: new Date(2024, 0, 15, 18, 30), // Jan 15, 2024
        yellowCard: ["1", "15"], // Casey Schouten (Lvi), Wessel Keemink (Karlovarsko)
        redCard: ["16"], // Marco Džavoronok (Karlovarsko)
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 22 },
            { number: 2, scoreTeamA: 23, scoreTeamB: 25 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 20 },
            { number: 4, scoreTeamA: 26, scoreTeamB: 28 },
            { number: 5, scoreTeamA: 26, scoreTeamB: 28 }
        ],
        final: true
    },
    {
        id: "2",
        firstTeamId: "3",
        secondTeamID: "4",
        date: new Date(2024, 0, 20, 17, 0), // Jan 20, 2024
        yellowCard: ["24", "36"], // Lukáš Gavenda (Liberec), Jan Muroň (Ostrava)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 21 },
            { number: 2, scoreTeamA: 25, scoreTeamB: 23 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 19 }
        ],
        final: true
    },
    {
        id: "3",
        firstTeamId: "5",
        secondTeamID: "6",
        date: new Date(2024, 1, 1, 19, 0), // Feb 1, 2024
        yellowCard: ["47", "58"], // Josef Benda (Příbram), Lukas Čeketa (Brno)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 18 },
            { number: 2, scoreTeamA: 25, scoreTeamB: 20 },
            { number: 3, scoreTeamA: 23, scoreTeamB: 25 },
            { number: 4, scoreTeamA: 25, scoreTeamB: 22 }
        ],
        final: true
    },
    {
        id: "4",
        firstTeamId: "7",
        secondTeamID: "8",
        date: new Date(2024, 1, 10, 18, 30), // Feb 10, 2024
        yellowCard: ["72", "83"], // Michal Kriško (Budějovice), Jakub Hurtík (Odolena Voda)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 21, scoreTeamB: 25 },
            { number: 2, scoreTeamA: 15, scoreTeamB: 25 },
            { number: 3, scoreTeamA: 24, scoreTeamB: 26 }
        ],
        final: true
    },
    {
        id: "5",
        firstTeamId: "9",
        secondTeamID: "10",
        date: new Date(2024, 1, 15, 17, 0), // Feb 15, 2024
        yellowCard: ["94", "106"], // Lukáš Pastrňák (Ústí), Jakub Muroň (Beskydy)
        redCard: ["94"], // Lukáš Pastrňák (Ústí)
        sets: [
            { number: 1, scoreTeamA: 23, scoreTeamB: 25 },
            { number: 2, scoreTeamA: 25, scoreTeamB: 22 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 20 },
            { number: 4, scoreTeamA: 25, scoreTeamB: 23 }
        ],
        final: true
    },
    {
        id: "6",
        firstTeamId: "2",
        secondTeamID: "3",
        date: new Date(2024, 1, 25, 19, 0), // Feb 25, 2024
        yellowCard: ["13", "25"], // Daniel Pfeffer (Karlovarsko), Martin Demar (Liberec)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 22 },
            { number: 2, scoreTeamA: 25, scoreTeamB: 20 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 18 }
        ],
        final: true
    },
    {
        id: "7",
        firstTeamId: "4",
        secondTeamID: "5",
        date: new Date(2024, 2, 1, 18, 30), // Mar 1, 2024
        yellowCard: ["35", "48"], // Jakub Dvořák (Ostrava), Martin Šábrt (Příbram)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 23 },
            { number: 2, scoreTeamA: 22, scoreTeamB: 25 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 21 },
            { number: 4, scoreTeamA: 25, scoreTeamB: 19 }
        ],
        final: true
    },
    {
        id: "8",
        firstTeamId: "6",
        secondTeamID: "7",
        date: new Date(2024, 2, 5, 17, 0), // Mar 5, 2024
        yellowCard: ["60", "70"], // Matěj Šálek (Brno), Matěj Emmer (Budějovice)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 20 },
            { number: 2, scoreTeamA: 25, scoreTeamB: 18 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 22 }
        ],
        final: true
    },
    {
        id: "9",
        firstTeamId: "8",
        secondTeamID: "9",
        date: new Date(2024, 2, 10, 19, 0), // Mar 10, 2024
        yellowCard: ["84", "95"], // Matyáš Démar (Odolena Voda), David Kubík (Ústí)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 23 },
            { number: 2, scoreTeamA: 23, scoreTeamB: 25 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 21 },
            { number: 4, scoreTeamA: 25, scoreTeamB: 20 }
        ],
        final: true
    },
    {
        id: "10",
        firstTeamId: "10",
        secondTeamID: "1",
        date: new Date(2024, 2, 15, 18, 30), // Mar 15, 2024
        yellowCard: ["104", "3"], // Roman Kozák (Beskydy), Matěj Pastrňák (Lvi)
        redCard: [],
        sets: [
            { number: 1, scoreTeamA: 25, scoreTeamB: 22 },
            { number: 2, scoreTeamA: 25, scoreTeamB: 19 },
            { number: 3, scoreTeamA: 25, scoreTeamB: 21 }
        ],
        final: true
    },

    // Future matches (90 total) - July to October 2025
    // July 2025 (25 matches)
    {
        id: "11",
        firstTeamId: "1",
        secondTeamID: "3",
        date: new Date(2025, 4, 29, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "12",
        firstTeamId: "2",
        secondTeamID: "4",
        date: new Date(2025, 6, 1, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "13",
        firstTeamId: "5",
        secondTeamID: "7",
        date: new Date(2025, 6, 2, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "14",
        firstTeamId: "6",
        secondTeamID: "8",
        date: new Date(2025, 6, 2, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "15",
        firstTeamId: "9",
        secondTeamID: "10",
        date: new Date(2025, 6, 3, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "16",
        firstTeamId: "1",
        secondTeamID: "4",
        date: new Date(2025, 6, 3, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "17",
        firstTeamId: "2",
        secondTeamID: "5",
        date: new Date(2025, 6, 4, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "18",
        firstTeamId: "3",
        secondTeamID: "6",
        date: new Date(2025, 6, 4, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "19",
        firstTeamId: "7",
        secondTeamID: "9",
        date: new Date(2025, 6, 5, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "20",
        firstTeamId: "8",
        secondTeamID: "10",
        date: new Date(2025, 6, 5, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    // More July matches
    {
        id: "35",
        firstTeamId: "1",
        secondTeamID: "5",
        date: new Date(2025, 6, 15, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },

    // August 2025 (25 matches)
    {
        id: "36",
        firstTeamId: "2",
        secondTeamID: "6",
        date: new Date(2025, 7, 1, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "37",
        firstTeamId: "3",
        secondTeamID: "7",
        date: new Date(2025, 7, 1, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "38",
        firstTeamId: "4",
        secondTeamID: "8",
        date: new Date(2025, 7, 2, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "39",
        firstTeamId: "5",
        secondTeamID: "9",
        date: new Date(2025, 7, 2, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "40",
        firstTeamId: "6",
        secondTeamID: "10",
        date: new Date(2025, 7, 3, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "60",
        firstTeamId: "1",
        secondTeamID: "7",
        date: new Date(2025, 7, 15, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },

    // September 2025 (20 matches)
    {
        id: "61",
        firstTeamId: "2",
        secondTeamID: "8",
        date: new Date(2025, 8, 1, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "62",
        firstTeamId: "3",
        secondTeamID: "9",
        date: new Date(2025, 8, 1, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "63",
        firstTeamId: "4",
        secondTeamID: "10",
        date: new Date(2025, 8, 2, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "80",
        firstTeamId: "5",
        secondTeamID: "1",
        date: new Date(2025, 8, 15, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },

    // October 2025 (20 matches)
    {
        id: "81",
        firstTeamId: "6",
        secondTeamID: "2",
        date: new Date(2025, 9, 1, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "82",
        firstTeamId: "7",
        secondTeamID: "3",
        date: new Date(2025, 9, 1, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "83",
        firstTeamId: "8",
        secondTeamID: "4",
        date: new Date(2025, 9, 2, 17, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    },
    {
        id: "100",
        firstTeamId: "9",
        secondTeamID: "5",
        date: new Date(2025, 9, 31, 19, 0),
        yellowCard: [],
        redCard: [],
        sets: [],
        final: false
    }
].sort((a, b) => a.date.getTime() - b.date.getTime()); 
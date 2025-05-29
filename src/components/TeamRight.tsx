import { Button } from "./ui/button";

interface TeamRightProps {
    name: string;
    score: number;
    sets: number;
    TOcount: number;
}

function TeamRight({ name, score = 0, sets = 0, TOcount = 0 }: TeamRightProps) {
    let toClassName;
    if (TOcount === 0) {
        toClassName = "text-chart-2"
    } else if (TOcount === 1) {
        toClassName = "[&>p:first-child]:text-chart-2 [&>p:nth-child(2)]:text-to"
    } else {
        
        toClassName = "text-to"
    }
    return (
        <div className="flex items-center gap-6 max-w-[600px] min-w-[400px] w-full">
            <Button className="bg-primary-foreground text-primary text-7xl pointer-events-none h-28 w-28">
                <p>{score}</p>
            </Button>
            <div>
                <Button className="bg-primary-foreground pointer-events-none h-12 w-12 text-3xl text-primary">
                    {sets}
                </Button>
                <div className={`flex gap-3 pt-3 text-3xl font-bold ${toClassName}`}>
                    <p>T</p>
                    <p>T</p>
                </div>
            </div>
            <p className="text-5xl text-primary-foreground truncate">{name}</p>
        </div>
    );
}

export default TeamRight;

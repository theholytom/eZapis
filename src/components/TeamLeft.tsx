import { Button } from "./ui/button";

interface TeamleftProps {
    name: string;
    score?: number;
    sets?: number;
}

function TeamLeft({ name, score = 25, sets = 3 }: TeamleftProps) {
    return (
        <div className="flex items-center gap-5">
            <p className="text-5xl text-primary-foreground">{name}</p>
            <div className="flex-col justify-center">
                <Button className="bg-primary-foreground pointer-events-none h-12 w-12 text-3xl text-primary">
                    {sets}
                </Button>
                <div className="flex justify-center gap-3 text-chart-2 pt-3 text-3xl">
                    <p>T</p>
                    <p>T</p>
                </div>
            </div>
            <Button className="bg-primary-foreground text-primary text-7xl pointer-events-none h-28 w-28">
                <p>{score}</p>
            </Button>
        </div>
    );
}

export default TeamLeft;

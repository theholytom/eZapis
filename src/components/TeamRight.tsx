import { Button } from "./ui/button"

interface TeamRightProps {
    name: string,
    score?: number
    sets?: number
}

function TeamRight({name, score = 23, sets = 0}: TeamRightProps) {
    return (
        <div className="flex items-center gap-5" >
            <Button className="bg-primary-foreground text-primary text-7xl pointer-events-none h-28 w-28">
                <p>{score}</p>
            </Button>
            <div className="flex-col justify-center">
                <Button className="bg-primary-foreground pointer-events-none h-12 w-12 text-3xl text-primary">
                    {sets}
                </Button>
                <div className="flex justify-center gap-3 text-chart-2 pt-3 text-3xl">
                    <p>T</p>
                    <p>T</p>
                </div>
            </div>
            <p className="text-5xl text-primary-foreground">{name}</p>
        </div>
    )
}

export default TeamRight
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"; // Assuming cn utility is available

interface Props {
    className?: string;
    onScoreIncrement?: () => void;
    onScoreDecrement?: () => void;
    onTOincrement?: () => void;
}

function EditButtons({
    className = "",
    onScoreIncrement,
    onScoreDecrement,
    onTOincrement
}: Props) {
    return (
        <section
            className={cn(
                "bg-primary flex flex-col gap-10 pt-20 [&>button]:bg-primary-foreground [&>button]:text-primary [&>button]:text-2xl [&>button]:font-bold [&>button]:hover:bg-secondary [&>button]:hover:text-primary-foreground [&>button]:w-[150px] [&>button]:min-h-[100px] [&>button]:whitespace-normal",
                className
            )}
        >
            <Button onClick={onScoreIncrement}>+ bod</Button>
            <Button onClick={onScoreDecrement}>- bod</Button>
            <Button onClick={onTOincrement}>Time-out</Button>
            <Button>Střídání</Button>
            <Button>Žlutá karta</Button>
            <Button>Červená karta</Button>
        </section>
    );
}

export default EditButtons;

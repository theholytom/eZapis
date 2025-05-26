import SwitchSidesButton from "@/components/icons/SwitchSidesButton";
import ScoreTable from "@/components/ScoreTable";
import TeamLeft from "@/components/TeamLeft";
import TeamRight from "@/components/TeamRight";

const team1 = "Lvi Praha"
const team2 = "Karlovarsko"

function MatchEditPage() {
    return (
        <main className="bg-primary h-screen">
            <SwitchSidesButton />
            <div className="flex items-center gap-5 justify-center">
                <TeamLeft name={team1} />
                <p className="text-5xl text-primary-foreground">:</p>
                <TeamRight name={team2} />
            </div>
            <ScoreTable team1={team1} team2={team2} />
        </main>
    );
}

export default MatchEditPage;

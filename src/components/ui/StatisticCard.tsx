import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface StaticticCardProps {
    title: string;
    value: number
}

export default function StaticticCard({ title, value }: StaticticCardProps) {
    return (
        <Card className="bg-chart-1 text-primary-foreground flex-column min-w-[300px]">
            <CardHeader>
                <CardTitle className="whitespace-nowrap">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>{value}</CardContent>
        </Card>
    );
}

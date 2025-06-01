import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatisticCardProps {
    title: string;
    value: number;
}

export default function StatisticCard({ title, value }: StatisticCardProps) {
    return (
        <Card className="bg-chart-1 text-primary-foreground flex-column w-[300px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{value}</CardContent>
        </Card>
    );
}

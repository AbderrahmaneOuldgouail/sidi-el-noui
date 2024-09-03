import { Card, CardContent } from "@/Components/ui/card";

export default function PlaceholderContent({ children, className = "" }) {
    return (
        <Card className="rounded-lg border-none mt-2 ">
            <CardContent className={"p-6 " + className}>{children}</CardContent>
        </Card>
    );
}


import { Card, CardContent } from "@/Components/ui/card";

export default function PlaceholderContent({children}) {
    return (
        <Card className="rounded-lg border-none mt-6">
            <CardContent className="p-6">
                    {children}
            </CardContent>
        </Card>
    );
}

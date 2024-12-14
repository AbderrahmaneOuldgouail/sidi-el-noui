import React from "react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import CategoryDialog from "./CategoryDialog";
import DeleteeDialog from "../Shared/DeleteDialog";
import { useTranslation } from "react-i18next";

export default function CategoryCard({ category }) {
    const {t} = useTranslation("translation", {keyPrefix: "features.form"})
    return (
        <Card className="rounded-lg border-none mt-6 bg-muted">
            <CardContent className="p-6">
                <div className="bg-card p-2 rounded">
                    {category.categorie_name}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <CategoryDialog mode="edit" category={category} />
                <DeleteeDialog
                    id={category.categorie_id}
                    url={"categorys.destroy"}
                    message={t("deleteCategorieDescreption")}
                />
            </CardFooter>
        </Card>
    );
}

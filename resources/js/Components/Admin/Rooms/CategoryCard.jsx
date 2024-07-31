import React from 'react'
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import CategoryDialog from './CategoryDialog';
import DeleteeDialog from '../Shared/DeleteDialog';


export default function CategoryCard({category}) {
  return (
      <Card
          className="rounded-lg border-none mt-6 bg-muted"
          key={category.categorie_id}
      >
          <CardContent className="p-6">
              <div className="bg-card p-2 rounded">{category.categorie_name}</div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
              <CategoryDialog mode="edit" category={category} />
              <DeleteeDialog
                  id={category.categorie_id}
                  url={"categorys.destroy"}
                  message={
                      "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque caractéristique de cette categorie va supprimé"
                  }
              />
          </CardFooter>
      </Card>
  );
}

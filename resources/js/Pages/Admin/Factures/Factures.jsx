import React from 'react'
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

export default function Factures() {
  return (
      <AdminPanelLayout>
          <Head title="Factures" />
          <PageHeading title={"Factures"} />
          <PlaceholderContent>Factures </PlaceholderContent>
      </AdminPanelLayout>
  );
}

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/Components/ui/pagination";
import { router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";

interface DataTablePaginationProps {
    tabledata: any;
}

export function DataTablePagination({ tabledata }: DataTablePaginationProps) {
    const { t } = useTranslation("translation", {
        keyPrefix: "components.dataTable.pagination",
    });
    const navigateTo = (url) => {
        router.visit(url, {
            preserveState: true,
            preserveScroll: true,
        });
    };
    return (
        <div className="flex items-center justify-between px-2 mt-2">
            <div className="flex text-sm text-muted-foreground">
                {tabledata.to - tabledata.from + 1} / {tabledata.total}{" "}
                {t("footer")}
            </div>
            <div className="flex items-center space-x-2">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!tabledata.prev_page_url}
                                onClick={() =>
                                    navigateTo(tabledata.first_page_url)
                                }
                            >
                                <span className="sr-only">
                                    Go to first page
                                </span>
                                <DoubleArrowLeftIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!tabledata.prev_page_url}
                                onClick={() =>
                                    navigateTo(tabledata.prev_page_url)
                                }
                            >
                                <span className="sr-only">
                                    Go to previous page
                                </span>
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                        {tabledata.links.slice(1, -1).map((link) => (
                            <PaginationItem key={link.label}>
                                <Button
                                    variant={link.active ? "outline" : "ghost"}
                                    className="h-8 w-8 p-0"
                                    onClick={() => navigateTo(link.url)}
                                >
                                    {link.label}
                                </Button>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!tabledata.next_page_url}
                                onClick={() =>
                                    navigateTo(tabledata.next_page_url)
                                }
                            >
                                <span className="sr-only">Go to next page</span>
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!tabledata.next_page_url}
                                onClick={() =>
                                    navigateTo(tabledata.last_page_url)
                                }
                            >
                                <span className="sr-only">Go to last page</span>
                                <DoubleArrowRightIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

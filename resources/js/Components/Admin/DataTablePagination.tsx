import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
    CheckIcon,
} from "@radix-ui/react-icons";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/Components/ui/pagination";

import { Link, router } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectTrigger } from "@/Components/ui/select";
import React from "react";
import { useTrans } from "@/Hooks/useTrans";

interface DataTablePaginationProps {
    tabledata: any;
}

export function DataTablePagination({ tabledata }: DataTablePaginationProps) {
    function getMultiplesOfFive(number: number) {
        const multiples = [];

        for (let i = 5; i <= number; i += 5) {
            multiples.push(i);
        }

        if (number % 5 !== 0) {
            multiples.push(number);
        }

        return multiples;
    }
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
                {useTrans("ligne(s) afficher")}
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
            {/* <div className="flex items-center justify-between space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">
                        {useTrans("Lignes par page")}
                    </p>
                    <Select value={`${tabledata.per_page}`}>
                        <SelectTrigger className="h-8 w-[70px]">
                            <p>{tabledata.per_page} </p>
                        </SelectTrigger>
                        <SelectContent side="top">
                            {getMultiplesOfFive(tabledata.total).map(
                                (pageSize) => (
                                    <Link
                                        as="button"
                                        key={pageSize}
                                        className="relative flex justify-between w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                        href={route("rooms.index", {
                                            pages: pageSize,
                                        })}
                                    >
                                        {pageSize}
                                        {pageSize == tabledata.per_page && (
                                            <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                                                <CheckIcon className="h-4 w-4" />
                                            </span>
                                        )}
                                    </Link>
                                )
                            )}
                        </SelectContent>
                    </Select>
                </div>
            </div> */}
        </div>
    );
}

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

export default function MobilePagination({ data }) {
    const navigateTo = (url) => {
        router.visit(url, {
            preserveState: true,
            preserveScroll: true,
        });
    };
    return (
        <div className="flex items-center justify-start gap-16 px-2 mt-2">
            <div className="flex text-sm text-muted-foreground">
                {data.to - data.from + 1} of {data.total}{" "}
            </div>
            <div className="flex items-center space-x-2">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!data.prev_page_url}
                                onClick={() => navigateTo(data.first_page_url)}
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
                                disabled={!data.prev_page_url}
                                onClick={() => navigateTo(data.prev_page_url)}
                            >
                                <span className="sr-only">
                                    Go to previous page
                                </span>
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                        {data.links
                            .slice(1, -1)
                            .filter(
                                (link, index, array) =>
                                    link.active ||
                                    (index > 0 && array[index - 1].active)
                            )
                            .map((link) => (
                                <PaginationItem key={link.label}>
                                    <Button
                                        variant={
                                            link.active ? "outline" : "ghost"
                                        }
                                        className="h-8 w-8 p-0"
                                        onClick={() => navigateTo(link.url)}
                                    >
                                        <span className="sr-only">
                                            Go to next page
                                        </span>
                                        {link.label}
                                    </Button>
                                </PaginationItem>
                            ))}
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!data.next_page_url}
                                onClick={() => navigateTo(data.next_page_url)}
                            >
                                <span className="sr-only">Go to next page</span>
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                disabled={!data.next_page_url}
                                onClick={() => navigateTo(data.last_page_url)}
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

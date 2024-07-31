import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full font-medium me-2 px-3.5 py-0.5 text-xs ",
    {
        variants: {
            variant: {
                default: "border-gray-600 border-2 bg-gray-100 text-gray-600 ",
                success:
                    "border-green-600 border-2 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
                danger: "border-red-600 border-2  bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
                warning:
                    "border-amber-500 border-2 bg-amber-100 text-amber-500 dark:bg-yellow-900 dark:text-yellow-300",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

function Badge({ className, variant, children, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {children}
        </div>
    );
}

export { Badge, badgeVariants };

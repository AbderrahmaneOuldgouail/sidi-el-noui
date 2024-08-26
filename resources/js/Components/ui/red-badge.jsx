import * as React from "react";

function RedBeadge({ className }) {
    return (
        <span
            className={
                "w-2 h-2 bg-destructive rounded-full absolute top-0  " +
                className
            }
        ></span>
    );
}

export { RedBeadge };

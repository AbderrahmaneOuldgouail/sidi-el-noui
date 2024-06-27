import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
      <textarea
          className={cn(
              "flex min-h-[60px] w-full rounded-md border border-input bg-transparent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary dark:focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className
          )}
          ref={ref}
          {...props}
      />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }

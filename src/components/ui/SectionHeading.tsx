import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    subtitle?: string;
    alignment?: "left" | "center" | "right";
}

export function SectionHeading({
    title,
    subtitle,
    alignment = "center",
    className,
    ...props
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-10 lg:mb-16 flex flex-col gap-3",
                {
                    "items-start text-left": alignment === "left",
                    "items-center text-center": alignment === "center",
                    "items-end text-right": alignment === "right",
                },
                className
            )}
        >
            <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                {...props}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="max-w-[700px] text-muted-foreground md:text-lg text-balance">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    containerClassName?: string;
}

export function SectionContainer({
    children,
    className,
    containerClassName,
    ...props
}: SectionContainerProps) {
    return (
        <section className={cn("w-full py-12 md:py-20 lg:py-24", className)} {...props}>
            <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
                {children}
            </div>
        </section>
    );
}

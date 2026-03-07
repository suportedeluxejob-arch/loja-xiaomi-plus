import React from "react";
import { cn } from "@/lib/utils";

interface FeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function FeatureItem({
    icon,
    title,
    description,
    className,
    ...props
}: FeatureItemProps) {
    return (
        <div
            className={cn("flex flex-col items-center text-center gap-4", className)}
            {...props}
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary shadow-inner">
                {icon}
            </div>
            <div>
                <h4 className="mb-2 text-lg font-bold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}

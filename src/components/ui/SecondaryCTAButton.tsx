import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface SecondaryCTAButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    asChild?: boolean;
}

export function SecondaryCTAButton({
    children,
    className,
    icon,
    ...props
}: SecondaryCTAButtonProps) {
    return (
        <Button
            variant="outline"
            size="lg"
            className={cn("text-base font-semibold", className)}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </Button>
    );
}

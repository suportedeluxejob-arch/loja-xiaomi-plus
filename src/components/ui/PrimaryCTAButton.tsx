import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface PrimaryCTAButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    asChild?: boolean;
}

export function PrimaryCTAButton({
    children,
    className,
    icon = <MessageCircle className="w-5 h-5 mr-2" />,
    ...props
}: PrimaryCTAButtonProps) {
    return (
        <Button
            variant="primary"
            size="lg"
            className={cn("text-base font-bold shadow-lg hover:shadow-primary/20", className)}
            {...props}
        >
            {icon}
            {children}
        </Button>
    );
}

import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    author: string;
    text: string;
    rating?: number;
    date?: string;
}

export function ReviewCard({
    author,
    text,
    rating = 5,
    date,
    className,
    ...props
}: ReviewCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 rounded-2xl border border-white/10 bg-secondary/30 p-6 shadow-sm transition-colors hover:bg-secondary/50",
                className
            )}
            {...props}
        >
            <div className="flex text-[#FABB05]">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={cn("h-4 w-4", i < rating ? "fill-current" : "text-muted")}
                    />
                ))}
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                "{text}"
            </p>
            <div className="flex items-center justify-between mt-2">
                <span className="font-semibold text-sm">{author}</span>
                {date && <span className="text-xs text-muted-foreground">{date}</span>}
            </div>
        </div>
    );
}

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    author: string;
    text: string;
    rating?: number;
    date?: string;
    imageSrc?: string;
}

export function ReviewCard({
    author,
    text,
    rating = 5,
    date,
    imageSrc,
    className,
    ...props
}: ReviewCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 h-full",
                className
            )}
            {...props}
        >
            <div className="flex gap-1 text-[#f5c643]">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={cn("h-[14px] w-[14px]", i < rating ? "fill-current" : "text-gray-200")}
                    />
                ))}
            </div>
            <p className="flex-1 text-[12px] font-medium leading-[1.6] text-gray-500">
                {text}
            </p>

            <div className="pt-4 flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    {imageSrc ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 relative shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]">
                            <Image src={imageSrc} alt={author} fill className="object-cover" />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                            <span className="text-gray-400 font-bold text-[10px] tracking-tighter shrink-0">{author.substring(0, 2).toUpperCase()}</span>
                        </div>
                    )}
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-gray-900 text-[13px] leading-tight">{author}</span>
                        <span className="text-[10px] text-gray-400 font-medium leading-none mt-0.5">Cliente Verificado</span>
                    </div>
                </div>
                <div className="text-[10px] font-medium text-gray-400 self-end mb-1">
                    Ver mais
                </div>
            </div>
        </div>
    );
}

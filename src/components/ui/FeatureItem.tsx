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
            className={cn("flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5", className)}
            {...props}
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff5eb] text-[#ff6900] mb-4">
                {icon}
            </div>
            <div>
                <h4 className="mb-2 text-[15px] font-bold text-gray-900 leading-tight">{title}</h4>
                <p className="text-[12px] font-medium text-gray-500 leading-relaxed max-w-[220px] mx-auto text-balance">{description}</p>
            </div>
        </div>
    );
}

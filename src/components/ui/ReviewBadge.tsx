import React from "react";
import { Star } from "lucide-react";

export function ReviewBadge() {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            <div className="flex text-[#FABB05]">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
            </div>
            <span>4.8/5 no Google com mais de 190 avaliações</span>
        </div>
    );
}

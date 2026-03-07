import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    id: string;
    slug: string;
    brand: string;
    title: string;
    model: string;
    shortDescription: string;
    price?: number;
    imageFallback: string; // Temporary since no external images
    className?: string;
}

export function ProductCard({
    slug,
    brand,
    title,
    shortDescription,
    price,
    imageFallback,
    className,
}: ProductCardProps) {
    // Dynamic soft backgrounds based on device
    let imageBg = "from-[#f8f9fb] to-[#f0f3f8]";
    if (title.toLowerCase().includes("poco")) imageBg = "from-[#fdfcf6] to-[#f4ead2]";
    else if (title.toLowerCase().includes("iphone")) imageBg = "from-[#f8f9fd] to-[#e4e7f3]";
    else if (title.toLowerCase().includes("redmi note 11")) imageBg = "from-[#f4f6f9] to-[#dfe3ea]";
    else if (brand.toLowerCase().includes("xiaomi")) imageBg = "from-[#fffcf9] to-[#fcecd7]";

    return (
        <div
            className={cn(
                "group flex h-full flex-col overflow-hidden rounded-[1.3rem] border border-gray-100/80 bg-white shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5",
                className
            )}
        >
            <Link href={`/ produtos / ${slug} `} className="p-2 pb-0 block shrink-0">
                <div className={cn("relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1rem] bg-gradient-to-br", imageBg)}>
                    {/* Placeholder image representation */}
                    <div className={`relative z - 10 h - [80 %] w - [65 %] rounded - lg transition - transform duration - 500 group - hover: scale - 105 shadow - md ${imageFallback} `} />
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-4 pt-4">
                <Link href={`/ produtos / ${slug} `} className="focus-visible:outline-none flex-1 flex flex-col">
                    <h3 className="text-[13px] font-bold text-gray-900 leading-[1.3] group-hover:text-[#ff6900] transition-colors line-clamp-2 mb-2 pr-1">
                        {title}
                    </h3>
                    <p className="text-[10px] font-medium text-gray-400 line-clamp-2 leading-relaxed pr-2">
                        {shortDescription}
                    </p>
                </Link>

                <div className="mt-4 pt-1 pb-1">
                    <span className="text-[18px] sm:text-[20px] font-black text-[#ff6900] tracking-tight leading-none">
                        {price ? new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(price) : "Sob Consulta"}
                    </span>
                </div>
            </div>
        </div>
    );
}

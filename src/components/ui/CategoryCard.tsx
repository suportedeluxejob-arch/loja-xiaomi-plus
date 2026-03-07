import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    title: string;
    description: string;
    href: string;
    imageFallback: string; // Since we don't have images yet, we'll use a CSS gradient/color fallback
}

export function CategoryCard({
    title,
    description,
    href,
    imageFallback,
}: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group relative flex h-[300px] w-full flex-col justify-end overflow-hidden rounded-3xl bg-secondary transition-all hover:shadow-2xl hover:-translate-y-1"
        >
            <div
                className={`absolute inset-0 ${imageFallback}`}
            />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-opacity group-hover:from-black/90">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/80 line-clamp-2 mb-4">{description}</p>

                <div className="flex items-center text-primary font-medium opacity-0 transform translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    Ver modelos <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </div>
        </Link>
    );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
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
    return (
        <div
            className={cn(
                "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-secondary/20 transition-all hover:border-primary/30 hover:bg-secondary/40 hover:shadow-xl",
                className
            )}
        >
            <Link href={`/produtos/${slug}`} className="relative block aspect-[4/5] w-full overflow-hidden bg-white/5 p-6">
                {/* Placeholder image representation */}
                <div className={`h-full w-full rounded-xl transition-transform duration-500 group-hover:scale-105 ${imageFallback}`} />

                <div className="absolute top-4 left-4 rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold backdrop-blur-md">
                    {brand}
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-5">
                <Link href={`/produtos/${slug}`} className="focus-visible:outline-none">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {title}
                    </h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {shortDescription}
                </p>

                <div className="flex items-end justify-between gap-4 mt-auto">
                    {price ? (
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">A partir de</span>
                            <span className="text-lg font-bold text-primary">
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(price)}
                            </span>
                        </div>
                    ) : (
                        <div className="text-sm font-medium text-muted-foreground">
                            Sob consulta
                        </div>
                    )}

                    <Button variant="primary" size="sm" asChild className="shrink-0 gap-2 font-bold w-full sm:w-auto">
                        <a href={`https://wa.me/5521979544879?text=Olá,%20tenho%20interesse%20no%20${encodeURIComponent(title)}.%20Pode%20me%20passar%20mais%20informações?`} target="_blank" rel="noreferrer">
                            <MessageCircle className="h-4 w-4" />
                            <span className="hidden sm:inline">Perguntar</span>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

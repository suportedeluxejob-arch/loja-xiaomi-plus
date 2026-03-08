"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { Button } from "./Button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
    product: Product;
    className?: string;
}

export function ProductCard({
    product,
    className,
}: ProductCardProps) {
    const { slug, brand, title, shortDescription, images } = product;
    const imageFallback = images[0];
    const { addToCart } = useCart();

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
            <Link href={`/produtos/${slug}`} className="p-2 pb-0 block shrink-0">
                <div className={cn("relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1rem] bg-gradient-to-br", imageBg)}>
                    {/* Representação da imagem real ou placeholder CSS */}
                    {imageFallback.startsWith('/') ? (
                        <Image src={imageFallback} alt={title || "Produto"} fill className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                        <div className={`relative z-10 h-[80%] w-[65%] rounded-lg transition-transform duration-500 group-hover:scale-105 shadow-md ${imageFallback}`} />
                    )}
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-4 pt-4">
                <Link href={`/produtos/${slug}`} className="focus-visible:outline-none flex-1 flex flex-col">
                    <h3 className="text-[14px] font-bold text-gray-900 leading-[1.3] group-hover:text-[#ff6900] transition-colors line-clamp-2 mb-2 pr-1">
                        {title}
                    </h3>
                    <p className="text-[11px] font-medium text-gray-400 line-clamp-2 leading-relaxed pr-2">
                        {shortDescription}
                    </p>
                </Link>

                <div className="mt-4 pt-1 z-20">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="relative w-full overflow-hidden rounded-xl bg-[#ff6900] px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_14px_0_rgba(255,105,0,0.39)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(255,105,0,0.23)] hover:bg-[#ff8000] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group/btn"
                    >
                        <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:-rotate-12" />
                        <span className="relative z-10">Adicionar ao Carrinho</span>

                        {/* Shine effect */}
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover/btn:duration-1000 group-hover/btn:[transform:skew(-12deg)_translateX(150%)]">
                            <div className="relative h-full w-8 bg-white/20" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

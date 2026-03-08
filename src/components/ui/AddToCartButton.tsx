"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className="group/btn relative w-full overflow-hidden rounded-2xl bg-[#ff6900] px-6 py-4 text-base font-extrabold text-white shadow-[0_8px_30px_-4px_rgba(255,105,0,0.5)] transition-all duration-300 hover:shadow-[0_12px_30px_-4px_rgba(255,105,0,0.6)] hover:bg-[#ff8000] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
        >
            <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:-rotate-12" />
            <span className="relative z-10 tracking-wide">Adicionar ao Carrinho</span>

            {/* Efeito de Reflexo / Shine */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover/btn:duration-1000 group-hover/btn:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-12 bg-white/20" />
            </div>
        </button>
    );
}

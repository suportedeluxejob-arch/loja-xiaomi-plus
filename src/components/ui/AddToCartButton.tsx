"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { PrimaryCTAButton } from "./PrimaryCTAButton";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    return (
        <PrimaryCTAButton
            onClick={() => addToCart(product)}
            className="w-full text-lg h-14"
            icon={false}
        >
            <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Adicionar ao Carrinho</span>
            </div>
        </PrimaryCTAButton>
    );
}

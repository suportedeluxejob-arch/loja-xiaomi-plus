"use client";

import React, { useEffect } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "./Button";
import Image from "next/image";

export function CartDrawer() {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        let message = "Olá! Tenho interesse nos seguintes itens:\n\n";
        cartItems.forEach(item => {
            message += `- ${item.quantity}x ${item.title}\n`;
        });
        message += "\nGostaria de saber as condições de pagamento e a disponibilidade.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5521979544879?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                        <ShoppingBag className="w-5 h-5 text-[#ff6900]" />
                        Seu Carrinho
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-400 gap-4 mt-10">
                            <ShoppingBag className="w-16 h-16 opacity-20" />
                            <p className="text-lg font-medium text-gray-500">Seu carrinho está vazio</p>
                            <p className="text-sm">Encontre os melhores smartphones e adicione-os aqui.</p>
                            <Button
                                variant="primary"
                                className="mt-4"
                                onClick={() => setIsCartOpen(false)}
                            >
                                Continuar Navegando
                            </Button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-gray-50/50">
                                <div className="relative w-20 h-20 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden p-2">
                                    {item.images[0].startsWith("/") ? (
                                        <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
                                    ) : (
                                        <div className={`w-full h-full rounded-md ${item.images[0]}`} />
                                    )}
                                </div>
                                <div className="flex flex-col flex-1 justify-between">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="font-semibold text-sm leading-tight text-gray-800 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors p-1"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-2 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm font-semibold w-4 text-center text-gray-800">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="border-t border-gray-100 p-6 bg-white flex flex-col gap-4">
                        <Button
                            variant="primary"
                            className="w-full py-6 text-lg rounded-2xl cursor-pointer shadow-[0_8px_30px_-4px_rgba(255,105,0,0.5)] transition-all duration-300 hover:shadow-[0_12px_30px_-4px_rgba(255,105,0,0.6)] hover:bg-[#ff8000] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
                            onClick={handleCheckout}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                            Finalizar Pedido no WhatsApp
                        </Button>
                        <button
                            className="cursor-pointer text-sm font-medium text-gray-400 hover:text-gray-700 mx-auto transition-colors"
                            onClick={clearCart}
                        >
                            Esvaziar carrinho
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

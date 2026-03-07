"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Smartphone, Search, User, ShoppingCart } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
    { name: "Lançamentos", href: "/produtos?categoria=lancamentos" },
    { name: "Série X", href: "/produtos?categoria=seriex" },
    { name: "Acessórios", href: "/produtos?categoria=acessorios" },
    { name: "Preços de atacado", href: "/produtos?categoria=atacado" },
    { name: "Procon", href: "/procon" },
    { name: "Dúvidas ou ameaças", href: "/faq" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans flex flex-col">
            {/* Row 1: Top Thin Promo Banner */}
            <div className="w-full bg-[#ff6900] text-white py-1.5 flex items-center justify-center shadow-[inset_0_-1px_0_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-4 flex justify-center items-center text-[10px] sm:text-xs">
                    <span className="font-bold tracking-widest text-center uppercase text-white/95">
                        Aparelhos Xiaomi com 18 meses de garantia, a <span className="text-white font-black underline decoration-white/40 underline-offset-2">maior garantia do Brasil</span> para Xiaomi
                    </span>
                </div>
            </div>

            {/* Row 2: Logo and Actions */}
            <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <Image
                        src="/xiaomi-plus-logo.png"
                        alt="Xiaomi Plus Logo"
                        width={44}
                        height={44}
                        className="rounded-full shadow-sm drop-shadow-sm"
                        priority
                    />
                    <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900">
                        XIAOMI PLUS <span className="font-light text-gray-500 hidden sm:inline-block">LOJA ONLINE</span>
                    </span>
                </Link>

                {/* Right Actions Section */}
                <div className="flex items-center gap-4 sm:gap-6 text-gray-600">
                    <button className="hover:text-[#ff6900] transition-colors">
                        <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button className="hover:text-[#ff6900] transition-colors hidden sm:block">
                        <User className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <a href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus" target="_blank" rel="noreferrer" className="relative hover:text-[#ff6900] transition-colors">
                        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center bg-[#ff6900] text-white text-[10px] w-4 h-4 rounded-full font-bold">0</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="flex md:hidden ml-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Row 3: Navigation Links (Desktop) */}
            <nav className="hidden md:flex justify-center w-full border-b border-gray-100 pb-3 h-10">
                <ul className="flex gap-8 text-sm font-semibold text-gray-500">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="hover:text-[#ff6900] transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Nav Drawer */}
            {isOpen && (
                <div className="container md:hidden px-4 pb-4 bg-white border-b border-gray-100 shadow-inner">
                    <nav className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#ff6900]"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px bg-gray-100 w-full my-1" />
                        <Button variant="primary" className="w-full mt-2 rounded-xl h-12 text-md font-bold" asChild>
                            <a href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus" target="_blank" rel="noreferrer">
                                Fale com Consultor Online
                            </a>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

"use client";

import React from "react";
import Link from "next/link";
import { Menu, X, Smartphone } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
    { name: "Início", href: "/" },
    { name: "Smartphones", href: "/produtos" },
    { name: "Acessórios", href: "/produtos?categoria=acessorios" },
    { name: "Contato", href: "/contato" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Xiaomi Plus</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex">
                    <Button variant="primary" size="sm" asChild>
                        <a href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus" target="_blank" rel="noreferrer">
                            Falar com Vendedor
                        </a>
                    </Button>
                </div>
                <button
                    className="flex md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            {/* Mobile Nav */}
            {isOpen && (
                <div className="container md:hidden px-4 pb-4 bg-background border-b border-white/10">
                    <nav className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" className="w-full mt-2" asChild>
                            <a href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus" target="_blank" rel="noreferrer">
                                Falar com Vendedor
                            </a>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

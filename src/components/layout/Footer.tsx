import React from "react";
import Link from "next/link";
import { Smartphone, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-white/5 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                                <Smartphone className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">Xiaomi Plus</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm">
                            Os melhores smartphones Xiaomi, Realme e Apple originais, lacrados e com garantia. Atendimento de confiança em Santa Cruz.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href="https://instagram.com/xiaomiplus"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-lg">Contato e Loja</h3>
                        <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <li className="flex gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                <span>
                                    R. Gen. Olímpio, 120 - loja B<br />
                                    Santa Cruz, Rio de Janeiro - RJ<br />
                                    23550-242
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-primary" />
                                <span>(21) 97954-4879</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                                <span>WhatsApp Disponível</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-lg">Links Úteis</h3>
                        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/produtos" className="hover:text-primary transition-colors">
                                    Catálogo de Smartphones
                                </Link>
                            </li>
                            <li>
                                <Link href="/produtos?categoria=acessorios" className="hover:text-primary transition-colors">
                                    Acessórios
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-primary transition-colors">
                                    Fale Conosco
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Xiaomi Plus. Todos os direitos reservados.</p>
                    <p>Loja especializada em smartphones em Santa Cruz, RJ.</p>
                </div>
            </div>
        </footer>
    );
}

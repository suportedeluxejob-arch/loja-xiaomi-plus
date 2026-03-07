import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Smartphone, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/xiaomi-plus-logo.png"
                                alt="Xiaomi Plus Logo"
                                width={44}
                                height={44}
                                className="rounded-full shadow-sm"
                            />
                            <span className="font-bold text-gray-900 text-xl tracking-tight">Xiaomi Plus</span>
                        </Link>
                        <p className="text-gray-500 font-medium text-sm max-w-xs leading-relaxed mt-2">
                            Pela sua rua e praça, agora também a partir do site! Smartphones importados com garantia de Santa Cruz.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href="https://instagram.com/xiaomiplus"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#ff6900] hover:bg-[#fff5eb] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="h-5 w-5 fill-current" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-gray-900 text-lg">Contato e Loja</h3>
                        <ul className="flex flex-col gap-5 text-sm text-gray-600 font-medium">
                            <li className="flex gap-4 items-start">
                                <MapPin className="h-5 w-5 shrink-0 text-[#ff6900] mt-0.5" />
                                <span className="leading-relaxed">
                                    Clínicas/Espaço Bem Estar, sala X<br />
                                    Santa Cruz, Rio de Janeiro - RJ<br />
                                    Cep da região.
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="h-5 w-5 shrink-0 text-[#ff6900]" />
                                <span>(21) 97954-4879 <br /><span className="text-xs text-gray-400">WhatsApp disponível</span></span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-gray-900 text-lg">Links Úteis</h3>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                            <li>
                                <Link href="/" className="hover:text-[#ff6900] transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/produtos" className="hover:text-[#ff6900] transition-colors">
                                    Smartphones em Destaque
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-[#ff6900] transition-colors">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="/termos" className="hover:text-[#ff6900] transition-colors">
                                    Visão da Empresa
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400">
                    <p>© {new Date().getFullYear()} Xiaomi Plus, Corp. All rights reserved.</p>
                    <p>O Design não é apenas como parece. O Design é como funciona.</p>
                </div>
            </div>
        </footer>
    );
}

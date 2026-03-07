import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./Button";

export function FinalCTASection() {
    return (
        <section className="bg-[#f0f2f5] py-20 md:py-32 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-8 text-balance">
                    Quer saber o preço do seu próximo smartphone?
                </h2>
                <p className="text-gray-600 md:text-lg mb-12 max-w-xl text-balance font-medium leading-relaxed">
                    Fale com nossa equipe agora mesmo e garanta os melhores preços mediante nossa condição de Santa Cruz.
                </p>

                <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#1fb355] text-white rounded-full px-8 py-7 text-lg font-bold shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-1 group"
                >
                    <a
                        href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3"
                    >
                        <MessageCircle className="w-6 h-6 fill-current" />
                        Mandar Mensagem via WhatsApp
                    </a>
                </Button>
            </div>
        </section>
    );
}

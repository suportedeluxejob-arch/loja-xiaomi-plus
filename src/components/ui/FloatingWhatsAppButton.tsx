import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
    return (
        <a
            href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-110 hover:bg-[#20bd5a] transition-all"
            aria-label="Falar conosco no WhatsApp"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    );
}

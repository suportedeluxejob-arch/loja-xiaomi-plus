import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export function MobileStickyActions() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center bg-secondary md:hidden sm:hidden xs:flex border-t border-white/10 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
            <a
                href="tel:+5521979544879"
                className="flex h-14 flex-1 items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold border-r border-white/10"
            >
                <Phone className="h-5 w-5" />
                <span className="text-sm">Ligar</span>
            </a>
            <a
                href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground font-bold"
            >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">WhatsApp</span>
            </a>
        </div>
    );
}

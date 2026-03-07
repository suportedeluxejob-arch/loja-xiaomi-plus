import React from "react";
import { MapPin, Clock, ShieldCheck, Truck } from "lucide-react";

export function StoreInfoBlock() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <MapPin className="h-8 w-8 text-primary shrink-0" />
                <div>
                    <h4 className="font-bold mb-1">Loja Física</h4>
                    <p className="text-sm text-muted-foreground">Santa Cruz, RJ</p>
                </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                <div>
                    <h4 className="font-bold mb-1">Garantia</h4>
                    <p className="text-sm text-muted-foreground">Produtos Originais</p>
                </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <Truck className="h-8 w-8 text-primary shrink-0" />
                <div>
                    <h4 className="font-bold mb-1">Entrega</h4>
                    <p className="text-sm text-muted-foreground">Rápida na Região</p>
                </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <Clock className="h-8 w-8 text-primary shrink-0" />
                <div>
                    <h4 className="font-bold mb-1">Atendimento</h4>
                    <p className="text-sm text-muted-foreground">Rápido via WhatsApp</p>
                </div>
            </div>
        </div>
    );
}

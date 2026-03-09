import React from "react";
import Image from "next/image";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "./SectionHeading";
import {
    Accessibility,
    Truck,
    Wrench,
    HeartHandshake,
    Clock,
    CreditCard,
    SmartphoneNfc
} from "lucide-react";

export function AboutUsSection() {
    return (
        <SectionContainer id="sobre-nos" className="bg-white">
            <SectionHeading
                title="Sobre a Xiaomi Plus"
                subtitle="Conheça nossa identidade, nosso espaço e as comodidades que oferecemos a você."
            />

            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                    <Image
                        src="/loja-1.jpg"
                        alt="Fachada da loja Xiaomi Plus"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                    <Image
                        src="/loja-2.jpg"
                        alt="Atendimento e equipe Xiaomi Plus"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                    <Image
                        src="/loja-3.jpg"
                        alt="Interior da loja e produtos Xiaomi Plus"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Business Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">

                {/* Acessibilidade */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                        <Accessibility className="w-6 h-6 text-[#ff6900]" />
                        <h3 className="font-bold text-lg text-gray-900">Acessibilidade</h3>
                    </div>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] mt-1.5 shrink-0" />
                            Entrada com acessibilidade para pessoas em cadeira de rodas
                        </li>
                    </ul>
                </div>

                {/* Serviços */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                        <Truck className="w-6 h-6 text-[#ff6900]" />
                        <h3 className="font-bold text-lg text-gray-900">Opções de Serviço</h3>
                    </div>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] mt-1.5 shrink-0" />
                            Entrega / Delivery
                        </li>
                        <li className="flex items-start gap-2">
                            <Wrench className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                            Serviços de reparos e assistência técnica
                        </li>
                    </ul>
                </div>

                {/* Público */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                        <HeartHandshake className="w-6 h-6 text-[#ff6900]" />
                        <h3 className="font-bold text-lg text-gray-900">Nosso Público</h3>
                    </div>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] mt-1.5 shrink-0" />
                            Empresa que acolhe a comunidade LGBTQ+
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] mt-1.5 shrink-0" />
                            Espaço seguro e acolhedor para pessoas transgênero
                        </li>
                    </ul>
                </div>

                {/* Planejamento */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-6 h-6 text-[#ff6900]" />
                        <h3 className="font-bold text-lg text-gray-900">Planejamento</h3>
                    </div>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6900] mt-1.5 shrink-0" />
                            Visita rápida e atendimento ágil
                        </li>
                    </ul>
                </div>

                {/* Pagamentos */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-3 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                        <CreditCard className="w-6 h-6 text-[#ff6900]" />
                        <h3 className="font-bold text-lg text-gray-900">Formas de Pagamento</h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
                        <li className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-gray-400 shrink-0" />
                            Cartão de crédito
                        </li>
                        <li className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-gray-400 shrink-0" />
                            Cartão de débito
                        </li>
                        <li className="flex items-center gap-2">
                            <SmartphoneNfc className="w-4 h-4 text-gray-400 shrink-0" />
                            Pagamentos por dispositivo móvel via NFC
                        </li>
                    </ul>
                </div>

            </div>
        </SectionContainer>
    );
}

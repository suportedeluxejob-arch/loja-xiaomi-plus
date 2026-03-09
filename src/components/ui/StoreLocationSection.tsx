import React from "react";
import Image from "next/image";
import { Shield, ThumbsUp, Medal, Star } from "lucide-react";

export function StoreLocationSection() {
    return (
        <section className="relative w-full overflow-hidden bg-gray-100 py-16 md:py-24 min-h-[550px] md:min-h-[700px]">
            {/* Real Google Maps Embedded Background */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.4674751470438!2d-43.6807035!3d-22.9203074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfb74782f3543%3A0xd228cef25f40d793!2sXiaomi%20Plus%20-%20VENDA%20DE%20CELULARES%20XIAOMI%2FREALME%2FAPPLE!5e0!3m2!1spt-BR!2sbr!4v1709848450142!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-[150%] h-[150%] -translate-x-[25%] -translate-y-[25%] md:w-[120%] md:h-[120%] md:-translate-x-[10%] md:-translate-y-[10%] pointer-events-none"
                />

                {/* Radial Gradient overlay to fade the map edges to the gray background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f3f4f6_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#f3f4f6] via-transparent to-[#f3f4f6] opacity-90 pointer-events-none" />
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">

                {/* Section Title */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visite nossa Loja Física</h2>
                </div>

                {/* Center Floating White Card (Features) */}
                <div className="mx-auto max-w-5xl bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-white mb-16 overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-gray-100 p-2 gap-2">
                        <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-50 p-4 gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#fff5eb] text-[#ff6900] flex items-center justify-center shrink-0">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="font-bold text-gray-900 text-[13px] leading-tight">Originalidade</h4>
                                <p className="text-[10px] text-gray-500 font-medium">Aparelhos originais</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-50 p-4 gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#fff5eb] text-[#ff6900] flex items-center justify-center shrink-0">
                                <Medal className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="font-bold text-gray-900 text-[13px] leading-tight">Premium</h4>
                                <p className="text-[10px] text-gray-500 font-medium">Atendimento de ponta</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-50 p-4 gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#fff5eb] text-[#ff6900] flex items-center justify-center shrink-0">
                                <ThumbsUp className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="font-bold text-gray-900 text-[13px] leading-tight">Seguro</h4>
                                <p className="text-[10px] text-gray-500 font-medium">Garantia Xiaomi</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-50 p-4 gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#fff5eb] text-[#ff6900] flex items-center justify-center shrink-0">
                                <Star className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <h4 className="font-bold text-gray-900 text-[13px] leading-tight">Acessórios</h4>
                                <p className="text-[10px] text-gray-500 font-medium">Experiência completa</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Store Images & Location Pin */}
                <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full px-4">
                    {/* Left Store Image */}
                    <div className="relative hidden md:block w-full md:w-[400px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white bg-gray-200 shrink-0">
                        <Image
                            src="/loja-1.jpg"
                            alt="Fachada da loja Xiaomi Plus"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Center Location Pin Wrapper */}
                    <a
                        href="https://www.google.com/maps/place/Xiaomi+Plus+-+VENDA+DE+CELULARES+XIAOMI%2FREALME%2FAPPLE/data=!4m2!3m1!1s0x0:0xd228cef25f40d793?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center text-center relative z-20 shrink-0 group my-8 md:my-0"
                    >
                        {/* Tooltip / Call to Action above the pin */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none">
                            <div className="bg-[#ff6900] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5">
                                <span>Ver no Google Maps</span>
                                {/* Small arrow pointing down */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#ff6900] rotate-45" />
                            </div>
                        </div>

                        <div className="relative w-20 h-20 mb-4 drop-shadow-[0_15px_30px_rgba(255,105,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                            {/* Glowing central pulse effect */}
                            <div className="absolute inset-0 rounded-full bg-[#ff6900]/40 blur-2xl animate-pulse" />

                            {/* Pin design */}
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-[#ff6900] drop-shadow-xl relative z-10">
                                <path d="M12 21.5C12 21.5 20.5 15.201 20.5 9.5C20.5 4.80558 16.6944 1 12 1C7.30558 1 3.5 4.80558 3.5 9.5C3.5 15.201 12 21.5 12 21.5Z" fill="currentColor" />
                                <circle cx="12" cy="9.5" r="3.5" fill="white" />
                            </svg>
                        </div>

                        {/* Text Below Pin */}
                        <div className="flex flex-col items-center bg-white/80 px-5 py-2 rounded-2xl backdrop-blur-md shadow-sm border border-gray-100 transition-colors group-hover:bg-white group-hover:border-[#ff6900]/30 group-hover:shadow-[0_8px_30px_-4px_rgba(255,105,0,0.1)]">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Santa Cruz, RJ</h3>
                            <span className="text-[10px] font-bold text-[#ff6900] uppercase tracking-widest mt-0.5 group-hover:opacity-100 opacity-60 transition-opacity flex items-center gap-1">
                                Clicar para abrir rota <span className="text-lg leading-none">&rarr;</span>
                            </span>
                        </div>
                    </a>

                    {/* Right Store Image */}
                    <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white bg-gray-200 shrink-0 hidden md:block">
                        <Image
                            src="/loja-2.jpg"
                            alt="Interior da loja Xiaomi Plus"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Mobile text for location */}
                <div className="mt-8 text-center md:hidden relative z-20">
                    <p className="text-gray-900 font-semibold text-sm max-w-[280px] mx-auto bg-white/70 backdrop-blur-md py-3 px-5 rounded-2xl shadow-sm border border-white">
                        Visite nossa loja para conhecer todos os modelos de perto e testar as câmeras!
                    </p>
                </div>
            </div>
        </section>
    );
}

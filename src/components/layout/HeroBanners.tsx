"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Truck, Info } from "lucide-react";

export function HeroBanners() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = 2;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesCount);
        }, 5000);
        return () => clearInterval(timer);
    }, [slidesCount]);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev + 1) % slidesCount);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
    };
    return (
        <section className="w-full bg-[#f8f9fa] pt-4 pb-8">
            <div className="container mx-auto px-4 md:px-6">

                {/* Main Large Banner Carousel */}
                <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-4 aspect-[21/9] sm:aspect-[3/1] lg:aspect-[3.2/1] flex items-center group cursor-pointer bg-neutral-900">
                    {/* Slide 0: The new image banner */}
                    <Link href="/produtos" className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <Image
                            src="/main-banner.jpg"
                            alt="Banner Principal - Lançamentos Exclusivos"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </Link>

                    {/* Slide 1: The new secondary image banner */}
                    <Link href="/produtos?categoria=Xiaomi" className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <Image
                            src="/main-banner-2.jpg"
                            alt="Banner - 18 Meses de Garantia"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </Link>

                    {/* Carousel Nav Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 md:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition border border-white/30 z-20 shadow-lg"
                        aria-label="Banner Anterior"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 md:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition border border-white/30 z-20 shadow-lg"
                        aria-label="Próximo Banner"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Pagination indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                        {Array.from({ length: slidesCount }).map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide(index);
                                }}
                                className={`h-1.5 rounded-full transition-all ${currentSlide === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                                aria-label={`Ir para banner ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Two Banners Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Left Small Banner (Orange) */}
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 p-6 md:p-8 flex items-center shadow-md min-h-[160px] cursor-pointer group hover:shadow-lg transition">
                        <div className="flex-1 z-10 max-w-[65%]">
                            <h3 className="text-2xl sm:text-3xl font-black text-white leading-[1.1] mb-3 drop-shadow-sm">
                                <span className="block">PREÇOS DE</span>
                                <span className="block">ATACADO</span>
                            </h3>
                            <div className="inline-block bg-white text-[#ff6900] font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full">
                                Fazer orçamentos
                            </div>
                        </div>
                        <div className="absolute right-4 top-1/4 h-[90%] w-[35%] transform group-hover:scale-105 transition-transform">
                            {/* Graphic mockup: Stacked phones */}
                            <div className="relative w-full h-[80%] float-right flex items-center mr-4">
                                <div className="absolute w-12 h-24 bg-gray-900 rounded-lg border-2 border-gray-600 shadow-xl transform rotate-6 translate-x-4 z-10"><div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded"></div></div>
                                <div className="absolute w-16 h-28 bg-gray-900 rounded-xl border-[3px] border-white shadow-2xl -translate-x-2 z-20"><div className="w-full h-full bg-gradient-to-b from-red-400 to-orange-500 rounded-lg"></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Small Banner (Blue - Free Shipping) */}
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 p-6 md:p-8 flex items-center shadow-md min-h-[160px] cursor-pointer group hover:shadow-lg transition">
                        <div className="flex-1 z-10">
                            <h3 className="text-2xl sm:text-3xl font-black text-white leading-[1.1] mb-2 drop-shadow-sm">
                                <span className="block">FRETE</span>
                                <span className="block text-yellow-300">GRÁTIS!</span>
                            </h3>
                            <p className="text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-black/20 inline-block px-3 py-1 rounded-md mb-2">
                                FRETE GRÁTIS EM NÍVEL GERAL
                            </p>
                            <Link href="/faq" className="flex items-center text-white/80 hover:text-white text-xs font-medium transition gap-1 group-hover:underline">
                                <Info className="w-3 h-3" /> Ver regras de uso
                            </Link>
                        </div>
                        {/* Box Delivery Graphic Mockup */}
                        <div className="absolute right-4 bottom-4 w-[40%] text-right group-hover:scale-105 transition-transform flex flex-col items-end">
                            <Truck className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-300 drop-shadow-xl transform scale-x-[-1]" />
                            <div className="w-12 h-2 bg-black/10 rounded-full mt-2 filter blur-[2px] ml-auto"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    title: string;
    description: string;
    href: string;
    imageFallback: string; // Since we don't have images yet, we'll use a CSS gradient/color fallback
    imageSrc?: string;
}

export function CategoryCard({
    title,
    description,
    href,
    imageFallback,
    imageSrc,
}: CategoryCardProps) {
    // We'll map the background gradient based on the title to match Figma
    let glowingBg = "bg-[#ff6900]"; // Default orange
    if (title.toLowerCase().includes("apple")) glowingBg = "bg-gray-800";
    if (title.toLowerCase().includes("realme")) glowingBg = "bg-yellow-400";
    if (title.toLowerCase().includes("acessórios")) glowingBg = "bg-emerald-400";

    return (
        <Link
            href={href}
            className="group relative flex h-[280px] md:h-[320px] w-full flex-col justify-end overflow-hidden rounded-[2.5rem] bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/50"
        >
            {/* Base gradient bg to mimic the exact blur spread from figma */}
            <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30 ${glowingBg.replace('bg-', 'bg-gradient-to-b from-transparent to-')}`} />

            {/* Glowing background blur effect simulating the mockup */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[220px] h-[220px] rounded-full blur-[70px] opacity-60 group-hover:opacity-80 transition-opacity duration-500 ${glowingBg}`} />

            {/* Product Image or Mockup Overlay */}
            <div className="absolute inset-0 flex items-center justify-center -translate-y-10">
                {imageSrc ? (
                    <div className="w-[85%] h-[85%] relative transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                ) : (
                    <div className="w-[140px] h-[160px] bg-white rounded-3xl shadow-xl border-4 border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white" />
                        <span className="font-black text-5xl text-gray-200 relative z-10">XP</span>
                    </div>
                )}
            </div>

            {/* Frosted Glass Overlay for Text */}
            <div className="relative z-10 w-full bg-white/60 backdrop-blur-[20px] border-t border-white/80 p-6 flex flex-col justify-end min-h-[40%] rounded-b-[2.5rem] shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight tracking-tight">{title}</h3>
                <p className="text-[12px] text-gray-600 line-clamp-2 leading-relaxed text-balance">{description}</p>
            </div>
        </Link>
    );
}

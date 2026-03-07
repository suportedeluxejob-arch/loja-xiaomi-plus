"use client";

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium">{question}</span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-5" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
}

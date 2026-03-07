"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Send } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Olá, meu nome é ${formData.name}.%0A%0A${formData.message}`;
        window.open(`https://wa.me/5521979544879?text=${text}`, "_blank");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-5 rounded-2xl bg-secondary/30 p-6 md:p-8"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                    Nome Completo
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border border-white/10 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Seu nome"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium">
                    Telefone / WhatsApp
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg border border-white/10 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="(21) 90000-0000"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none rounded-lg border border-white/10 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Como podemos te ajudar?"
                />
            </div>

            <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
            </Button>
        </form>
    );
}

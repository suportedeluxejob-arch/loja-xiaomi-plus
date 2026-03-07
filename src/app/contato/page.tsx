import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Phone, MessageCircle, Clock, Instagram } from "lucide-react";

export const metadata: Metadata = {
    title: "Contato | Xiaomi Plus Santa Cruz",
    description: "Fale conosco. Tire suas dúvidas, consulte preços e disponibilidade. Atendimento rápido via WhatsApp ou na nossa loja física em Santa Cruz - RJ",
    alternates: {
        canonical: "/contato",
    },
};

export default function ContactPage() {
    return (
        <>
            <SectionContainer className="pt-8">
                <Breadcrumb items={[{ name: "Contato", href: "/contato" }]} />

                <SectionHeading
                    title="Fale Conosco"
                    subtitle="Estamos prontos para te ajudar. Escolha o melhor canal de atendimento para você."
                    alignment="left"
                    className="mb-12"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Telefone</h3>
                                    <p className="text-muted-foreground">(21) 97954-4879</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">WhatsApp</h3>
                                    <a href="https://wa.me/5521979544879" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                                        (21) 97954-4879
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                                    <Instagram className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Instagram</h3>
                                    <a href="https://instagram.com/xiaomiplus" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                                        @xiaomiplus
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/80 text-foreground">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Horário de Funcionamento</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Seg a Sex: 09h às 18h<br />
                                        Sábados: 09h às 14h<br />
                                        Domingos: Fechado
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-primary" />
                                <h3 className="font-bold text-xl">Nossa Loja Física</h3>
                            </div>
                            <p className="text-muted-foreground">
                                R. Gen. Olímpio, 120 - loja B - Santa Cruz<br />
                                Rio de Janeiro - RJ<br />
                                CEP: 23550-242
                            </p>

                            <div className="relative mt-4 h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-secondary/50">
                                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80 mix-blend-overlay">
                                    <span className="text-muted-foreground font-mono">Google Maps Embed</span>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3674.341499596001!2d-43.6826!3d-22.9168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU1JzAwLjUiUyA0M8KwNDAnNTcuNCJX!5e0!3m2!1spt-BR!2sbr!4v1610000000000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    title="Google Maps Location"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="relative z-10 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex flex-col">
                        <h3 className="font-bold text-2xl mb-6">Envie uma mensagem</h3>
                        <p className="text-muted-foreground mb-8">
                            Preencha o formulário abaixo que você será redirecionado para o nosso WhatsApp já com a sua mensagem pré-preenchida.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}

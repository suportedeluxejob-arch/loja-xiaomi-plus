import React from "react";
import { SectionContainer } from "../layout/SectionContainer";
import { PrimaryCTAButton } from "./PrimaryCTAButton";
import { SecondaryCTAButton } from "./SecondaryCTAButton";
import { Phone } from "lucide-react";

export function FinalCTASection() {
    return (
        <SectionContainer className="bg-primary/5 py-16 md:py-24">
            <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
                    Quer saber o preço do seu próximo smartphone?
                </h2>
                <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-[600px] text-balance">
                    Fale com nossa equipe agora mesmo e garanta os melhores preços e condições da região de Santa Cruz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <PrimaryCTAButton
                        asChild
                        className="w-full sm:w-auto shadow-primary/25"
                    >
                        <a
                            href="https://wa.me/5521979544879?text=Olá,%20vim%20pelo%20site%20da%20Xiaomi%20Plus"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Falar no WhatsApp
                        </a>
                    </PrimaryCTAButton>

                    <SecondaryCTAButton asChild className="w-full sm:w-auto bg-background">
                        <a href="tel:+5521979544879">
                            <Phone className="mr-2 h-5 w-5" />
                            Ligar Agora
                        </a>
                    </SecondaryCTAButton>
                </div>
            </div>
        </SectionContainer>
    );
}

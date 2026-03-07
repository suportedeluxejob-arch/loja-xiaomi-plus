import { HeroBanners } from "@/components/layout/HeroBanners";
import { PrimaryCTAButton } from "@/components/ui/PrimaryCTAButton";
import { SecondaryCTAButton } from "@/components/ui/SecondaryCTAButton";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { StoreInfoBlock } from "@/components/ui/StoreInfoBlock";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { FinalCTASection } from "@/components/ui/FinalCTASection";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { getFeaturedProducts } from "@/lib/data/products";
import { CheckCircle2, MapPin, Shield, Star, ThumbsUp, Medal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <>
      <LocalBusinessSchema />

      <HeroBanners />

      {/* Social Proof / Trust Section */}
      <SectionContainer className="bg-white">
        <SectionHeading
          title="Por que comprar na Xiaomi Plus?"
          subtitle="Mais de 1.000 clientes satisfeitos em Santa Cruz e região confiam em nosso trabalho."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureItem
            icon={<Shield className="h-8 w-8" />}
            title="Produtos Originais"
            description="Aparelhos lacrados de fábrica com garantia estendida."
          />
          <FeatureItem
            icon={<ThumbsUp className="h-8 w-8" />}
            title="Atendimento Premium"
            description="Auxiliamos desde a escolha até a migração de dados do seu celular antigo."
          />
          <FeatureItem
            icon={<Medal className="h-8 w-8" />}
            title="Negociação Segura"
            description="Transparência total na negociação. Sem surpresas."
          />
          <FeatureItem
            icon={<Star className="h-8 w-8" />}
            title="Loja bem avaliada"
            description="Média 4.8/5 no Google atestando nossa qualidade."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard
            author="Carlos Silva"
            date="Há 2 semanas"
            text="Atendimento excepcional! Comprei um POCO X6 Pro, me ajudaram a passar todos os dados do aparelho antigo para o novo. Loja muito confiável."
          />
          <ReviewCard
            author="Ana Beatriz"
            date="Há 1 mês"
            text="Preço justo e produtos originais embalados. Recomendo muito a Xiaomi Plus para quem mora em Santa Cruz."
          />
          <ReviewCard
            author="Marcos Antônio"
            date="Há 2 meses"
            text="Comprei um iPhone 13 com eles. Negociação transparente do início ao fim via WhatsApp e retirei na loja física."
          />
        </div>
      </SectionContainer>

      {/* Product Categories */}
      <SectionContainer className="bg-[#f8f9fa]">
        <SectionHeading
          title="Nossas Linhas"
          subtitle="Explore nosso catálogo completo por categoria"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Xiaomi"
            description="Os campeões de custo-benefício. Linhas Redmi e POCO."
            href="/produtos?categoria=Xiaomi"
            imageFallback="bg-gradient-to-tr from-orange-600 to-orange-400"
          />
          <CategoryCard
            title="Apple / iPhone"
            description="O ecossistema perfeito. iPhones originais com garantia."
            href="/produtos?categoria=Apple"
            imageFallback="bg-gradient-to-tr from-gray-800 to-gray-600"
          />
          <CategoryCard
            title="Realme"
            description="Potência e design arrojado para os mais exigentes."
            href="/produtos?categoria=Realme"
            imageFallback="bg-gradient-to-tr from-yellow-500 to-amber-500"
          />
          <CategoryCard
            title="Acessórios"
            description="Smartwatches, fones Bluetooth, cases e películas."
            href="/produtos?categoria=Acessórios"
            imageFallback="bg-gradient-to-tr from-emerald-600 to-teal-500"
          />
        </div>
      </SectionContainer>

      {/* Featured Products */}
      <SectionContainer className="bg-white">
        <SectionHeading
          title="Modelos em Destaque"
          subtitle="Os smartphones mais buscados e vendidos da semana"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              brand={product.brand}
              title={product.title}
              model={product.model}
              shortDescription={product.shortDescription}
              price={product.price}
              imageFallback={product.images[0]}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Store Location */}
      <SectionContainer id="localizacao" className="bg-[#f8f9fa]">
        <SectionHeading
          title="Visite nossa Loja Física"
          subtitle="Segurança e comodidade para você no centro de Santa Cruz."
        />
        <div className="mb-10">
          <StoreInfoBlock />
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-white/10 bg-secondary/50">
          {/* Replace with actual Google Maps Embed Iframe */}
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/80 mix-blend-overlay">
            <span className="text-muted-foreground font-mono">Google Maps Embed Placeholder</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3674.341499596001!2d-43.6826!3d-22.9168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU1JzAwLjUiUyA0M8KwNDAnNTcuNCJX!5e0!3m2!1spt-BR!2sbr!4v1610000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="relative z-10 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </SectionContainer>

      <FinalCTASection />
    </>
  );
}

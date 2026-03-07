import React from "react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryCTAButton } from "@/components/ui/PrimaryCTAButton";
import { SecondaryCTAButton } from "@/components/ui/SecondaryCTAButton";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { StoreInfoBlock } from "@/components/ui/StoreInfoBlock";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { FinalCTASection } from "@/components/ui/FinalCTASection";
import { getProductBySlug, getProductsByCategory } from "@/lib/data/products";
import { CheckCircle2, ShieldCheck, Smartphone, MapPin, Truck } from "lucide-react";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(
    { params }: ProductPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        return { title: "Produto não encontrado" };
    }

    return {
        title: product.seoTitle,
        description: product.seoDescription,
        alternates: {
            canonical: `/produtos/${product.slug}`,
        },
        openGraph: {
            title: product.seoTitle,
            description: product.seoDescription,
            images: [product.images[0]],
        },
    };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getProductsByCategory(product.category)
        .filter((p) => p.id !== product.id)
        .slice(0, 4);

    return (
        <>
            <ProductSchema product={product} />

            <SectionContainer className="pt-8 pb-12">
                <Breadcrumb
                    items={[
                        { name: "Produtos", href: "/produtos" },
                        { name: product.category, href: `/produtos?categoria=${product.category}` },
                        { name: product.model },
                    ]}
                />

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Product Image Gallery (Mock) */}
                    <div className="flex flex-col gap-4">
                        <div className={`aspect-square w-full rounded-3xl border border-gray-100 shadow-sm ${product.images[0]} flex items-center justify-center`}>
                            {/* Real implementations use next/image here */}
                            <div className="bg-white/80 backdrop-blur text-gray-900 px-4 py-2 rounded-full font-mono text-sm shadow-sm border border-gray-200">
                                Image Placeholder: {product.model}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {/* Thumbnails mockup */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`aspect-square rounded-xl border border-gray-200 opacity-50 hover:opacity-100 hover:border-[#ff6900] transition-all cursor-pointer ${product.images[0]}`} />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <div className="inline-flex max-w-max items-center justify-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary mb-4 border border-primary/20">
                            {product.brand} • {product.condition}
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            {product.title}
                        </h1>

                        <ReviewBadge />

                        <div className="my-8 h-px w-full bg-gray-100" />

                        {product.price && (
                            <div className="mb-8">
                                <p className="text-sm font-medium text-gray-500 mb-1">Preço Promocional a partir de</p>
                                <p className="text-4xl font-bold text-primary">
                                    {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price)}
                                </p>
                                <p className="text-sm text-green-500 font-medium mt-1 inline-flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Em Estoque</p>
                            </div>
                        )}

                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                            {product.fullDescription}
                        </p>

                        {/* Key Specs */}
                        <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            {(product.storage || product.color) && (
                                <li className="flex items-center gap-3">
                                    <div className="bg-[#ff6900]/10 p-2 rounded-lg text-[#ff6900]"><Smartphone className="w-5 h-5" /></div>
                                    <div className="text-sm">
                                        <span className="block text-gray-500">Configuração</span>
                                        <span className="font-semibold text-gray-900">{product.storage} {product.color ? `• ${product.color}` : ''}</span>
                                    </div>
                                </li>
                            )}
                            <li className="flex items-center gap-3">
                                <div className="bg-[#ff6900]/10 p-2 rounded-lg text-[#ff6900]"><ShieldCheck className="w-5 h-5" /></div>
                                <div className="text-sm">
                                    <span className="block text-gray-500">Garantia</span>
                                    <span className="font-semibold text-gray-900">{product.warranty}</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-[#ff6900]/10 p-2 rounded-lg text-[#ff6900]"><MapPin className="w-5 h-5" /></div>
                                <div className="text-sm">
                                    <span className="block text-gray-500">Retirada</span>
                                    <span className="font-semibold text-gray-900">Na Loja Física</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-[#ff6900]/10 p-2 rounded-lg text-[#ff6900]"><Truck className="w-5 h-5" /></div>
                                <div className="text-sm">
                                    <span className="block text-gray-500">Entrega</span>
                                    <span className="font-semibold text-gray-900">Na Região (Taxa a consultar)</span>
                                </div>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <PrimaryCTAButton asChild className="w-full text-lg h-14" icon={false}>
                                <a
                                    href={`https://wa.me/5521979544879?text=Olá,%20tenho%20interesse%20no%20${encodeURIComponent(product.title)}.%20Qual%20a%20disponibilidade%20e%20condições%20de%20pagamento?`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Comprar no WhatsApp
                                </a>
                            </PrimaryCTAButton>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer className="bg-gray-50">
                <StoreInfoBlock />
            </SectionContainer>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <SectionContainer>
                    <SectionHeading
                        title="Aproveite e veja também"
                        subtitle="Outros aparelhos que podem ser ideais para você"
                        alignment="left"
                        className="mb-8"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((p) => (
                            <ProductCard
                                key={p.id}
                                id={p.id}
                                slug={p.slug}
                                brand={p.brand}
                                title={p.title}
                                model={p.model}
                                shortDescription={p.shortDescription}
                                price={p.price}
                                imageFallback={p.images[0]}
                            />
                        ))}
                    </div>
                </SectionContainer>
            )}

            <FinalCTASection />
        </>
    );
}

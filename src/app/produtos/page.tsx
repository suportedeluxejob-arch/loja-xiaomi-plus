import React from "react";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { mockProducts } from "@/lib/data/products";
import { Filter } from "lucide-react";

export const metadata: Metadata = {
    title: "Catálogo de Smartphones | Xiaomi Plus Santa Cruz",
    description: "Confira nosso catálogo completo de smartphones Xiaomi, POCO, Realme e Apple. Melhores preços e pronta entrega em Santa Cruz - RJ.",
    alternates: {
        canonical: "/produtos",
    },
};

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedSearchParams = await searchParams;
    const categoria = typeof resolvedSearchParams.categoria === "string" ? resolvedSearchParams.categoria : null;

    // Simulate basic filtering
    const filteredProducts = categoria
        ? mockProducts.filter((p) => p.category.toLowerCase() === categoria.toLowerCase())
        : mockProducts;

    const categories = ["Todos", "Xiaomi", "Apple", "Realme", "Acessórios"];

    return (
        <SectionContainer className="pt-8 bg-[#f8f9fa] min-h-[80vh]">
            <Breadcrumb
                items={[
                    { name: "Produtos", href: "/produtos" },
                    ...(categoria ? [{ name: categoria }] : []),
                ]}
            />

            <div className="flex flex-col md:flex-row gap-8 mt-6">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-6 text-lg font-bold">
                            <Filter className="h-5 w-5 text-primary" />
                            Categorias
                        </div>

                        <ul className="flex flex-col gap-3">
                            {categories.map((cat) => {
                                const isActive = (categoria === null && cat === "Todos") ||
                                    (categoria?.toLowerCase() === cat.toLowerCase());

                                return (
                                    <li key={cat}>
                                        <a
                                            href={cat === "Todos" ? "/produtos" : `/produtos?categoria=${cat}`}
                                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                                                ? "bg-[#ff6900] text-white font-medium shadow-sm"
                                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                                }`}
                                        >
                                            {cat}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>

                {/* Main Product Grid */}
                <div className="flex-1">
                    <SectionHeading
                        title={categoria ? `Linha ${categoria}` : "Todos os Produtos"}
                        subtitle="Confira nosso catálogo completo. Todos os produtos possuem garantia e procedência."
                        alignment="left"
                        className="mb-8"
                    />

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
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
                    ) : (
                        <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <p className="text-xl font-medium text-gray-500">Nenhum produto encontrado nesta categoria.</p>
                        </div>
                    )}
                </div>
            </div>
        </SectionContainer>
    );
}

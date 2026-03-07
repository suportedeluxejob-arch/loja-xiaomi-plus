export type ProductCategory = "Xiaomi" | "Apple" | "Realme" | "Acessórios";

export type ProductCondition = "Novo e Lacrado" | "Seminovo";

export interface Product {
    id: string;
    slug: string;
    brand: "Xiaomi" | "Apple" | "Realme" | "Diversos";
    model: string;
    title: string;
    category: ProductCategory;
    shortDescription: string;
    fullDescription: string;
    storage?: string;
    color?: string;
    condition: ProductCondition;
    warranty: string;
    price?: number;
    featured: boolean;
    status: "available" | "out-of-stock" | "catalog-only";
    images: string[];
    seoTitle: string;
    seoDescription: string;
}

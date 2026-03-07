import React from "react";
import { Product } from "@/types";

interface ProductSchemaProps {
    product: Product;
}

export function ProductSchema({ product }: ProductSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        image: product.images, // Use absolute URLs in production
        description: product.fullDescription,
        sku: product.id,
        brand: {
            "@type": "Brand",
            name: product.brand,
        },
        offers: {
            "@type": "Offer",
            url: `https://xiaomiplus.com.br/produtos/${product.slug}`, // Use active domain
            priceCurrency: "BRL",
            price: product.price || 0,
            itemCondition: "https://schema.org/NewCondition",
            availability: product.status === "available" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            seller: {
                "@type": "Organization",
                name: "Xiaomi Plus",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

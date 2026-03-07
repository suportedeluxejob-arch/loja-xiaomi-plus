import React from "react";

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MobilePhoneStore",
        name: "Xiaomi Plus",
        image: "https://xiaomiplus.com.br/logo.webp", // Replace with real domain and logo
        "@id": "https://xiaomiplus.com.br",
        url: "https://xiaomiplus.com.br",
        telephone: "+5521979544879",
        address: {
            "@type": "PostalAddress",
            streetAddress: "R. Gen. Olímpio, 120 - loja B",
            addressLocality: "Santa Cruz, Rio de Janeiro",
            addressRegion: "RJ",
            postalCode: "23550-242",
            addressCountry: "BR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -22.9168, // Update to actual exact coords of store
            longitude: -43.6826, // Update to actual exact coords
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
            },
        ],
        sameAs: ["https://instagram.com/xiaomiplus"],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

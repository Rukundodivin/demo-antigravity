import React from "react";

export const SchemaOrg = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "name": "Chesterfields Bar",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000",
        "@id": "https://chesterfields-bar.marrakech",
        "url": "https://chesterfields-bar.marrakech",
        "telephone": "+212 621 1111 94",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "34 Rue de la Liberté",
            "addressLocality": "Marrakech",
            "postalCode": "40000",
            "addressCountry": "MA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.6346,
            "longitude": -8.0151
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "12:00",
            "closes": "02:00"
        },
        "sameAs": [
            "https://www.instagram.com/chesterfieldsbarmarrakech/",
            "https://web.facebook.com/chesterfieldsbar/"
        ],
        "servesCuisine": "British, Pub food, Tapas",
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

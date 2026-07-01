'use client';
import React from 'react';

const StructuredData = () => {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "QUEST Pharma Solutions",
        "url": "https://questpharmasolution.com",
        "logo": "https://questpharmasolution.com/logo.jpg",
        "description": "Trusted pharmaceutical quality and GMP compliance consultancy serving regulated manufacturers worldwide.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
    );
};

export default StructuredData;

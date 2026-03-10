"use client";

import React from "react";

const images = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800",
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800",
    "https://images.unsplash.com/photo-1536935338218-db8905331773?q=80&w=800",
];

export const Galerie = () => {
    return (
        <section id="galerie" className="py-24 bg-[#1A0A00]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Galerie <span className="gradient-text italic">Photos</span>
                    </h2>
                    <p className="text-[#A89070] text-lg max-w-2xl mx-auto">
                        Aperçu visuel de l'ambiance unique du Chesterfields Bar, du lobby de l'Hôtel Nassim à notre terrasse panoramique.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-[24px] border border-white/5 bg-[#231208]">
                            <img
                                src={src}
                                alt={`Chesterfields Bar ${idx}`}
                                className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <div className="flex flex-col gap-1">
                                    <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-[10px]">Instagram</span>
                                    <span className="text-[#F5EDD6] font-playfair text-lg italic">@ChesterfieldsBar</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

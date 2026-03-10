"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Beer, Wind, Trophy } from "lucide-react";

const features = [
    {
        title: "Le Pub",
        description: "Une atmosphère boisée et feutrée, fidèle aux vrais pubs londoniens. Cuir Chesterfields et ambiance intimiste.",
        icon: <Beer className="w-10 h-10 text-[#C8860A]" />,
        img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000",
    },
    {
        title: "La Terrasse",
        description: "Un espace ouvert sur Marrakech, parfait pour profiter de la douceur des soirées du Guéliz en plein air.",
        icon: <Wind className="w-10 h-10 text-[#C8860A]" />,
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    },
    {
        title: "Live Sports",
        description: "Vivez les plus grands événements sportifs en direct sur nos écrans géants dans une ambiance électrique.",
        icon: <Trophy className="w-10 h-10 text-[#C8860A]" />,
        img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1000",
    },
];

export const Ambiance = () => {
    return (
        <section id="ambiance" className="py-24 bg-[#1A0A00] relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Une ambiance <span className="gradient-text italic">authentique</span>
                    </h2>
                    <p className="text-[#A89070] text-lg max-w-2xl mx-auto">
                        Trois univers distincts pour répondre à toutes vos envies, du calme d'un après-midi en terrasse à l'énergie d'un soir de match.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="relative group h-[480px] rounded-[32px] overflow-hidden">
                            {/* Card Content */}
                            <div className="absolute inset-0 bg-[#231208] border border-white/5 rounded-[32px]">
                                <div className="h-1/2 overflow-hidden">
                                    <img
                                        src={feature.img}
                                        alt={feature.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>
                                <div className="p-8 h-1/2 flex flex-col justify-center items-center text-center">
                                    <div className="mb-4 bg-[#1A0A00] p-4 rounded-2xl border border-amber-500/10 transition-transform group-hover:-translate-y-2">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#F5EDD6] mb-2">{feature.title}</h3>
                                    <p className="text-[#A89070] text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>

                            {/* Glowing Effect Overlay */}
                            <GlowingEffect
                                spread={80}
                                borderWidth={2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

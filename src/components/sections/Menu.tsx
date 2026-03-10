"use client";

import React, { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

const menuData = {
    Bieres: [
        { name: "Casablanca Draught", price: "55 MAD", desc: "La bière iconique du Maroc, fraîche et légère." },
        { name: "Stella Artois", price: "60 MAD", desc: "Pils belge classique, équilibrée et rafraîchissante." },
        { name: "Leffe Blonde", price: "85 MAD", desc: "Bière d'abbaye belge aux notes fruitées et épicées." },
        { name: "Guinness (Can)", price: "95 MAD", desc: "La célèbre stout irlandaise aux arômes de café grillé." },
    ],
    Cocktails: [
        { name: "Marrakech Mule", price: "110 MAD", desc: "Vodka, gingembre frais, citron vert et menthe du jardin." },
        { name: "English Garden", price: "120 MAD", desc: "Gin, liqueur de sureau, concombre et jus de pomme." },
        { name: "Sunset Martini", price: "130 MAD", desc: "Passoa, vodka, vanille et purée de fruits de la passion." },
        { name: "Negroni Ambre", price: "115 MAD", desc: "Gin, Campari, Vermouth rouge et une touche d'écorce d'orange." },
    ],
    Food: [
        { name: "Fish & Chips", price: "125 MAD", desc: "Filet de cabillaud frais en pâte à la bière, frites maison." },
        { name: "Chesterfields Burger", price: "145 MAD", desc: "Bœuf Wagyu, cheddar vintage, oignons caramélisés." },
        { name: "Planche Mixte", price: "180 MAD", desc: "Sélection de charcuteries fines et fromages affinés." },
        { name: "Tapas Calamars", price: "95 MAD", desc: "Calamars frits à la romaine, sauce tartare maison." },
    ],
};

export const MenuSection = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Bieres");

    return (
        <section id="menu" className="py-24 bg-[#1A0A00] border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Des saveurs <span className="gradient-text italic">artisanales</span>
                    </h2>
                    <p className="text-[#A89070] text-lg max-w-2xl mx-auto">
                        Une sélection rigoureuse de produits frais et de boissons d'exception servies dans les règles de l'art.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {Object.keys(menuData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={cn(
                                "px-8 py-3 rounded-full text-sm font-bold transition-all border",
                                activeTab === tab
                                    ? "bg-[#C8860A] text-[#1A0A00] border-[#C8860A] shadow-[0_0_20px_rgba(200,134,10,0.3)]"
                                    : "bg-[#231208] text-[#F5EDD6]/60 border-white/10 hover:border-amber-500/30"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {menuData[activeTab].map((item, idx) => (
                        <div key={idx} className="relative group p-6 rounded-[24px] bg-[#231208] border border-white/5 transition-transform hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-[#F5EDD6]">{item.name}</h3>
                                <div className="flex flex-col items-end">
                                    <span className="text-amber-500 font-bold whitespace-nowrap">{item.price}</span>
                                    <div className="h-0.5 w-full bg-amber-500/20 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                                </div>
                            </div>
                            <p className="text-[#A89070] text-sm italic leading-relaxed">{item.desc}</p>

                            <GlowingEffect spread={60} borderWidth={1.5} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors group">
                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        Télécharger la carte complète (PDF)
                    </button>
                </div>
            </div>
        </section>
    );
};

"use client";

import React from "react";
import { MoveRight } from "lucide-react";

export const APropos = () => {
    return (
        <section id="a-propos" className="py-24 bg-[#1A0A00] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Notre Héritage
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#F5EDD6] mb-8 leading-tight">
                            Une passion pour <br />
                            <span className="gradient-text italic">l'hospitalité</span>
                        </h2>
                        <div className="space-y-6 text-[#A89070] text-lg leading-relaxed">
                            <p>
                                Situé dans le quartier historique du Guéliz, au sein de l'Hôtel Nassim, le Chesterfields Bar est bien plus qu'un simple pub. C'est une institution où se mêlent voyageurs du monde entier et habitués marrakchis.
                            </p>
                            <p>
                                De nos cuirs capitonnés qui rappellent les plus grands clubs privés de Londres à notre terrasse ensoleillée aux accents méditerranéens, nous avons créé un lieu hors du temps pour vos moments de détente, de célébration ou de partage.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-[#F5EDD6]">12:00</span>
                                <span className="text-xs uppercase tracking-widest text-amber-500/60">Ouverture</span>
                            </div>
                            <div className="h-10 w-px bg-white/10 hidden sm:block" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-[#F5EDD6]">02:00</span>
                                <span className="text-xs uppercase tracking-widest text-amber-500/60">Fermeture</span>
                            </div>
                            <div className="h-10 w-px bg-white/10 hidden sm:block" />
                            <button className="flex items-center gap-2 text-amber-500 font-bold hover:translate-x-2 transition-transform">
                                En savoir plus <MoveRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2 order-1 md:order-2 relative">
                        <div className="relative rounded-[40px] overflow-hidden border border-white/5 shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1000"
                                alt="Chesterfields Ambience"
                                className="w-full h-full object-cover grayscale-[0.2]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0A00]/40 to-transparent" />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-8 -left-8 bg-[#C8860A] p-8 rounded-[32px] hidden md:block shadow-2xl">
                            <p className="text-[#1A0A00] font-bold text-lg leading-tight">
                                Authentique <br />
                                Pub Anglais <br />
                                <span className="font-playfair italic font-normal">Depuis des années</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

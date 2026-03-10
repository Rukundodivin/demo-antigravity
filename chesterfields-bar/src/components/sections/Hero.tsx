"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
    return (
        <section id="accueil" className="bg-[#1A0A00]">
            <ContainerScroll
                titleComponent={
                    <>
                        <div className="flex flex-col items-center">
                            <span className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] mb-4 bg-amber-500/5">
                                Marrakech · Hôtel Nassim
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5EDD6] leading-tight max-w-4xl mx-auto px-4 sm:px-0">
                                Le pub anglais au{" "}
                                <span className="gradient-text italic">cœur de Marrakech</span>
                            </h1>
                            <p className="mt-6 text-[#A89070] text-base md:text-xl max-w-2xl mx-auto font-inter px-4 sm:px-0">
                                Plongez dans l'élégance d'un club londonien allié au charme envoûtant de la terrasse en plein Guéliz.
                            </p>

                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none px-6 sm:px-0 justify-center">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[#C8860A] text-[#1A0A00] font-bold rounded-full transition-transform hover:scale-105">
                                    Découvrir l'expérience
                                </button>
                                <button className="w-full sm:w-auto px-8 py-4 border border-[#F5EDD6]/20 text-[#F5EDD6] font-bold rounded-full transition-colors hover:bg-white/5">
                                    Consulter la carte
                                </button>
                            </div>

                            <div className="mt-20 animate-bounce flex flex-col items-center gap-2 opacity-40">
                                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </div>
                    </>
                }
            >
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000"
                        alt="Chesterfields Bar Interior"
                        className="object-cover h-full w-full grayscale-[0.2] contrast-[1.1]"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00] via-transparent to-transparent opacity-80" />
                </div>
            </ContainerScroll>
        </section>
    );
};

"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";

export const Reservation = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <section id="reservation" className="py-24 bg-[#1A0A00] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Reservation Info */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Réservez <span className="gradient-text italic">votre table</span>
                        </h2>
                        <p className="text-[#A89070] text-lg mb-12">
                            Pour garantir votre place sur notre terrasse prisée ou dans un box feutré du pub, nous vous recommandons de réserver au moins 24h à l'avance.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="bg-[#231208] p-4 rounded-2xl border border-amber-500/10 group-hover:bg-[#C8860A] group-hover:text-[#1A0A00] transition-colors duration-500">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[#F5EDD6] font-bold mb-1">Téléphone</h3>
                                    <p className="text-[#A89070]">+212 621 1111 94</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-[#231208] p-4 rounded-2xl border border-amber-500/10 group-hover:bg-[#C8860A] group-hover:text-[#1A0A00] transition-colors duration-500">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[#F5EDD6] font-bold mb-1">Adresse</h3>
                                    <p className="text-[#A89070]">34 Rue de la Liberté, Marrakech 40000 <br /> (Hôtel Nassim, Guéliz)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-[#231208] p-4 rounded-2xl border border-amber-500/10 group-hover:bg-[#C8860A] group-hover:text-[#1A0A00] transition-colors duration-500">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-[#F5EDD6] font-bold mb-1">Horaires</h3>
                                    <p className="text-[#A89070]">Ouvert tous les jours : 12:00 – 02:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full lg:w-1/2 relative bg-[#231208] rounded-[40px] border border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] overflow-hidden flex items-center justify-center h-[800px] md:h-[600px]">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#231208] z-10 transition-opacity duration-500">
                                <p className="text-[#D4AF37] text-lg font-bold animate-pulse text-center px-4">
                                    Chargement du formulaire de réservation...
                                </p>
                            </div>
                        )}
                        <iframe
                            src="https://whatsform.com/_kDNQJ"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className={`w-full h-full filter invert-[0.9] hue-rotate-180 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                            onLoad={() => setIsLoading(false)}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

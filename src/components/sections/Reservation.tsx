"use client";

import React from "react";
import { Phone, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";

export const Reservation = () => {
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
                    <div className="w-full lg:w-1/2 p-8 md:p-12 bg-[#231208] rounded-[40px] border border-white/5 shadow-2xl relative">
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#F5EDD6]/60 font-bold px-4">Nom Complet</label>
                                    <input type="text" placeholder="John Doe" className="bg-[#1A0A00] border border-white/10 p-4 rounded-2xl text-[#F5EDD6] focus:border-amber-500 transition-colors outline-none" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#F5EDD6]/60 font-bold px-4">Date</label>
                                    <input type="date" className="bg-[#1A0A00] border border-white/10 p-4 rounded-2xl text-[#F5EDD6] focus:border-amber-500 transition-colors outline-none [color-scheme:dark]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#F5EDD6]/60 font-bold px-4">Convives</label>
                                    <select className="bg-[#1A0A00] border border-white/10 p-4 rounded-2xl text-[#F5EDD6] focus:border-amber-500 transition-colors outline-none">
                                        <option>2 Personnes</option>
                                        <option>3 Personnes</option>
                                        <option>4 Personnes</option>
                                        <option>5+ Personnes</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#F5EDD6]/60 font-bold px-4">Instant</label>
                                    <select className="bg-[#1A0A00] border border-white/10 p-4 rounded-2xl text-[#F5EDD6] focus:border-amber-500 transition-colors outline-none">
                                        <option>Midi</option>
                                        <option>Apéro</option>
                                        <option>Dîner</option>
                                        <option>Soirée</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-[#F5EDD6]/60 font-bold px-4">Demande Spéciale</label>
                                <textarea rows={3} placeholder="Optionnel..." className="bg-[#1A0A00] border border-white/10 p-4 rounded-2xl text-[#F5EDD6] focus:border-amber-500 transition-colors outline-none resize-none" />
                            </div>

                            <button type="submit" className="w-full py-5 bg-[#C8860A] text-[#1A0A00] font-bold rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(200,134,10,0.4)] flex items-center justify-center gap-3">
                                <Calendar className="w-5 h-5" /> Confirmer la Demande
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

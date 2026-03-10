"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, MapPin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#0A0500] py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-playfair text-3xl font-bold text-[#F5EDD6] tracking-widest uppercase mb-4">
                            Chesterfields
                        </h2>
                        <p className="text-[#A89070] text-sm max-w-sm font-inter leading-relaxed">
                            Le pub anglais iconique de Marrakech, situé à l'Hôtel Nassim. Une expérience immersive de mixologie et de gastronomie britannique au cœur du Maroc.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <div className="p-3 bg-white/5 rounded-full hover:bg-amber-500 hover:text-[#1A0A00] transition-all cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <div className="p-3 bg-white/5 rounded-full hover:bg-amber-500 hover:text-[#1A0A00] transition-all cursor-pointer">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="p-3 bg-white/5 rounded-full hover:bg-amber-500 hover:text-[#1A0A00] transition-all cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-[#F5EDD6] mb-6 uppercase tracking-widest text-xs">Espace Client</h4>
                        <ul className="space-y-4 text-sm text-[#A89070]">
                            <li className="hover:text-amber-500 transition-colors"><Link href="#menu">Notre Carte</Link></li>
                            <li className="hover:text-amber-500 transition-colors"><Link href="#galerie">Galerie Photos</Link></li>
                            <li className="hover:text-amber-500 transition-colors"><Link href="#reservation">Privatisation</Link></li>
                            <li className="hover:text-amber-500 transition-colors"><Link href="#reservation">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-[#F5EDD6] mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
                        <p className="text-[#A89070] text-xs mb-4">Inscrivez-vous pour recevoir nos actualités et événements live.</p>
                        <div className="flex flex-col gap-3">
                            <input type="email" placeholder="Email..." className="bg-white/5 border border-white/10 p-3 rounded-xl outline-none focus:border-amber-500 text-sm" />
                            <button className="bg-white/5 hover:bg-white/10 font-bold py-3 rounded-xl text-sm transition-all">S'inscrire</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-[#A89070] text-[10px] uppercase tracking-widest">
                        © {new Date().getFullYear()} Chesterfields Bar Marrakech. Tous droits réservés.
                    </p>
                    <p className="text-[#A89070] text-[10px] uppercase tracking-widest mt-4 md:mt-0">
                        Crafted with love for <span className="text-amber-500">Premium Experiences</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

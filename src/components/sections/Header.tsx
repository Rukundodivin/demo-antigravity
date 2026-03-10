"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar } from "lucide-react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "#accueil" },
        { name: "Ambiance", href: "#ambiance" },
        { name: "Carte", href: "#menu" },
        { name: "Galerie", href: "#galerie" },
        { name: "Témoignages", href: "#temoignages" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
                isScrolled ? "glass-header shadow-2xl py-4" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="#accueil" className="relative z-50">
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-playfair text-xl md:text-2xl tracking-[0.1em] md:tracking-[0.2em] font-bold uppercase transition-colors duration-500",
                            isScrolled ? "text-[#C8860A]" : "text-[#F5EDD6]"
                        )}>
                            Chesterfields
                        </span>
                        <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] md:tracking-[0.4em] uppercase text-amber-500/60 -mt-1">
                            Bar & Terrasse
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-wide text-[#F5EDD6]/80 hover:text-amber-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#reservation"
                        className="px-6 py-2.5 bg-[#C8860A] hover:bg-amber-600 text-[#1A0A00] rounded-full text-sm font-bold transition-all hover:scale-105 flex items-center gap-2"
                    >
                        <Calendar className="w-4 h-4" />
                        Réserver
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-[#F5EDD6]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-[#1A0A00] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-playfair text-[#F5EDD6] hover:text-amber-500"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="#reservation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 px-10 py-4 bg-[#C8860A] text-[#1A0A00] rounded-full text-lg font-bold"
                >
                    Réserver une table
                </Link>
            </div>
        </header>
    );
};

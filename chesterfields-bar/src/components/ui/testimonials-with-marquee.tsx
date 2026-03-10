"use client";

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";

interface Testimonial {
    author: {
        name: string;
        handle: string;
        avatar: string;
    };
    text: string;
}

export const TestimonialCard = ({ author, text }: Testimonial) => {
    return (
        <div className="flex w-[350px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#2C1A0E] to-[#1A0A00] p-6 shadow-xl whitespace-normal pointer-events-auto">
            <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                </div>
                <p className="text-[#F5EDD6]/90 leading-relaxed italic text-sm">
                    "{text}"
                </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
                <Avatar src={author.avatar} alt={author.name} className="h-10 w-10 border border-amber-500/20" />
                <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-[#F5EDD6]">
                        {author.name}
                    </span>
                    <span className="text-xs text-amber-500/60">{author.handle}</span>
                </div>
            </div>
        </div>
    );
};

export const TestimonialsSection = ({
    title,
    description,
    testimonials,
}: {
    title: string;
    description: string;
    testimonials: Testimonial[];
}) => {
    return (
        <section id="temoignages" className="py-24 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,134,10,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {title.split(" ").map((word, i) => (
                        <span key={i} className={word === "clients" ? "gradient-text" : ""}>
                            {word}{" "}
                        </span>
                    ))}
                </h2>
                <p className="text-[#A89070] text-lg max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="relative w-full group py-4">
                {/* Fade Gradients */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A0A00] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A0A00] to-transparent z-20 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <div
                        className="flex whitespace-nowrap animate-marquee gap-[1rem] py-4 px-4 group-hover:[animation-play-state:paused]"
                        style={{
                            "--duration": "40s",
                            "--gap": "1rem"
                        } as React.CSSProperties}
                    >
                        {/* Duplicate the list to ensure seamless looping */}
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

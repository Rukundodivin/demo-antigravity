"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
    className?: string;
    glow?: boolean;
    disabled?: boolean;
    spread?: number;
    proximity?: number;
    inactiveZone?: number;
    borderWidth?: number;
}

export const GlowingEffect = ({
    className,
    glow = true,
    disabled = false,
    spread = 40,
    proximity = 64,
    inactiveZone = 0.01,
    borderWidth = 3,
}: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (disabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Check if mouse is within proximity of the card
            const isWithinProximity =
                x > -proximity &&
                x < rect.width + proximity &&
                y > -proximity &&
                y < rect.height + proximity;

            if (isWithinProximity) {
                setMousePosition({ x, y });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [disabled, proximity]);

    if (disabled) return null;

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10",
                isHovered ? "opacity-100" : "opacity-0",
                className
            )}
        >
            <div
                className="absolute inset-0 rounded-[inherit] border-transparent"
                style={{
                    borderWidth: `${borderWidth}px`,
                    borderStyle: "solid",
                    background: `radial-gradient(${spread}px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-accent), transparent 100%) border-box`,
                    WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                }}
            />
            {glow && (
                <div
                    className="absolute inset-0 rounded-[inherit] blur-md opacity-40"
                    style={{
                        background: `radial-gradient(${spread * 1.5}px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-accent), transparent 100%)`,
                    }}
                />
            )}
        </div>
    );
};

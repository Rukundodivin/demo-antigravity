import React from "react";
import { cn } from "@/lib/utils";

export const Avatar = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    return (
        <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
            <img
                className="aspect-square h-full w-full object-cover"
                src={src}
                alt={alt}
            />
        </div>
    );
};

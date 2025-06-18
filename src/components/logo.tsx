"use client";

import Image from "next/image";

export default function Logo({ 
    src,
    width,
    height,
    className,
} : { 
    src: string;
    width: number;
    height: number;
    className?: string | undefined;
}) {
    return (
        <Image 
            src={src}
            width={width}
            height={height}
            alt="Logo da Garanti"
            className={className}
        />
    )
}
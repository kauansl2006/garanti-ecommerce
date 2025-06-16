"use client";

import Image from "next/image";

export default function Logo({ src } : { src: string}) {
    return (
        <Image 
            src={src}
            width={200}
            height={70}
            alt="Logo da Garanti"
        />
    )
}
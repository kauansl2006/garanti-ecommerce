"use client";

import Image from "next/image";

export default function Logo() {
    return (
        <Image 
            src="/light-logo.svg"
            width={200}
            height={70}
            alt="Logo da Garanti"
        />
    )
}
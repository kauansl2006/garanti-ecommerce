"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

export default function Banner() {
    return (
        <div className="w-full h-full flex items-center justify-center rounded-4px bg-neutral-300 relative">
            <Image
                src="/banner-1.png"
                width={312}
                height={761}
                alt="Banner 1"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
            />

            <Link
                href="#"
                className="absolute top-[30%] bg-secondary text-white cursor-pointer rounded-[4px] w-[191px] h-[56px] flex items-center justify-center gap-x-[12px] px-[32px] text-h-05 leading-h-05 text-nowrap font-bold"
            >
                VER AGORA
                <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
            </Link>
        </div>
    )
}
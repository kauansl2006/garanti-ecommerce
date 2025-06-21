"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";

import { Widget } from "@/lib/definitions";

import { Badge } from "@/components/ui/badge";

export default function WidgetCard({ 
    widget, 
    headingSize, 
    padding 
}: { 
    widget: Widget, 
    headingSize?: string,
    padding?: "lg" | "md"
}) {
    return (
        <div className={`w-full h-full flex ${widget.imagePosition === "left" ? "flex-row-reverse" : "flex-row"} items-center justify-between ${widget.backgroundColor === "light" ? "bg-[#d4d4d4]" : "bg-[#1f1f1f]"} rounded-[6px] ${padding === "lg" ? "p-[6.42%]" : "p-[3.42%]"} gap-x-[36px] relative`}>
            <div className="absolute top-[6.42%] right-[3.42%] flex flex-col items-start justify-start gap-y-[12px] z-10">
                {widget.discount && (
                    <Badge
                        variant="default"
                        className="px-[10px] py-[5px] rounded-[4px] text-b-t leading-b-t font-semibold bg-yellow-300 text-nowrap text-neutral-900"
                    >
                        {widget.discount}
                    </Badge>
                )}

                {widget.price && (
                    <div className="w-[124px] h-[124px] flex items-center justify-center text-center border-[3px] border-background p-[24px] rounded-full bg-success text-nowrap">
                        <p className="text-b-xl leading-b-xl font-medium text-white">
                            {`R$ ${widget.price}`}
                        </p>
                    </div>
                )}
            </div>

            <div className="flex flex-col items-start justify-start gap-y-[24px]">
                <div className="w-full flex-col items-start justify-start gap-y-[16px]">
                    {widget.caption && (
                        <div
                            className={`text-b-sm leading-b-sm font-semibold ${widget.backgroundColor === "light" ? "text-black" : "text-white"}`}
                        >
                            {widget.caption}
                        </div>
                    )}

                    {widget.size === "lg" && (
                        <h1
                            className={`${headingSize ? `text-${headingSize} leading-${headingSize}`: "text-d-03 leading-d-03"} font-semibold ${widget.backgroundColor === "light" ? "text-black" : "text-white"}`}
                        >
                            {widget.title}
                        </h1>
                    )}

                    {widget.size === "md" && (
                        <h1
                            className={`text-h-03 leading-h-03 font-semibold ${widget.backgroundColor === "light" ? "text-black" : "text-white"}`}
                        >
                            {widget.title}
                        </h1>
                    )}

                    {widget.description && (
                        <p className="text-b-lg leading-b-lg font-normal text-neutral-700">
                            {widget.description}
                        </p>
                    )}
                </div>

                {widget.size === "lg" && (
                    <Link
                        href={widget.href}
                        className="bg-secondary text-white cursor-pointer rounded-[4px] w-[191px] h-[56px] flex items-center justify-center gap-x-[12px] px-[32px] text-h-05 leading-h-05 text-nowrap font-bold"
                    >
                        VER AGORA
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                )}

                {widget.size === "md" && (
                    <Link
                        href={widget.href}
                        className="bg-secondary text-white cursor-pointer rounded-[4px] w-[171px] h-[46px] flex items-center justify-center gap-x-[12px] px-[22px] text-h-05 leading-h-05 text-nowrap font-bold"
                    >
                        VER AGORA
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                )}
            </div>

            <div className="w-[100%] h-[100%] relative">
                <Image
                    src={widget.imagePath}
                    width={370}
                    height={520}
                    alt={`Imagem do ${widget.title}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

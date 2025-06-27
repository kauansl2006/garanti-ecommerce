"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function Widgets() {
    return (
        <section className="w-full h-full flex items-center justify-between gap-x-[24px] mt-[60px] md:mt-[0px] py-[24px] px-[5.625%] xl:px-[15.625%]">
            <Widget />
            <SmallWidgets />
        </section>
    )
}

function Widget() {
    return (
        <div className="2xl:w-[872px] 2xl:h-[520px] w-full h-full flex flex-col-reverse md:flex-row items-center justify-center gap-[36px] bg-neutral-300 rounded-[4px] p-[20px] md:p-[50px]">

            <div className="flex flex-col items-center sm:items-start gap-y-[24px]">
                <div className="flex flex-col items-center sm:items-start gap-y-[16px]">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="text-b-sm leading-b-sm font-semibold text-blue-500">
                            - THE BEST PLACE TO PLAY
                        </div>

                        <h3 className="text-d-05 leading-d-05 md:text-d-04 md:leading-d-04 xl:text-d-03 xl:leading-d-03 font-semibold">
                            Console Xbox
                        </h3>
                    </div>

                    <p className="text-b-sm leading-b-sm md:text-b-md md:leading-b-md xl:text-b-lg xl:leading-b-lg font-normal text-neutral-700">
                        Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for 12 USD.
                    </p>
                </div>

                <Link href="#" className="w-[182px] lg:w-[192px] lg:h-[36px] flex items-center justify-center gap-x-[12px] px-[24px] lg:px-[32px] bg-secondary text-white text-[12px]/[46px] lg:text-[15px]/[56px] font-bold text-nowrap rounded-[4px]" >
                    VER AGORA
                    <ArrowRightIcon className="size-[20px] md:size-[24px] stroke-[1.5px]" />
                </Link>
            </div>

            <div className="max-w-[368px] max-h-[408px] w-full h-full relative">
                <Image
                    src="/xbox.png"
                    width={368}
                    height={408}
                    alt="Imagem do Xbox"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }}
                />
                <div className="bg-success text-white text-center text-[18px]/[100px] md:text-[22px]/[100px] font-semibold rounded-full px-[20px] md:px-[24px] size-[96px] md:size-[100px] absolute top-0 right-0">
                    $299
                </div>
            </div>
        </div>
    )
}

function SmallWidgets() {
    return (
        <div className="2xl:max-w-[424px] w-full h-full hidden 2xl:flex flex-col items-center justify-center gap-y-[24px]">
            <div className="max-w-[424px] max-h-[248px] w-full h-full flex items-center justify-between  bg-neutral-900 rounded-[4px] p-[35px]">

                <div className="flex flex-col items-start gap-y-[18px]">
                    <div className="flex flex-col items-start gap-y-[8px]">
                        <div className="text-l-sm leading-l-sm font-semibold text-warning">
                            SUMMER SALES
                        </div>

                        <h3 className="text-h-03 leading-h-03 font-semibold text-white">
                            New Google Pixel 6 Pro
                        </h3>
                    </div>

                    <Link href="#" className="max-w-[166px] max-h-[48px] flex items-center justify-center gap-x-[8px] px-[24px] bg-secondary text-white text-[14px]/[48px] font-bold text-nowrap rounded-[4px]" >
                        VER AGORA
                        <ArrowRightIcon className="size-[20px] stroke-[1.5px]" />
                    </Link>
                </div>

                <div className="max-w-[312px] max-h-[312px] w-full h-full relative">
                    <Image
                        src="/google-pixel-6-pro.png"
                        width={312}
                        height={312}
                        alt="Imagem do Smartphone"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }}
                    />
                    <Badge
                        variant="default"
                        className="px-[12px] py-[4px] rounded-[4px] text-b-md leading-b-md font-semibold bg-yellow-300 text-neutral-900 absolute top-[-10px] right-[-10px]"
                    >
                        22% OFF
                    </Badge>
                </div>
            </div>

            <div className="max-w-[424px] max-h-[248px] w-full h-full flex items-center justify-between gap-x-[20px] bg-neutral-300 rounded-[4px] p-[35px]">
             <div className="max-w-[312px] max-h-[312px] w-full h-full relative">
                    <Image
                        src="/xiaomi-flip-buds-pro.png"
                        width={312}
                        height={312}
                        alt="Imagem dos Fones"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }}
                    />
                </div>

                <div className="flex flex-col items-start gap-y-[18px]">
                    <div className="flex flex-col items-start gap-y-[12px]">
                        <h3 className="text-h-03 leading-h-03 font-semibold">
                            Xiaomi FlipBuds Pro
                        </h3>
                        <div className="text-b-lg leading-b-lg font-semibold text-blue-500">
                            $299 USD
                        </div>
                    </div>

                    <Link href="#" className="max-w-[166px] max-h-[48px] flex items-center justify-center gap-x-[8px] px-[24px] bg-secondary text-white text-[14px]/[48px] font-bold text-nowrap rounded-[4px]" >
                        VER AGORA
                        <ArrowRightIcon className="size-[20px] stroke-[1.5px]" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
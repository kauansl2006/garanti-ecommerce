"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const Banners = () => {
    return (
        <section className="w-full 2xl:h-[336px] px-[5.625%] xl:px-[15.625%] flex flex-col 2xl:flex-row gap-[24px]">
           
            <div className="2xl:max-w-[648px] w-full h-full p-[44px] hidden sm:flex items-center bg-neutral-300 rounded-[4px] gap-x-[40px] relative">
                <div className="w-[280px] flex flex-col items-start gap-y-[20px] z-10">
                    <div className="flex flex-col items-start gap-y-[12px]">
                        <div className="flex flex-col items-start gap-y-[8px]">
                            <Badge
                                variant="default"
                                className="text-b-sm leading-b-sm font-semibold text-white bg-[#2DA5F3] px-[12px] h-[32px] rounded-none"
                            >
                                INTRODUCING
                            </Badge>

                            <h1 className="text-h-01 leading-h-01 font-semibold text-neutral-900">
                                New Apple <br/>
                                Homepod Mini
                            </h1>
                        </div>

                        <p className="text-b-md leading-b-md text-normal text-neutral-700">
                            Jam-packed with innovation, HomePod mini delivers unexpectedly.
                        </p>
                    </div>

                    <Link href="#" className="h-[48px] flex items-center justify-center gap-x-[8px] px-[24px] rounded-[4px] bg-secondary text-white text-[15px]/[56px] font-bold text-nowrap" >
                        VER AGORA
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                </div>

                <div className="w-[204px] h-[204px] absolute right-[44px]">
                    <Image
                        src="/banners/apple-homepod-mini.png"
                        fill={true}
                        alt="Apple Homepod Mini"
                    />                
                </div>
            </div>

            <div className="2xl:max-w-[648px] w-full h-full p-[44px] flex items-center bg-neutral-900 rounded-[4px] gap-x-[40px] relative">
                <div className="w-[300px] flex flex-col items-start gap-y-[20px] z-10">
                    <div className="flex flex-col items-start gap-y-[12px]">
                        <div className="flex flex-col items-start gap-y-[8px]">
                            <Badge
                                variant="default"
                                className="text-b-sm leading-b-sm font-semibold text-neutral-900 bg-warning px-[12px] h-[32px] rounded-none"
                            >
                                INTRODUCING NEW
                            </Badge>

                            <h1 className="text-h-01 leading-h-01 font-semibold text-white">
                                Xiaomi Mi 11 Ultra 12GB+256GB
                            </h1>
                        </div>

                        <p className="text-b-md leading-b-md text-normal text-neutral-400 line-clamp-2">
                        *Data provided by internal laboratories. Industry measurment.
                        </p>
                    </div>

                    <Link href="#" className="h-[48px] flex items-center justify-center gap-x-[8px] px-[24px] rounded-[4px] bg-secondary text-white text-[15px]/[56px] font-bold text-nowrap" >
                        VER AGORA
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                </div>

                <div className="w-[312px] h-[312px] hidden sm:block absolute bottom-0 right-0">
                    <Image
                        src="/banners/smartphones.png"
                        fill={true}
                        alt="Apple Homepod Mini"
                    />
                </div>
            </div>
        </section>
    )
}
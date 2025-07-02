"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { ProductCard } from "@/components/products";

import { products } from "@/lib/placeholder-data";

export const FeaturedCategories = () => {
    return (
        <section className="w-full flex items-start justify-between gap-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] xl:py-[72px]">
            <div className="w-full flex flex-col items-center justify-center gap-y-[24px]">
                <div className="w-full flex-col xl:flex-row flex items-center justify-between">
                    <h3 className="text-h-03 leading-h-03 font-semibold">
                        Computadores e Laptops
                    </h3>

                    <div className="flex items-center justify-between gap-x-[16px]">
                        <div className="hidden md:flex items-center justify-center">
                            <Link
                                href="#"
                                className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] p-[8px] border-b-[2px] border-primary"
                            >
                                Videogames
                            </Link>
                            <Link
                                href="#"
                                className="text-nowrap text-b-sm leading-b-sm font-normal flex items-center justify-start gap-x-[8px] p-[8px] text-neutral-600"
                            >
                                Laptops
                            </Link>
                            <Link
                                href="#"
                                className="text-nowrap text-b-sm leading-b-sm font-normal flex items-center justify-start gap-x-[8px] p-[8px] text-neutral-600"
                            >
                                SmartPhones
                            </Link>
                        </div>
                        <Link
                            href="#"
                            className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-primary"
                        >
                            Visualizar todos os produtos
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>
                    </div>
                </div>

                <div className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] items-center justify-center">
                    {products.slice(0, 8).map((product) => (
                        <div
                            key={product.id}
                            className="md:max-w-[248px] w-full h-full"
                        >
                            <ProductCard
                                product={product}
                                size="md"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden 2xl:flex flex-col gap-y-[24px] max-w-[312px] h-[716px] w-full">
                <div className="flex flex-col items-center justify-center gap-y-[24px] p-[32px] bg-[#F7E99E] rounded-[4px]">
                    <div className="flex items-center justify-center flex-col gap-y-[16px]">
                        <div className="w-[108px] h-[108px] relative">
                            <Image
                                src="/banners/banner-2.png"
                                fill={true}
                                alt="Banner 2"
                            />
                        </div>
                        <div className="flex items-center justify-center flex-col gap-y-[8px]">
                            <h2 className="text-h-02 leading-h-02 w-[290px] text-center font-semibold">
                                Xiaomi True Wireless Earbuds
                            </h2>
                            <p className="text-b-md leading-b-md text-center line-clamp-2 font-normal text-neutral-700">
                                Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-center gap-[8px]">
                            <p className="text-b-sm leading-b-sm font-medium text-neutral-900">
                                Only for:
                            </p>
                            <Badge
                                variant="default"
                                className="px-[8px] py-[6px] rounded-[4px] text-b-sm leading-b-sm font-semibold text-neutral-900 bg-white"
                            >
                                $299 USD
                            </Badge>
                        </div>
                    </div>

                    <Link href="#" className="w-full h-[48px] flex items-center justify-center gap-x-[12px] px-[32px] rounded-[4px] bg-primary text-white text-[15px]/[56px] font-bold text-nowrap" >
                        VER AGORA
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                </div>

                <div className="flex flex-col items-center justify-center w-full max-h-[264px] h-full px-[24px] py-[40px] bg-[#124261] rounded-[4px] gap-y-[24px]">
                    <div className="flex items-center justify-center flex-col gap-y-[12px]">
                        <Badge
                            variant="default"
                            className="px-[8px] py-[6px] rounded-[4px] text-b-sm leading-b-sm font-semibold text-white bg-[#ffffff1f]"
                        >
                            SUMMER SALES
                        </Badge>

                        <h2 className="text-h-02 leading-h-02 text-center font-semibold text-white">
                            37% DISCOUNT
                        </h2>

                        <p className="text-b-md leading-b-md font-normal text-white text-center">only for <strong className="text-warning">SmartPhone</strong> product.</p>
                    </div>

                    <Link href="#" className="w-full h-[48px] flex items-center justify-center gap-x-[12px] px-[32px] rounded-[4px] bg-[#2DA5F3] text-white text-[15px]/[56px] font-bold text-nowrap" >
                        VER AGORA
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                </div>
            </div>
        </section>
    )
}



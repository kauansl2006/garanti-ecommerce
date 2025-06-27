"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { ProductCard } from "@/components";

import { products } from "@/lib/placeholder-data";

export default function FeaturedProducts() {
    return (
        <section className="w-full flex items-start justify-between gap-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] xl:py-[72px]">
            <div className="hidden 2xl:block max-w-[312px] w-full h-full">
                <FeaturedBanner />
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-y-[24px]">
                <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-y-[8px]">
                    <h3 className="text-h-03 leading-h-03 font-semibold">
                        Produtos em Destaque
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
                            className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-blue-500"
                        >
                            Visualizar todos os produtos
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>
                    </div>
                </div>

                <div className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] items-center justify-center">
                    {products.slice(0, 8).map((product) => (
                        <div key={product.id} className="md:max-w-[248px] w-full h-full" >
                            <ProductCard
                                product={product}
                                size="md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeaturedBanner() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center rounded-[4px] bg-[#F3DE6D]">
            <div className="w-full h-full flex flex-col items-center justify-center gap-[16px] px-[20px] py-[30px]">
                <div className="w-full h-full flex flex-col items-center justify-center gap-[12px]">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-[8px]">
                        <p className="text-b-sm leading-b-sm font-semibold text-[#BE4646]">
                            COMPUTER & ACCESSORIES
                        </p>
                        <h1 className="text-h-01 leading-h-01 text-center font-semibold text-neutral-900">
                        32% Discount
                        </h1>
                    </div>

                    <p className="text-b-md leading-b-md font-normal text-neutral-700">
                        For all ellectronics products
                    </p>
                </div>

                <div className="w-full flex items-center justify-center gap-[8px]">
                        <p className="text-b-sm leading-b-sm font-medium text-neutral-900">
                            Offers ends in:
                        </p>
                        <Badge
                            variant="default"
                            className="px-[8px] py-[6px] rounded-[4px] text-b-sm leading-b-sm font-semibold text-neutral-900 bg-white"
                        >
                            ENDS OF CHRISTMAS
                        </Badge>
                </div>
            </div>

            <Link href="#" className="w-[191px] h-[56px] flex items-center justify-center gap-x-[12px] px-[32px] rounded-[4px] bg-secondary text-white text-[15px]/[56px] font-bold text-nowrap" >
                VER AGORA
                <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
            </Link>

            <div className="w-[312px] h-[428px] relative">
                <Image 
                    src="/banners/banner-1.jpg"
                    fill={true}
                    alt="Banner 1"
                />
            </div>
        </div>
    )
}


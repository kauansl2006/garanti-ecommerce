"use client";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { featuredProducts } from "@/lib/placeholder-data";

import Banner from "@/components/banner";
import ProductCard from "@/components/product-card";

export default function FeaturedProducts() {
    return (
        <section className="w-full flex items-start justify-between gap-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] xl:py-[72px]">
            <div className="hidden 2xl:block max-w-[312px] w-full h-full">
                <Banner 
                    src="/banners/banner-1.png" 
                    width={312}
                    height={761}
                    alt="Banner 1"
                    backgroundColor="#d4d4d4"
                />
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-y-[24px]">
                <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-y-[8px]">
                    <h3 className="text-h-03 leading-h-03 font-semibold text-nowrap">
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

                <div className="w-full grid grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(4,auto)] items-center justify-center">
                    {featuredProducts.map((product) => (
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


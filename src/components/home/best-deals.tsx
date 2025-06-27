"use client";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { ProductCard } from "@/components";

import { products } from "@/lib/placeholder-data";

export const BestDeals = () => {
    const maxScore = Math.max(...products.map((product) => product.score ?? 0));
    const topProduct = products.find((product) => product.score === maxScore);
    const otherProducts = products.filter((product) => product.id !== topProduct?.id);

    return (
        <section className="w-full flex flex-col items-center justify-center gap-y-[24px] px-[5.625%] xl:px-[15.625%] py-[72px]">
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col xl:flex-row items-center md:items-start xl:items-center justify-between gap-x-[24px]">
                    <h3 className="text-h-03 leading-h-03 font-semibold">
                        Melhores Ofertas
                    </h3>

                    <p className="flex flex-col sm:flex-row items-center justify-between gap-x-[12px]">
                        Oferta termina em:
                        <time
                            dateTime="2025-06-30T23:59:00-03:00"
                            className="bg-yellow-200 text-neutral-900 px-[12px] py-[6px] rounded-[4px]"
                        >
                            11d : 06h : 20m : 45s
                        </time>
                    </p>
                </div>

                <Link
                    href="#"
                    className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-blue-500"
                >
                    Visualizar todos os produtos
                    <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                </Link>
            </div>

            <div className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] 2xl:grid-cols-[repeat(5,1fr)] items-center justify-center">
                {topProduct && (
                    <div key={topProduct.id} className="md:hidden xl:block row-span-2 xl:max-w-[328px] w-full h-full" >
                        <ProductCard product={topProduct} size="lg" />
                    </div>
                )}

                {otherProducts.map((product) => (
                    <div key={product.id} className="md:max-w-[248px] w-full h-full" >
                        <ProductCard product={product} size="md" />
                    </div>
                ))}
            </div>
        </section >
    );
}

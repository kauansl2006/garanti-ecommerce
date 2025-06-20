"use client";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import ProductCard from "@/components/product-card";
import { bestDeals } from "@/lib/placeholder-data";

export default function BestDeals() {
    return (
        <section  className="w-full flex flex-col items-center justify-center gap-y-[24px] px-[15.625%] py-[72px]">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-between gap-x-[24px]">
                    <h3 className="text-h-03 leading-h-03 font-semibold">
                        Melhores Ofertas
                    </h3>

                    <p className="flex items-center justify-between gap-x-[12px]">
                        Oferta termina em:
                        <time dateTime="2025-06-30T23:59:00-03:00" className="bg-yellow-200 text-neutral-900 px-[12px] py-[6px] rounded-[4px]">
                            11d : 06h : 20m : 45s
                        </time>
                    </p>
                </div>

                <Link href="#" className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-blue-500" >
                    Visualizar todos os produtos
                    <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                </Link>              
            </div>

            <div className="w-full grid grid-cols-[repeat(5,auto)] items-center justify-center">
                {bestDeals.map((product) => (
                    <div key={product.id} className={
                        product.isHot && product.score ? 
                        "row-span-2 max-w-[328px] w-full h-full" : 
                        "max-w-[248px] w-full h-full"
                    }>
                        <ProductCard 
                            product={product}
                            size={product.isHot && product.score ? "lg" : "md"} 
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
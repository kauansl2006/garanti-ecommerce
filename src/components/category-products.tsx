"use client";

import Image from "next/image";
import Link from "next/link";

import { categoryProducts } from "@/lib/placeholder-data";

export default function CategoryProducts() {
    return (
        <section className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] 2xl:grid-cols-[repeat(4,1fr)] gap-y-[24px] items-start gap-x-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] md:py-[72px]">
            {categoryProducts.map((category) => (
                <div key={category.id} className="w-full flex flex-col items-start justify-start gap-y-[16px]">
                    <h5 className="text-b-md leading-b-md font-semibold">
                        {category.title}
                    </h5>

                    {category.products.map((product) => (
                        <div key={product.id} className="md:w-max-[312px] h-max-[104px] w-full h-full p-[12px] bg-white rounded-[4px] border-[1px] border-neutral-300 flex items-center justify-between gap-x-[12px]">
                            <div className="max-w-[80px] max-h-[80px] w-full h-full">
                                <Image
                                    src={product.thumbnail}
                                    width={80}
                                    height={80}
                                    alt={`Imagem do ${product.title}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-col items-start justify-start gap-y-[8px]">
                                <Link
                                    href="#"
                                    className="hover:underline text-b-sm leading-b-sm font-normal line-clamp-2 text-ellipsis overflow-hidden w-[196px]"
                                >
                                    {product.title}
                                </Link>
                                <h3 className="text-b-sm leading-b-sm font-normal text-blue-500">
                                    R$ {product.price.toFixed(2)}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}
"use client";

import Image from "next/image";
import Link from "next/link";

import { categoryProducts } from "@/lib/placeholder-data";

export default function CategoryProducts() {
    return (
        <section className="w-full flex items-start justify-between gap-x-[24px] py-[72px] px-[15.625%]">
            {categoryProducts.map((category) => (
                <div key={category.id} className="flex flex-col items-start justify-start gap-y-[16px]">
                    <h5 className="text-b-md leading-b-md font-semibold">
                        {category.title}
                    </h5>

                    {category.products.map((product) => (
                        <div className="w-max-[312px] h-max-[104px] w-full h-full p-[12px] bg-white rounded-[4px] border-[1px] border-neutral-300 flex items-center justify-between gap-x-[12px]">
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
"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/definitions";

export const SmallProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="md:w-max-[312px] h-max-[104px] w-full h-full p-[12px] bg-white rounded-[4px] border-[1px] border-neutral-300 flex items-center justify-between gap-x-[12px]">
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
                    href={`/product-details/${product.id}`}
                    className="hover:underline text-b-sm leading-b-sm font-normal line-clamp-2 text-ellipsis overflow-hidden w-[196px]"
                >
                    {product.title}
                </Link>
                <h3 className="text-b-sm leading-b-sm font-normal text-primary">
                    R$ {product.price.toFixed(2)}
                </h3>
            </div>
        </div>
    );
};

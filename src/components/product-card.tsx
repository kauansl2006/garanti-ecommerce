"use client";

import Link from "next/link";
import Image from "next/image";

import { EyeIcon, HeartIcon, ShoppingBagIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Product } from "@/lib/definitions";

export default function ProductCard({
    product,
    size,
}: {
    product: Product;
    size: "lg" | "md";
}) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-[8px] rounded-[4px] bg-white border-[1px] border-neutral-300 p-[12px] relative">
            <div className="absolute top-[12px] left-[12px] flex flex-col items-start justify-start gap-y-[8px] z-10">
                {product.discount && (
                    <Badge
                        variant="default"
                        className="px-[10px] py-[5px] rounded-[4px] text-b-xs leading-b-xs font-semibold bg-yellow-300 text-neutral-900"
                    >
                        {product.discount}% OFF
                    </Badge>
                )}
                {product.isHot && (
                    <Badge
                        variant="default"
                        className="px-[10px] py-[5px] rounded-[4px] text-b-xs leading-b-xs font-semibold bg-danger text-white"
                    >
                        HOT
                    </Badge>
                )}
                {!product.isAvailable && (
                    <Badge
                        variant="default"
                        className="px-[10px] py-[5px] rounded-[4px] text-b-xs leading-b-xs font-semibold bg-neutral-400"
                    >
                        ESGOTADO
                    </Badge>
                )}
            </div>

            <div className="w-[100%] h-[100%] relative group">
                <Image
                    src={product.thumbnail}
                    width={263}
                    height={190}
                    alt={`Imagem do ${product.title}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
                {size === "md" && (
                    <div className="absolute top-0 w-full h-full bg-[#00000033] hidden group-hover:flex items-center justify-center gap-x-[8px]">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer w-[48px] h-[48px] rounded-full bg-white hover:bg-secondary hover:text-white p-[12px]"
                        >
                            <HeartIcon className="size-[28px] stroke-[1.5px]" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer w-[48px] h-[48px] rounded-full bg-white hover:bg-secondary hover:text-white p-[12px]"
                        >
                            <ShoppingBagIcon className="size-[28px] stroke-[1.5px]" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer w-[48px] h-[48px] rounded-full bg-white hover:bg-secondary hover:text-white p-[12px]"
                        >
                            <EyeIcon className="size-[28px] stroke-[1.5px]" />
                        </Button>
                    </div>
                )}
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-y-[8px]">
                {product.score && (
                    <div className="flex start items-start justify-start gap-x-[6px]">
                        <Rating score={product.score} />
                        <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                            {`(${product.score})`}
                        </span>
                    </div>
                )}

                <Link
                    href="#"
                    className="hover:underline text-b-sm leading-b-sm font-normal"
                >
                    {product.title}
                </Link>
                <h3 className="text-b-xl leading-b-xl font-normal text-blue-500">
                    R$ {product.price.toFixed(2)}
                </h3>

                {size === "lg" && (
                    <>
                        <p className="text-b-sm leading-b-sm text-normal text-neutral-600">
                            {product.description}
                        </p>

                        <div className="w-full flex items-center justify-between gap-x-[8px]">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="cursor-pointer w-[48px] h-[48px] rounded-[4px] hover:bg-neutral-300 p-[12px]"
                            >
                                <HeartIcon className="size-[28px] stroke-[1.5]" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="default"
                                className="cursor-pointer h-[48px] rounded-[4px] flex item-center justify-center gap-x-[8px] p-[12px]"
                            >
                                <ShoppingBagIcon className="size-[28px] stroke-[1.5] text-white" />
                                ADICIONAR A BAG
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="cursor-pointer w-[48px] h-[48px] rounded-[4px] hover:bg-neutral-300 p-[12px]"
                            >
                                <EyeIcon className="size-[28px] stroke-[1.5]" />
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function Rating({ score }: { score: number }) {
    if (score > 0 && score <= 10) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon className="size-[20px]" fill="#EBC80C" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 10 && score <= 20) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 20 && score <= 30) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 30 && score <= 40) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 40) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    }
}

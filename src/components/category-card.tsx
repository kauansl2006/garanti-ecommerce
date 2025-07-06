"use client";

import Image from "next/image";
import Link from "next/link";

import { Category } from "@/lib/definitions";

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-[16px] px-[12px] py-[24px] rounded-[4px] border-[1px] border-neutral-300 bg-white">
            <div className="max-w-[148px] max-h-[148px]">
                <Image
                    src={category.imagePath}
                    width={148}
                    height={148}
                    alt={`Imagem da categoria ${category.title}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>

            <div className="flex items-center justify-center">
                <Link
                    href={category.href}
                    className="text-b-md leading-b-md font-medium text-center hover:underline"
                >
                    {category.title}
                </Link>
            </div>
        </div>
    );
};

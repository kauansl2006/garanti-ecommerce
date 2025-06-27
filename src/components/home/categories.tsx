"use client";

import Link from "next/link";
import Image from "next/image";

import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious
} from "@/components/ui/carousel";

import { Category } from "@/lib/definitions";
import { categories } from "@/lib/placeholder-data";

export default function Categories() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-y-[24px] md:gap-y-[40px] px-[5.625%] md:px-[10.625%] xl:px-[15.625%]">
            <h1 className="text-center text-nowrap md:text-wrap text-h-03 leading-h-03 xl:text-h-01 xl:leading-h-01 font-semibold">
                Busque por Categorias
            </h1>
            <Carousel className="w-full">
                <CarouselContent>
                    {categories.map((category) => (
                        <CarouselItem className="basis-full xl:basis-1/6 max-w-[205px] max-h-[236px]" key={category.id}>
                            <CategoryCard category={category} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious variant="secondary" className="cursor-pointer size-[48px] hover:bg-secondary hidden md:inline-flex" />
                <CarouselNext variant="secondary" className="cursor-pointer size-[48px] hover:bg-secondary hidden md:inline-flex" />
            </Carousel>
        </section>
    )
}

function CategoryCard({ category }: { category: Category }) {
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
                <Link href={category.href} className="text-b-md leading-b-md font-medium text-center hover:underline">
                    {category.title}
                </Link>
            </div>
        </div>
    )
}

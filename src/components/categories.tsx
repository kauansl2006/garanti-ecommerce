"use client";

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
import Link from "next/link";

export default function Categories() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-y-[40px] px-[15.625%]">
            <h1 className="text-center text-h-01 leading-h-01 font-semibold">Busque por Categorias</h1>
                <Carousel className="w-full">
                    <CarouselContent>
                        {categories.map((category) => (
                            <CarouselItem className="basis-1/6" key={category.id}>
                                <CategoryCard category={category} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant="secondary" className="cursor-pointer size-[48px] hover:bg-secondary" />
                    <CarouselNext variant="secondary" className="cursor-pointer size-[48px] hover:bg-secondary" />
                </Carousel>
        </section>
    )
}

function CategoryCard({ category }: { category: Category}) {
    return (
        <div className="max-w-[205px] max-h-[236px] w-full h-full flex flex-col items-center justify-center gap-y-[16px] px-[12px] py-[24px] rounded-[4px] border-[1px] border-neutral-300 bg-white">
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
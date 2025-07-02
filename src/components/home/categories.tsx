import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious
} from "@/components/ui/carousel";

import { CategoryCard } from "@/components/products/category-card";

import { categories } from "@/lib/placeholder-data";

export const Categories = () => {
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
                <CarouselPrevious variant="default" className="cursor-pointer size-[48px] hover:bg-primary hidden md:inline-flex" />
                <CarouselNext variant="default" className="cursor-pointer size-[48px] hover:bg-primary hidden md:inline-flex" />
            </Carousel>
        </section>
    )
}



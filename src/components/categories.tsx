import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious
} from "@/components/ui/carousel";

import { categories } from "@/lib/placeholder-data";

import CategoryCard from "@/components/category-card";

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

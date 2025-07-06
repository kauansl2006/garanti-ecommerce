"use client";

import Link from "next/link";

import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronDownIcon,
    HomeIcon,
    SearchIcon,
    XIcon,
} from "lucide-react";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/placeholder-data";
import {
    VerticalFilterBar,
    HorizontalFilterBar,
} from "@/components/filter-bars";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Shop() {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Breadcrumb
                breadcrumbs={[
                    {
                        icon: HomeIcon,
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Comprar",
                        href: "/shop",
                        active: true,
                    },
                ]}
            />
            <section className="w-full h-full flex items-start justify-center  gap-x-[24px] pt-[74px] md:pt-[40px] pb-[72px] px-[5.625%] xl:px-[15.625%]">
                <div className="hidden xl:block">
                    <VerticalFilterBar />
                </div>

                <div className="max-w-[984px] w-full flex flex-col items-center justify-between gap-y-[18px]">
                    <div className="max-w-[984px] w-full flex flex-col items-center justify-between gap-y-[18px] bg-white border-[1px] border-neutral-300 rounded-[4px] p-[20px]">
                        <div className="w-full flex items-center justify-between">
                            <div className="hidden md:flex lg:flex max-w-[440px] xl:max-w-[540px] w-[100%] items-center justify-center relative">
                                <SearchIcon className="size-[18px] stroke-[1.5] text-neutral-900 absolute left-[10px]" />
                                <Input
                                    type="text"
                                    placeholder="Procure por produtos aqui..."
                                    className="rounded-l-[4px] rounded-r-none pl-[40px] h-[38px] xl:h-[42px]"
                                />
                                <Button
                                    variant="default"
                                    size="default"
                                    className="cursor-pointer rounded-l-none rounded-r-[4px] h-[38px] xl:h-[42px]"
                                >
                                    Pesquisar
                                </Button>
                            </div>

                            <div className="flex items-center justify-center gap-[18px]">
                                <p className="text-b-sm leading-b-sm font-normal text-nowrap">
                                    Ordenar por
                                </p>

                                <DropdownMenu>
                                    <DropdownMenuTrigger className="h-[44px] text-b-sm leading-b-sm border-[1px] border-neutral-300 rounded-[4px] px-[14px] w-full flex items-center justify-between gap-[8px]">
                                        Mais Populares
                                        <ChevronDownIcon className="size-[18px] stroke-[1.5] text-neutral-500" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem className="h-[44px] text-b-sm leading-b-sm px-[14px]">
                                            Melhor Avaliação
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="h-[44px] text-b-sm leading-b-sm px-[14px]">
                                            Melhores Ofertas
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between px-[24px] py-[12px] rounded-[4px] bg-neutral-200">
                            <div className="hidden sm:flex items-center justify-center gap-[16px] overflow-x-hidden">
                                <p className="text-b-sm leading-b-sm font-normal text-neutral-600 text-nowrap">
                                    Filtros Ativos:
                                </p>

                                <Badge
                                    variant="default"
                                    className="bg-transparent text-neutral-900 flex items-center justify-center gap-[8px] h-[20px] text-nowrap"
                                >
                                    Computadores e Laptops
                                    <XIcon className="size-[24px] stroke-[2.5px]" />
                                </Badge>

                                <Badge
                                    variant="default"
                                    className="bg-transparent text-neutral-900 flex items-center justify-center gap-[8px] h-[20px] text-nowrap"
                                >
                                    Todos os preços
                                    <XIcon className="size-[24px] stroke-[2.5px]" />
                                </Badge>
                            </div>

                            <p className="pl-[20px] text-b-sm leading-b-sm font-normal text-neutral-600 text-nowrap">
                                <strong className="font-semibold text-neutral-900">
                                    65.867
                                </strong>{" "}
                                resultados encontrados.
                            </p>
                        </div>
                    </div>

                    <div className="block xl:hidden">
                        <HorizontalFilterBar />
                    </div>

                    <div className="w-full grid grid-cols-[repeat(,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] xl:grid-cols-[repeat(3,1fr)] 2xl:grid-cols-[repeat(4,1fr)] items-center justify-center gap-[8px]">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="md:max-w-[248px] w-full h-full"
                            >
                                <ProductCard product={product} size="md" />
                            </div>
                        ))}
                    </div>

                    <Pagination>
                        <PaginationContent className="gap-x-[8px]">
                            <PaginationItem className="size-[40px] mr-[12px] text-primary bg-white border-[1px] border-primary hover:bg-primary hover:text-white p-[8px] rounded-full flex items-center justify-center">
                                <Link href="#">
                                    <ArrowLeftIcon className="size-[24px] stroke-[1.5px]" />
                                </Link>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    className="size-[40px] bg-primary text-white p-[8px] rounded-full flex items-center justify-center hover:bg-primary hover:text-white"
                                >
                                    01
                                </PaginationLink>
                            </PaginationItem>
                            {Array.from({ length: 3 }, (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href="#"
                                        className="size-[40px] text-primary bg-white border-[1px] border-primary hover:bg-primary hover:text-white p-[8px] rounded-full flex items-center justify-center"
                                    >
                                        {`0${index + 2}`}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem className="size-[40px] text-primary ml-[12px] bg-white border-[1px] border-primary hover:bg-primary hover:text-white p-[8px] rounded-full flex items-center justify-center">
                                <Link href="#">
                                    <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                                </Link>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </section>
        </main>
    );
}

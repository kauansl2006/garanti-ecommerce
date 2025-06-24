"use client";

import Link from "next/link"; 

import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"

import Breadcrumb from "@/components/breadcrumb";
import FilterBar from "@/components/filterbar";
import ProductCard from "@/components/product-card";
import Searchbar from "@/components/searchbar";

import { bestDeals } from "@/lib/placeholder-data";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, XIcon } from "lucide-react";

export default function Page() {
    return (
        <>
            <Breadcrumb />
            <section className="w-full h-full flex items-start justify-start gap-x-[24px] pt-[40px] pb-[72px] px-[5.625%] xl:px-[15.625%]">
                <FilterBar />

                <div className="max-w-[984px] w-full flex flex-col items-center justify-between gap-y-[18px]">
                    <div className="max-w-[984px] w-full flex flex-col items-center justify-between gap-y-[18px] bg-white border-[1px] border-neutral-300 rounded-[4px] p-[20px]">
                        <div className="w-full flex items-center justify-between">
                            <Searchbar />
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
                            <div className="flex items-center justify-center gap-[16px] overflow-x-hidden">
                                <p className="text-b-sm leading-b-sm font-normal text-neutral-600 text-nowrap">
                                    Filtros Ativos:
                                </p>

                                    <Badge variant="default" className="bg-transparent text-neutral-900 flex items-center justify-center gap-[8px] h-[20px] text-nowrap">
                                        Computadores e Laptops
                                        <XIcon className="size-[24px] stroke-[2.5px]" />
                                    </Badge>

                                    <Badge variant="default" className="bg-transparent text-neutral-900 flex items-center justify-center gap-[8px] h-[20px] text-nowrap">
                                        Todos os preços
                                        <XIcon className="size-[24px] stroke-[2.5px]" />
                                    </Badge>
                            </div>

                            <p className="pl-[20px] text-b-sm leading-b-sm font-normal text-neutral-600 text-nowrap">
                                <strong className="font-semibold text-neutral-900">65.867</strong> resultados encontrados.
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-[repeat(4,1fr)] items-center justify-center gap-[8px]">
                        {bestDeals.map((product) => (
                            <div key={product.id} className="md:max-w-[248px] w-full h-full" >
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
                                <PaginationLink href="#" className="size-[40px] bg-primary text-white p-[8px] rounded-full flex items-center justify-center hover:bg-primary hover:text-white">01</PaginationLink>
                            </PaginationItem>
                            {Array.from({ length: 3 }, (_, index) => (
                                <PaginationItem key={index}>
                                <PaginationLink href="#" className="size-[40px] text-primary bg-white border-[1px] border-primary hover:bg-primary hover:text-white p-[8px] rounded-full flex items-center justify-center">
                                    {`0${index+2}`}
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
        </>
    )
}
"use client";

import Image from "next/image";
import Link from "next/link";

import { 
    ChevronDownIcon,
    HeartIcon,
    MinusIcon,
    PlusIcon,
    RefreshCcwIcon,
    ShoppingCartIcon
} from "lucide-react";

import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious 
} from "@/components/ui/carousel";
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Rating } from "@/components/products";

export const ProductDetails = ({ product }: { product: any }) => {
    return (
        <section className="w-full flex flex-row items-start gap-[56px] pt-[32px] pb-[72px] px-[15.625%]">
            <div className="max-w-[616px] w-full flex flex-col items-start gap-[24px]">
                <div className="w-full h-[464px] bg-neutral-100 border-[1px] border-neutral-300 rounded-[4px] relative">
                    <Image  
                        src={
                            product.photos[0].src ? 
                            product.photos[0].src : 
                            `/not-photo.png`
                        }
                        fill={true}
                        alt={
                            product.photos[0].alt ? 
                            product.photos[0].alt : 
                            "Produto sem foto"
                        }
                    />
                </div>

                <Carousel className="w-full">
                    <CarouselContent>
                        {product.photos.map((photo: any, index: any) => (
                            <CarouselItem className="basis-1/6" key={index}>
                                <div className="size-[96px] bg-neutral-100 border-[1px] border-neutral-300 rounded-[4px] relative">
                                    <Image  
                                        src={
                                            photo.src ? 
                                            photo.src : 
                                            `/not-photo.png`
                                        }
                                        fill={true}
                                        alt={
                                            photo.alt ? 
                                            photo.alt : 
                                            "Produto sem foto"
                                        }
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious 
                        variant="secondary" 
                        className="cursor-pointer size-[48px] hover:bg-secondary hidden md:inline-flex" 
                    />
                    <CarouselNext 
                        variant="secondary" 
                        className="cursor-pointer size-[48px] hover:bg-secondary hidden md:inline-flex" 
                    />
                </Carousel>
            </div>

            <div className="max-w-[648px] w-full flex flex-col items-start gap-[24px]">
                {product.score && (
                    <div className="flex flex-row gap-[6px] ">
                        <Rating score={product.score} />
                        <p className="text-b-sm leading-b-sm font-semibold text-neutral-900">
                            {product.score} estrelas
                        </p>
                        <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                            (56.532) Avaliações de Usuários
                        </p>
                    </div>
                )}

                <p className="text-b-xl leading-b-xl font-normal text-neutral-900">
                    {product.title}
                </p>

                <div className="w-full grid grid-cols-[repeat(2,1fr)] items-start gap-[8px]">
                    {Array.from({length: 4}, (_, index) => (
                        <p key={index} className="text-b-sm leading-b-sm font-normal text-neutral-600">
                            Item: <strong className="font-semibold text-neutral-900">
                                valor {index+1}
                            </strong>
                        </p>
                    ))}
                </div>

                <div className="flex items-center gap-[12px]">
                    <div className="flex items-center justify-start gap-[4px]">
                        <p className="text-h-03 leading-h-03 text-blue-500">
                            R$ {product.price.toFixed(2)}
                        </p>

                        <p className="text-[18px]/[24px] text-medium line-through text-neutral-500">
                            R$ {product.price.toFixed(2)}
                        </p>

                        <Badge 
                            variant="default" 
                            className="bg-[#EFD33D] text-neutral-900 px-[10px] py-[5px] rounded-[4px]"
                        >
                            {product.discount}% OFF
                        </Badge>
                    </div>
                </div>

                <Separator orientation="horizontal" className="bg-neutral-300" />

                <div className="w-full grid grid-cols-[repeat(2,1fr)] items-start gap-x-[8px] gap-y-[16px]">
                    {Array.from({length: 4}, (_, index) => (
                        <DropdownMenu key={index}>
                            <div className="w-full flex flex-col items-start gap-[8px]">
                                <Label htmlFor={`item-${index + 1}`}>
                                    Item {index + 1}
                                </Label>
                                <DropdownMenuTrigger id={`item-${index + 1}`} className="h-[44px] text-b-sm leading-b-sm border-[1px] border-neutral-300 rounded-[4px] px-[14px] w-full flex items-center justify-between gap-[8px]">
                                    Item {index + 1}
                                    <ChevronDownIcon className="cursor-pointer size-[18px] stroke-[1.5] text-neutral-500" />
                                </DropdownMenuTrigger>
                            </div>
                            <DropdownMenuContent className="w-[312px]">
                                {Array.from({length: 4}, (_, index) => (
                                <DropdownMenuItem key={index} className="h-[44px] text-b-sm leading-b-sm px-[14px]">
                                    Valor {index + 1}
                                </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ))}
                </div>

                <div className="w-full grid grid-cols-[repeat(3,auto)] items-start gap-[16px] pt-[12px]">
                    <div className="flex items-center justify-between border-[2px] border-neutral-300 rounded-[4px]">
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="cursor-pointer size-[56px] hover:bg-neutral-200 rounded-[4px]"
                        >
                            <MinusIcon className="size-[16px] stroke-[2px]" />
                        </Button>
                        <div className="text-b-md leading-b-md font-normal flex items-center justify-center size-[56px]">
                            01
                        </div>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="cursor-pointer size-[56px] hover:bg-neutral-200 rounded-[4px]"
                        >
                            <PlusIcon className="size-[16px] stroke-[2px]" />
                        </Button>
                    </div>
                    <Button 
                        variant="secondary" 
                        size="default" 
                        className="cursor-pointer h-[56px] w-[310px] text-[16px]/[56px] font-bold rounded-[4px]"
                    >
                        ADICIONAR
                        <ShoppingCartIcon className="size-[24px] stroke-[2px] text-white" />
                    </Button>
                    <Button 
                        variant="outline" 
                        size="default" 
                        className="cursor-pointer h-[56px] hover:bg-secondary hover:text-white border-[2px] border-secondary text-secondary text-[16px]/[56px] font-bold rounded-[4px]"
                    >
                        COMPRAR JÁ
                    </Button>
                </div>

                <div className="w-full flex items-center justify-between">
                    <div className="flex items-start gap-[24px]">
                        <div className="cursor-pointer flex items-center gap-[6px] text-neutral-700">
                            <HeartIcon className="size-[24px] stroke-[1.5px] text-neutral-700" />
                            Favoritar
                        </div>
                        <div className="cursor-pointer flex items-center gap-[6px] text-neutral-700">
                            <RefreshCcwIcon className="size-[24px] stroke-[1.5px] text-neutral-700" />
                            Comparar
                        </div>
                    </div>

                    <div className="flex items-center gap-[12px] text-neutral-700">
                        Compartilhar: 

                            <Link href="#" className="size-[16px] relative cursor-pointer">
                                <Image
                                    src="/x.svg"
                                    fill={true}
                                    alt="Logo do X"
                                />
                            </Link>
                            <Link href="#" className="size-[16px] relative cursor-pointer">
                                <Image
                                    src="/instagram.svg"
                                    fill={true}
                                    alt="Logo do Instragram"
                                />
                            </Link>
                            <Link href="#" className="size-[16px] relative cursor-pointer">
                                <Image
                                    src="/facebook.svg"
                                    width={16}
                                    height={16}
                                    alt="Logo do Facebook"
                                />
                            </Link>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-[12px] p-[20px] bg-white border-[1px] border-neutral-300 rounded-[4px]">
                    <p className="text-b-sm leading-b-sm font-normal text-neutral-900">
                        100% de garantia de pagamento seguro
                    </p>

                    <div className="w-[150px] h-[18px] relative">
                        <Image
                            src="/payment-cards.svg"
                            fill={true}
                            alt="Métodos de Pagamento aceitos"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client";

import Image from "next/image";

import {
    HeartIcon,
    MinusIcon,
    PlusIcon,
    RefreshCwIcon,
    ShoppingCartIcon,
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Rating } from "@/components/rating";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/definitions";

export const ProductDetails = ({ product }: { product: Product }) => {
    return (
        <section className="px-[5.625%] xl:px-[15.625%] pt-[102px] md:pt-[32px] pb-[72px] grid grid-cols-1 lg:grid-cols-2 gap-[56px]">
            <div className="flex flex-col gap-[24px]">
                <Card className="w-full shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                    <CardContent className="flex items-center justify-center">
                        <div className="size-[250px] sm:size-[450px] lg:w-[616px] lg:h-[464px] relative">
                            <Image
                                src={
                                    product.photos
                                        ? product.photos[0].src
                                        : "/not-photo.png"
                                }
                                alt={
                                    product.photos
                                        ? product.photos[0].alt
                                        : "Produto sem foto"
                                }
                                fill={true}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Carousel className="w-full">
                    <CarouselContent>
                        {product.photos?.map((photo, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/3 sm:basis-1/5 md:basis-1/6 lg:basis-1/4 2xl:basis-1/5"
                            >
                                <Card className="w-max shadow-none border-[1px] border-neutral-300 p-[0px] rounded-[4px]">
                                    <CardContent className="flex items-center justify-center p-[0px]">
                                        <div className="size-[96px] relative">
                                            <Image
                                                src={
                                                    photo.src
                                                        ? photo.src
                                                        : "/not-photo.png"
                                                }
                                                alt={
                                                    photo.alt
                                                        ? photo.alt
                                                        : "Produto sem foto"
                                                }
                                                fill={true}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        variant="default"
                        className="hidden sm:inline-flex cursor-pointer hover:bg-primary -left-5"
                    />
                    <CarouselNext
                        variant="default"
                        className="hidden sm:inline-flex cursor-pointer hover:bg-primary -right-5"
                    />
                </Carousel>
            </div>

            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-col sm:flex-row gap-[6px]">
                            <div className="flex gap-[6px]">
                                {product.score && (
                                    <Rating score={product.score} />
                                )}

                                <p className="text-b-sm leading-b-sm lg:text-b-ty lg:leading-b-ty xl:text-b-sm xl:leading-b-sm text-nowrap font-semibold">
                                    4.7 Avaliações
                                </p>
                            </div>

                            <p className="text-b-sm leading-b-sm lg:text-b-ty lg:leading-b-ty xl:text-b-sm xl:leading-b-sm lg:text-nowrap font-normal text-neutral-600">
                                (21.671 comentários de usuários)
                            </p>
                        </div>

                        <h1 className="text-b-xl leading-b-xl lg:text-b-lg lg:leading-b-lg xl:text-b-xl xl:leading-b-xl font-normal">
                            {product.title}
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-[8px]">
                        <p className="text-b-sm leading-b-sm lg:text-b-ty lg:leading-b-ty xl:text-b-sm xl:leading-b-sm font-normal">
                            Sku:{" "}
                            <strong className="font-semibold">A264671</strong>
                        </p>
                        <p className="text-b-sm leading-b-sm lg:text-b-ty lg:leading-b-ty xl:text-b-sm xl:leading-b-sm font-normal">
                            Disponibilidade:{" "}
                            <strong className="font-semibold text-success">
                                Em Estoque
                            </strong>
                        </p>
                        <p className="text-b-sm leading-b-sm lg:text-b-ty lg:leading-b-ty xl:text-b-sm xl:leading-b-sm font-normal">
                            Marca:{" "}
                            <strong className="font-semibold">Apple</strong>
                        </p>
                        <p className="text-b-sm leading-b-sm lg:text-b-ty lg:leading-b-ty xl:text-b-sm xl:leading-b-sm font-normal">
                            Categoria:{" "}
                            <strong className="font-semibold">
                                Eletrônicos
                            </strong>
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-start gap-[12px]">
                    <div className="flex items-center gap-[10px]">
                        <p className="text-h-03 leading-h-03 font-semibold text-primary">
                            R$ {product.price.toFixed(2)}
                        </p>

                        <p className="text-[18px/[24px] font-normal text-neutral-500 line-through">
                            R$ {product.price.toFixed(2)}
                        </p>
                    </div>
                    <Badge className="bg-[#EFD33D] text-neutral-900 font-semibold px-[10px] py-[5px] rounded-[4px]">
                        21% OFF
                    </Badge>
                </div>

                <Separator
                    orientation="horizontal"
                    className="bg-neutral-300"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="color">Cor</Label>
                        <RadioGroup
                            id="color"
                            className="flex flex-row gap-[10px]"
                        >
                            <RadioGroupItem
                                className="size-[32px] border-[1px] border-neutral-300 p-0 bg-[#B1B5B8] flex items-center justify-center relative
                                        [&>[data-slot=radio-group-indicator]]:border-2 
                                        [&>[data-slot=radio-group-indicator]]:border-primary
                                        [&>[data-slot=radio-group-indicator]]:size-[44px] 
                                        [&>[data-slot=radio-group-indicator]]:absolute 
                                        [&>[data-slot=radio-group-indicator]]:rounded-full
                                        [&>[data-slot=radio-group-indicator]>*]:hidden
                            "
                                value="option-one"
                                id="option-one"
                            />
                            <RadioGroupItem
                                className="size-[32px] border-[1px] border-neutral-300 p-0 bg-[#E0E1E1] flex items-center justify-center relative
                                        [&>[data-slot=radio-group-indicator]]:border-2 
                                        [&>[data-slot=radio-group-indicator]]:border-primary
                                        [&>[data-slot=radio-group-indicator]]:size-[44px] 
                                        [&>[data-slot=radio-group-indicator]]:absolute 
                                        [&>[data-slot=radio-group-indicator]]:rounded-full
                                        [&>[data-slot=radio-group-indicator]>*]:hidden
                                "
                                value="option-two"
                                id="option-two"
                            />
                        </RadioGroup>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="size">Tamanho</Label>
                        <Select>
                            <SelectTrigger className="w-full h-[44px] border-[1px] border-neutral-300 rounded-[4px]">
                                <SelectValue id="size" placeholder="Tamanho" />
                            </SelectTrigger>
                            <SelectContent className="rounded-none">
                                <SelectItem value="item-1" className="h-[44px]">
                                    Item 1
                                </SelectItem>
                                <SelectItem value="item-2" className="h-[44px]">
                                    Item 2
                                </SelectItem>
                                <SelectItem value="item-3" className="h-[44px]">
                                    Item 3
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="memory">Memória</Label>
                        <Select>
                            <SelectTrigger className="w-full h-[44px] border-[1px] border-neutral-300 rounded-[4px]">
                                <SelectValue
                                    id="memory"
                                    placeholder="Memória"
                                />
                            </SelectTrigger>
                            <SelectContent className="rounded-none">
                                <SelectItem value="item-1" className="h-[44px]">
                                    Item 1
                                </SelectItem>
                                <SelectItem value="item-2" className="h-[44px]">
                                    Item 2
                                </SelectItem>
                                <SelectItem value="item-3" className="h-[44px]">
                                    Item 3
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="storage">Armazenamento</Label>
                        <Select>
                            <SelectTrigger className="w-full h-[44px] border-[1px] border-neutral-300 rounded-[4px]">
                                <SelectValue
                                    id="storage"
                                    placeholder="Memória"
                                />
                            </SelectTrigger>
                            <SelectContent className="rounded-none">
                                <SelectItem value="item-1" className="h-[44px]">
                                    Item 1
                                </SelectItem>
                                <SelectItem value="item-2" className="h-[44px]">
                                    Item 2
                                </SelectItem>
                                <SelectItem value="item-3" className="h-[44px]">
                                    Item 3
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex pt-[12px] gap-[16px]">
                    <div className="max-w-[164px] w-full h-[56px] flex items-center justify-between border-2 border-neutral-300 rounded-[4px]">
                        <Button
                            variant="outline"
                            className="rounded-none h-full"
                        >
                            <MinusIcon className="size-[16px]" />
                        </Button>
                        <p className="text-b-md leading-b-md font-normal text-neutral-700">
                            01
                        </p>
                        <Button
                            variant="outline"
                            className="rounded-none h-full"
                        >
                            <PlusIcon className="size-[16px]" />
                        </Button>
                    </div>

                    <button className="lg:max-w-[310px] w-full h-[56px] rounded-[4px] text-[16px]/[56px] font-semibold flex items-center justify-center gap-[8px] px-[32px] bg-primary text-white">
                        Adicionar
                        <ShoppingCartIcon className="size-[24px]" />
                    </button>

                    <Button className="hidden 2xl:inline-flex max-w-[142px] w-full h-[56px] border-2 border-primary rounded-[4px] text-[16px]/[56px] text-primary bg-background hover:text-background hover:bg-primary font-semibold">
                        Comprar Já
                    </Button>
                </div>

                <div className="flex items-start 2xl:items-center justify-between">
                    <div className="flex flex-col 2xl:flex-row gap-x-[24px]">
                        <Button
                            variant="link"
                            className="cursor-pointer text-b-sm leading-b-sm font-normal text-neutral-700 hover:no-underline"
                        >
                            <HeartIcon className="size-[24px] stroke-[1.5px]" />
                            Favoritar
                        </Button>

                        <Button
                            variant="link"
                            className="cursor-pointer text-b-sm leading-b-sm font-normal text-neutral-700 hover:no-underline"
                        >
                            <RefreshCwIcon className="size-[24px] stroke-[1.5px]" />
                            Comparar
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-[12px]">
                        <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                            Compartilhar:
                        </p>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-[16px] relative"
                        >
                            <Image
                                src="/facebook.svg"
                                alt="Logo do Facebook"
                                fill={true}
                            />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-[16px] relative"
                        >
                            <Image src="/x.svg" alt="Logo do X" fill={true} />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-[16px] relative"
                        >
                            <Image
                                src="/instagram.svg"
                                alt="Logo do Instagram"
                                fill={true}
                            />
                        </Button>
                    </div>
                </div>

                <Separator
                    orientation="horizontal"
                    className="bg-neutral-300"
                />

                <Card className="shadow-none border-[1px] border-neutral-300 rounded-[4px] p-[0px]">
                    <CardContent className="flex flex-col gap-[12px] p-[20px]">
                        <p className="text-b-sm leading-b-sm font-normal">
                            100% de garantia de pagamento seguro
                        </p>
                        <div className="w-[150px] h-[18px] relative">
                            <Image
                                src="/payment-cards.svg"
                                fill={true}
                                alt="Métodos de Pagamento aceitos"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardAction,
    CardFooter,
} from "@/components/ui/card";
import { PlusCircleIcon, EllipsisIcon, CopyIcon } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const paymentCards = [
    {
        price: 95400,
        value: "**** **** **** 3814",
        type: "visa",
        icon: "/visa-icon.svg",
    },
    {
        price: 72354,
        value: "**** **** **** 2783",
        type: "mastercard",
        icon: "/mastercard-icon.svg",
    },
];

export default function CardsAndAddress() {
    return (
        <section className="w-full flex flex-col gap-[24px]">
            <Card className="shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                <CardHeader className="w-full flex items-center justify-between border-b-[1px] border-b-neutral-300">
                    <CardTitle className="pb-[12px]">
                        Opções de Pagamento
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="cursor-pointer mb-[12px]"
                    >
                        Adicionar Cartão
                        <PlusCircleIcon className="size-[20px]" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {paymentCards.map((card, index) => (
                                <CarouselItem
                                    className="basis-full lg:basis-1/2 2xl:basis-1/3"
                                    key={index}
                                >
                                    <Card
                                        className={`shadow-none w-full bg-gradient-to-br ${
                                            card.type === "mastercard"
                                                ? "bg-gradient-to-br from-green-500 to-green-700"
                                                : "from-cyan-600 to-cyan-900"
                                        } rounded-[4px]`}
                                    >
                                        <CardHeader>
                                            <CardTitle className="text-white">
                                                R$ {card.price.toFixed(2)}
                                            </CardTitle>
                                            <CardAction>
                                                <EllipsisIcon className="size-[24px] text-white" />
                                            </CardAction>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col gap-[8px]">
                                                <p className="text-l-05 leading-l-05 font-semibold text-white">
                                                    NÚMERO DO CARTÃO
                                                </p>

                                                <div className="flex items-center gap-[6px]">
                                                    <p className="text-b-xl leading-b-xl font-normal text-white">
                                                        {card.value}
                                                    </p>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="cursor-pointer rounded-full hover:bg-[#ffffff33]"
                                                    >
                                                        <CopyIcon className="size-[20px] text-white" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <div className="w-full flex items-center justify-between">
                                                <div className="size-[40px] relative">
                                                    <Image
                                                        src={card.icon}
                                                        alt={`Logo da ${card.type}`}
                                                        fill={true}
                                                    />
                                                </div>

                                                <p className="text-b-sm leading-b-sm font-medium text-white">
                                                    John Doe
                                                </p>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </CardContent>
            </Card>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                <Card className="shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                    <CardHeader className="w-full border-b-[1px] border-b-neutral-300">
                        <CardTitle className="pb-[12px]">
                            Endereço de Cobrança
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[8px]">
                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Nome:
                                    </p>
                                    <p className="text-b-sm leading-b-sm text-neutral-600">
                                        John Doe
                                    </p>
                                </div>

                                <p className="text-b-sm leading-b-sm text-neutral-600 line-clamp-3 overflow-hidden text-ellipsis">
                                    East Tejturi Bazar, Word No. 04, Road No.
                                    13/x, House no. 1320/C, Flat No. 5D, Dhaka -
                                    1200, Bangladesh
                                </p>

                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Email:
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        johndoe@gmail.com
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Telefone:
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        +1-202-555-0118
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="cursor-pointer border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white text-[14px]/[48px] font-bold flex items-center justify-center px-[24px] w-[155px] h-[48px] rounded-[4px]">
                            Editar Endereço
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                    <CardHeader className="w-full border-b-[1px] border-b-neutral-300">
                        <CardTitle className="pb-[12px]">
                            Endereço de Envio
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[8px]">
                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Nome:
                                    </p>
                                    <p className="text-b-sm leading-b-sm text-neutral-600">
                                        John Doe
                                    </p>
                                </div>

                                <p className="text-b-sm leading-b-sm text-neutral-600 line-clamp-3 overflow-hidden text-ellipsis">
                                    East Tejturi Bazar, Word No. 04, Road No.
                                    13/x, House no. 1320/C, Flat No. 5D, Dhaka -
                                    1200, Bangladesh
                                </p>

                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Email:
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        johndoe@gmail.com
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Telefone:
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        +1-202-555-0118
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="cursor-pointer border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white text-[14px]/[48px] font-bold flex items-center justify-center px-[24px] w-[155px] h-[48px] rounded-[4px]">
                            Editar Endereço
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}

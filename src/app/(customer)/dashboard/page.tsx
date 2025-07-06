"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardAction,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    CopyIcon,
    EllipsisIcon,
    PackageIcon,
    PlusCircleIcon,
    ReceiptTextIcon,
    RocketIcon,
} from "lucide-react";
import Image from "next/image";

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

export default function Dashboard() {
    return (
        <section className="max-w-[984px] w-full flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
                <p className="text-b-xl leading-b-xl font-semibold">
                    Olá John!
                </p>
                <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                    No painel da sua conta, você pode facilmente verificar e
                    visualizar seus{" "}
                    <span className="text-primary">pedidos recentes</span>,
                    gerenciar seus{" "}
                    <span className="text-primary">endereços de entrega</span> e{" "}
                    <span className="text-primary">cobrança</span> e{" "}
                    <span className="text-primary">editar sua senha</span> e{" "}
                    <span className="text-primary">detalhes da conta.</span>
                </p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[24px]">
                <Card className="shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                    <CardHeader className="w-full border-b-[1px] border-b-neutral-300">
                        <CardTitle className="pb-[12px]">
                            Informações da Conta
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex gap-[16px]">
                                <div className="size-[48px] relative">
                                    <Image
                                        src="/users/user-1.png"
                                        alt="Foto de Perfil do John"
                                        fill={true}
                                    />
                                </div>

                                <div className="flex flex-col gap-4px">
                                    <p className="text-b-md leading-b-md font-semibold">
                                        John Doe
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Dhaka - 1207, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[8px]">
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
                                        Telefone 1:
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        +1-202-555-0118
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        Telefone 2:
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        +1-302-555-0138
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="cursor-pointer border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white text-[14px]/[48px] font-bold flex items-center justify-center px-[24px] w-[155px] h-[48px] rounded-[4px]">
                            Editar Conta
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                    <CardHeader className="w-full border-b-[1px] border-b-neutral-300">
                        <CardTitle className="pb-[12px]">
                            Informações de Envio
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

                <div className="grid col-span-1 lg:col-span-2 2xl:col-span-1 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-1 gap-[24px]">
                    <Card className="w-full h-[88px] bg-[#A6CBFE] shadow-none rounded-[4px] flex flex-row items-center justify-center p-[16px]">
                        <div className="size-[56px] flex items-center justify-center p-[12px] rounded-[4px] bg-white">
                            <RocketIcon className="size-[32px] stroke-[1.5px] text-primary" />
                        </div>

                        <div className="w-full flex flex-col gap-[4px]">
                            <p className="text-b-xl leading-b-xl font-semibold">
                                154
                            </p>
                            <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                                Total de Pedidos
                            </p>
                        </div>
                    </Card>

                    <Card className="w-full h-[88px] bg-[#FDCBA9] shadow-none rounded-[4px] flex flex-row items-center justify-center p-[16px]">
                        <div className="size-[56px] flex items-center justify-center p-[12px] rounded-[4px] bg-white">
                            <ReceiptTextIcon className="size-[32px] stroke-[1.5px] text-secondary" />
                        </div>

                        <div className="w-full flex flex-col gap-[4px]">
                            <p className="text-b-xl leading-b-xl font-semibold">
                                05
                            </p>
                            <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                                Pedidos Pendentes
                            </p>
                        </div>
                    </Card>

                    <Card className="w-full h-[88px] bg-[#B6F0B2] shadow-none rounded-[4px] flex flex-row items-center justify-center p-[16px]">
                        <div className="size-[56px] flex items-center justify-center p-[12px] rounded-[4px] bg-white">
                            <PackageIcon className="size-[32px] stroke-[1.5px] text-success" />
                        </div>

                        <div className="w-full flex flex-col gap-[4px]">
                            <p className="text-b-xl leading-b-xl font-semibold">
                                149
                            </p>
                            <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                                Pedidos Concluídos
                            </p>
                        </div>
                    </Card>
                </div>
            </div>

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
        </section>
    );
}

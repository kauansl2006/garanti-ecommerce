"use client";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlertIcon, ArrowRightIcon } from "lucide-react";

export default function TrackOrder() {
    return (
        <section className="w-full flex flex-col gap-[32px]">
            <div className="max-w-[760px] w-full flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-h-03 leading-h-03 md:text-h-01 md:leading-h-01 font-semibold">
                        Rastrear Pedido
                    </h1>

                    <p className="text-b-sm md:text-b-md leading-b-sm md:leading-b-md font-normal text-neutral-600">
                        Para rastrear seu pedido, insira o ID do seu pedido no
                        campo de entrada abaixo e pressione o botão “Rastrear
                        pedido”. Ele foi fornecido a você no seu recibo e no
                        e-mail de confirmação que você deveria ter recebido.
                    </p>
                </div>

                <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[16px]">
                        <Label htmlFor="order">ID do Pedido</Label>
                        <Input
                            className="w-full text-b-sm leading-b-sm md:text-b-md md:leading-b-md lg:w-[424px] h-[44px] rounded-[4px] border-[1px] border-neutral-300"
                            type="text"
                            id="order"
                            placeholder="ID do Pedido..."
                        />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <Label htmlFor="email">E-mail de cobrança</Label>
                        <Input
                            className="w-full text-b-sm leading-b-sm md:text-b-md md:leading-b-md lg:w-[424px] h-[44px] rounded-[4px] border-[1px] border-neutral-300"
                            type="text"
                            id="email"
                            placeholder="Endereço de email..."
                        />
                    </div>
                </div>

                <p className="text-b-sm leading-b-sm md:text-b-md md:leading-b-md font-normal text-nowrap hidden sm:flex gap-[6px] items-center text-neutral-600 text-ellipsis overflow-x-hidden">
                    <CircleAlertIcon className="size-[24px] stroke-[1.5px]" />
                    ID do pedido que enviamos para seu endereço de e-mail.
                </p>
            </div>

            <Link
                href={`/dashboard/order-details/78974303`}
                className="bg-primary text-white text-b-md leading-b-md font-medium text-nowrap cursor-pointer w-[225px] h-[56px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
            >
                Rastrear Pedido
                <ArrowRightIcon className="size-[16px]" />
            </Link>
        </section>
    );
}

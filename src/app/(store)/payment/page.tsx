"use client";

import Image from "next/image";
import Link from "next/link";

import { CheckCircleIcon, HomeIcon } from "lucide-react";

import { Breadcrumb } from "@/components/breadcrumb";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { products } from "@/lib/placeholder-data";

const paymentOptions = [
    {
        image: "/payment-options/pix.svg",
        label: "Pix",
        value: "option-one",
    },
    {
        image: "/payment-options/paypal.svg",
        label: "Paypal",
        value: "option-two",
    },
    {
        image: "/payment-options/stripe.svg",
        label: "Stripe",
        value: "option-three",
    },
    {
        image: "/payment-options/visa.svg",
        label: "Cartão Crédito/Débito",
        value: "option-four",
    },
];

export default function Payment() {
    return (
        <main className="w-screen">
            <Breadcrumb
                breadcrumbs={[
                    {
                        icon: HomeIcon,
                        href: "/",
                        label: "Home",
                    },
                    {
                        href: "/shopping-cart",
                        label: "Carrinho de Compras",
                    },
                    {
                        href: "/payment",
                        label: "Pagamento",
                        active: true,
                    },
                ]}
            />
            <section className="flex flex-col lg:flex-row items-end lg:items-start gap-[24px] justify-between px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:py-[72px]">
                <div className="lg:max-w-[60%] 2xl:max-w-[872px] w-full flex flex-col gap-[40px]">
                    <Card className="bg-white rounded-[4px] border-[1px] border-neutral-300 shadow-none">
                        <CardHeader className="w-full">
                            <CardTitle>Informações de Envio</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full flex flex-col gap-[24px]">
                            <div className="grid grid-cols-4 gap-[16px]">
                                <div className="col-span-4 xl:col-span-2 grid grid-cols-2 items-end justify-center gap-[16px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="first-name">
                                            Nome do Usuário
                                        </Label>
                                        <Input
                                            id="first-name"
                                            type="text"
                                            placeholder="Digite primeiro nome... "
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>
                                    <Input
                                        id="last-name"
                                        type="text"
                                        placeholder="Digite último nome... "
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-4 xl:col-span-2 flex flex-col gap-[8px]">
                                    <Label htmlFor="first-name">
                                        Nome da Compania
                                        <span className="text-neutral-400 text-b-sm leading-b-sm font-normal">
                                            (opcional)
                                        </span>
                                    </Label>
                                    <Input
                                        id="first-name"
                                        type="text"
                                        placeholder="Digite primeiro nome... "
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-4 flex flex-col gap-[8px]">
                                    <Label htmlFor="address">
                                        Endereço de Entrega
                                    </Label>
                                    <Input
                                        id="address"
                                        type="text"
                                        placeholder="Digite seu Endereço... "
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-4 grid grid-cols-1 xl:grid-cols-3 gap-[16px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="city">Cidade</Label>
                                        <Input
                                            id="city"
                                            type="text"
                                            placeholder="Digite Cidade... "
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="state">
                                            Região/Estado
                                        </Label>
                                        <Input
                                            id="state"
                                            type="text"
                                            placeholder="Digite Estado... "
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="zip-code">
                                            Código Postal
                                        </Label>
                                        <Input
                                            id="zip-code"
                                            type="text"
                                            placeholder="Digite Código Postal... "
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col gap-[8px]">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Digite Email... "
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-2 flex flex-col gap-[8px]">
                                    <Label htmlFor="phone">
                                        Número de Telefone
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="text"
                                        placeholder="Digite Telefone... "
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-start gap-2">
                                <Checkbox
                                    id="other-address"
                                    className="rounded-[0px]"
                                />
                                <Label
                                    htmlFor="other-address"
                                    className="text-b-sm leading-b-sm"
                                >
                                    Enviar para endereço diferente
                                </Label>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white rounded-[4px] border-[1px] border-neutral-300 shadow-none">
                        <CardHeader className="w-full border-b-[1px] border-b-neutral-300">
                            <CardTitle className="pb-[12px]">
                                Opções de Pagamento
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full flex flex-col p-[0px] gap-[24px]">
                            <RadioGroup defaultValue="option-one">
                                <div className="grid grid-cols-2 xl:grid-cols-4 gap-[3px] p-[24px]">
                                    {paymentOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-center gap-[3px]"
                                        >
                                            <div className="w-full flex flex-col items-center justify-center gap-[16px]">
                                                <div className="size-[64px] relative">
                                                    <Image
                                                        src={option.image}
                                                        alt="Opção de Pagamento"
                                                        fill={true}
                                                    />
                                                </div>

                                                <p className="text-center text-b-sm leading-b-sm font-normal">
                                                    {option.label}
                                                </p>

                                                <RadioGroupItem
                                                    value={option.value}
                                                />
                                            </div>
                                            {option.value !== "option-four" && (
                                                <Separator
                                                    orientation="vertical"
                                                    className="bg-neutral-300 hidden xl:block"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Separator
                                    orientation="horizontal"
                                    className="bg-neutral-300"
                                />
                            </RadioGroup>

                            <div className="px-6 grid grid-cols-2 gap-[16px]">
                                <div className="flex flex-col gap-[8px]">
                                    <Label htmlFor="card-name">
                                        Nome do Cartão
                                    </Label>
                                    <Input
                                        id="card-name"
                                        type="text"
                                        placeholder="Dê um Nome para seu Cartão"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <Label htmlFor="card-number">
                                        Número do Cartão
                                    </Label>
                                    <Input
                                        id="card-number"
                                        type="text"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-1 flex flex-col gap-[8px]">
                                    <Label htmlFor="expire-date">
                                        Data de Expiração
                                    </Label>
                                    <Input
                                        id="expire-date"
                                        type="date"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-1 flex flex-col gap-[8px]">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input
                                        id="cvc"
                                        type="text"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="max-w-[424px] w-full flex flex-col items-center justify-center gap-[24px]">
                    <Card className="w-full flex flex-col items-center justify-center border-[1px] border-neutral-300 rounded-[4px] pb-[24px] shadow-none">
                        <CardHeader className="w-full">
                            <CardTitle>Resumo do Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full">
                            <div className="flex flex-col gap-[16px] pb-[24px]">
                                <ScrollArea className="h-[350px] w-full rounded-md border p-4">
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex flex-col pb-[8px]"
                                        >
                                            <div
                                                className="grid grid-cols-3 gap-[12px] items-center justify-center"
                                                key={product.id}
                                            >
                                                <div className="size-[72px] relative">
                                                    <Image
                                                        src={product.thumbnail}
                                                        alt={`Foto do produto ${product.title}`}
                                                        fill={true}
                                                    />
                                                </div>
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.availableQuantity}{" "}
                                                    Unidades
                                                </p>
                                                <p className="text-nowrap text-b-sm leading-b-sm font-normal">
                                                    Valor total: R${" "}
                                                    {Number(
                                                        product.price.toFixed(
                                                            2,
                                                        ),
                                                    ) *
                                                        product.availableQuantity}
                                                </p>
                                            </div>
                                            <Separator
                                                orientation="horizontal"
                                                className="bg-neutral-300"
                                            />
                                        </div>
                                    ))}
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>

                                <Separator
                                    orientation="horizontal"
                                    className="bg-neutral-300"
                                />

                                <div className="flex flex-col gap-[12px] pb-[4px]">
                                    <div className="flex items-center justify-between">
                                        <p className="text-b-sm leading-b-sm text-neutral-600 font-normal">
                                            Subtotal:
                                        </p>
                                        <p className="text-b-sm leading-b-sm font-medium">
                                            R$ 3999.99
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-b-sm leading-b-sm text-neutral-600 font-normal">
                                            Frete:
                                        </p>
                                        <p className="text-b-sm leading-b-sm font-medium">
                                            Grátis
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-b-sm leading-b-sm text-neutral-600 font-normal">
                                            Desconto:
                                        </p>
                                        <p className="text-b-sm leading-b-sm font-medium">
                                            R$ 39.99
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-b-sm leading-b-sm text-neutral-600 font-normal">
                                            Taxa:
                                        </p>
                                        <p className="text-b-sm leading-b-sm font-medium">
                                            R$ 19.99
                                        </p>
                                    </div>
                                </div>

                                <Separator
                                    orientation="horizontal"
                                    className="bg-neutral-300"
                                />

                                <div className="flex items-center justify-between">
                                    <p className="text-b-md leading-b-md font-normal">
                                        Total:
                                    </p>
                                    <p className="text-b-md leading-b-md font-semibold">
                                        R$ 4319.99
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="w-full">
                            <Link
                                href="/payment-success"
                                className="bg-primary cursor-pointer flex items-center justify-center gap-[12px] w-full h-[56px] px-[32px] text-white text-[16px]/[56px] font-bold rounded-[4px]"
                            >
                                Confirmar Compra
                                <CheckCircleIcon className="size-[24px] stroke-[1.5px] text-white" />
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    );
}

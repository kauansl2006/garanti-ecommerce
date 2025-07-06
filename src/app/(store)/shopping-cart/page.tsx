"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ArrowRightIcon, HomeIcon, XCircleIcon } from "lucide-react";
import { products } from "@/lib/placeholder-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ShoppingCart() {
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
                        active: true,
                    },
                ]}
            />
            <section className="flex flex-col lg:flex-row items-end lg:items-start gap-[24px] justify-between px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:py-[72px]">
                <Card className="lg:max-w-[60%] 2xl:max-w-[872px] w-full border-[1px] border-neutral-300 rounded-[4px] p-[0px] shadow-none">
                    <CardHeader className="h-[64px] flex items-center justify-start">
                        <CardTitle>Carrinho de Compras</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[450px] overflow-y-scroll">
                        <Table className="w-full relative">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[380px]">
                                        Produtos
                                    </TableHead>
                                    <TableHead className="w-[180px]">
                                        Preço
                                    </TableHead>
                                    <TableHead className="w-[180px]">
                                        Quantidade
                                    </TableHead>
                                    <TableHead className="w-[180px]">
                                        Subtotal
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.slice(0, 4).map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="flex items-center justify-start gap-[24px]">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="cursor-pointer rounded-full"
                                                >
                                                    <XCircleIcon className="size-[24px] text-neutral-400" />
                                                </Button>

                                                <div className="size-[72px] relative">
                                                    <Image
                                                        src={product.thumbnail}
                                                        alt={`Foto do produto ${product.title}`}
                                                        fill={true}
                                                    />
                                                </div>

                                                <p className="w-[260px] text-wrap text-b-sm leading-b-sm font-normal">
                                                    {product.title}
                                                </p>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            R$ {product.price.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <p className="text-b-sm leading-b-sm font-normal">
                                                {product.availableQuantity}{" "}
                                                Unidades
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            R${" "}
                                            {Number(product.price.toFixed(2)) *
                                                product.availableQuantity}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="max-w-[424px] w-full flex flex-col items-center justify-center gap-[24px]">
                    <Card className="w-full flex flex-col items-center justify-center border-[1px] border-neutral-300 rounded-[4px] pb-[24px] shadow-none">
                        <CardHeader className="w-full">
                            <CardTitle>Total da Compra</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full">
                            <div className="flex flex-col gap-[16px] pb-[24px]">
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
                                href="/payment"
                                className="bg-primary cursor-pointer flex items-center justify-center gap-[12px] w-full h-[56px] px-[32px] text-white text-[16px]/[56px] font-bold rounded-[4px]"
                            >
                                Realizar Pagamento
                                <ArrowRightIcon className="size-[24px] stroke-[1.5px] text-white" />
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="w-full flex flex-col items-center justify-center border-[1px] border-neutral-300 rounded-[4px] pb-[24px] shadow-none">
                        <CardHeader className="w-full border-b-[1px] border-b-neutral-300">
                            <CardTitle className="pb-[12px]">
                                Código do Cupom
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full">
                            <Input
                                type="text"
                                placeholder="Digite cupom..."
                                className="h-[44px] rounded-[4px]"
                            />
                        </CardContent>
                        <CardFooter className="w-full">
                            <Button className="cursor-pointer h-[48px] px-[24px] text-white text-[14px]/[48px] font-bold rounded-[4px]">
                                Aplicar Cupom
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    );
}

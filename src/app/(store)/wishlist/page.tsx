"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ShoppingCartIcon, XCircleIcon } from "lucide-react";
import { products } from "@/lib/placeholder-data";

export default function Wishlist() {
    return (
        <main className="w-screen">
            <section className="flex items-center justify-center px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:py-[72px]">
                <Card className="max-w-[1320px] w-full border-[1px] border-neutral-300 rounded-[4px] p-[0px] shadow-none">
                    <CardHeader className="h-[64px] flex items-center justify-start">
                        <CardTitle>Lista de desejos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[580px]">
                                        Produtos
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                        Preço
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                        Status
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                        Ações
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="flex items-center justify-start gap-[16px]">
                                                <div className="size-[72px] relative">
                                                    <Image
                                                        src={product.thumbnail}
                                                        alt={`Foto do produto ${product.title}`}
                                                        fill={true}
                                                    />
                                                </div>

                                                <p className="w-[450px] text-wrap text-b-sm leading-b-sm font-normal text-neutral-700">
                                                    Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Alias fugiat ab quo
                                                    consequuntur, ratione odit.
                                                </p>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            R$ {product.price.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            {product.isAvailable ? (
                                                <p className="text-b-sm leading-b-sm font-semibold text-success">
                                                    Em Estoque
                                                </p>
                                            ) : (
                                                <p className="text-b-sm leading-b-sm font-semibold text-danger">
                                                    Fora de Estoque
                                                </p>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-start gap-[24px]">
                                                <Button className="cursor-pointer flex gap-[8px] w-[212px] h-[48px] px-[24px] text-white text-[14px]/[48px] font-bold rounded-[4px]">
                                                    ADQUIRIR
                                                    <ShoppingCartIcon className="size-[20px] stroke-[1.5px] text-white" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="cursor-pointer rounded-full"
                                                >
                                                    <XCircleIcon className="size-[24px] text-neutral-400" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}

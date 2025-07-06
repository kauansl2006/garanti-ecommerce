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
import { XCircleIcon } from "lucide-react";
import { products } from "@/lib/placeholder-data";

export default function ShoppingCart() {
    return (
        <Card className="w-full border-[1px] border-neutral-300 rounded-[4px] p-[0px] shadow-none">
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
                            <TableHead className="w-[180px]">Preço</TableHead>
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
                                        {product.availableQuantity} Unidades
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
    );
}

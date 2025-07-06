"use client";

import Link from "next/link";

import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
} from "@/components/ui/pagination";

const orders = [
    {
        id: 78974292,
        status: "Em andamento",
        date: "Dec 30, 2019 07:52",
        total: "R$ 1280,00 (5 Produtos)",
    },
    {
        id: 78974293,
        status: "Concluído",
        date: "Jan 12, 2020 14:20",
        total: "R$ 980,00 (3 Produtos)",
    },
    {
        id: 78974294,
        status: "Cancelado",
        date: "Feb 05, 2020 09:15",
        total: "R$ 320,00 (1 Produto)",
    },
    {
        id: 78974295,
        status: "Em andamento",
        date: "Mar 10, 2020 11:45",
        total: "R$ 1540,00 (6 Produtos)",
    },
    {
        id: 78974296,
        status: "Concluído",
        date: "Apr 22, 2020 17:30",
        total: "R$ 785,00 (4 Produtos)",
    },
    {
        id: 78974297,
        status: "Cancelado",
        date: "May 15, 2020 10:00",
        total: "R$ 560,00 (2 Produtos)",
    },
    {
        id: 78974298,
        status: "Em andamento",
        date: "Jun 08, 2020 16:40",
        total: "R$ 1120,00 (5 Produtos)",
    },
    {
        id: 78974299,
        status: "Concluído",
        date: "Jul 19, 2020 13:55",
        total: "R$ 1340,00 (4 Produtos)",
    },
    {
        id: 78974300,
        status: "Cancelado",
        date: "Aug 25, 2020 08:10",
        total: "R$ 920,00 (3 Produtos)",
    },
    {
        id: 78974301,
        status: "Concluído",
        date: "Sep 14, 2020 12:00",
        total: "R$ 1470,00 (6 Produtos)",
    },
    {
        id: 78974302,
        status: "Em andamento",
        date: "Oct 03, 2020 19:25",
        total: "R$ 610,00 (2 Produtos)",
    },
    {
        id: 78974303,
        status: "Concluído",
        date: "Nov 21, 2020 15:35",
        total: "R$ 1730,00 (7 Produtos)",
    },
];

export default function OrderHistory() {
    return (
        <section className="w-max-[984px] w-full flex items-center justify-center">
            <Card className="w-full border-[1px] border-neutral-300 rounded-[4px]  shadow-none">
                <CardHeader className="flex items-center justify-start">
                    <CardTitle>Histórico de Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[550px] overflow-scroll">
                        <Table>
                            <TableHeader>
                                <TableRow className="h-[44px]">
                                    <TableHead className="w-[200px]">
                                        Id do Pedido
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                        Status
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                        Data
                                    </TableHead>
                                    <TableHead className="w-[250px]">
                                        Total
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                        Ações
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                        className="h-[44px]"
                                        key={order.id}
                                    >
                                        <TableCell>#{order.id}</TableCell>
                                        <TableCell>
                                            <p
                                                className={clsx(
                                                    "text-b-sm leading-b-sm font-semibold",
                                                    {
                                                        "text-secondary":
                                                            order.status ===
                                                            "Em andamento",
                                                        "text-success":
                                                            order.status ===
                                                            "Concluído",
                                                        "text-danger":
                                                            order.status ===
                                                            "Cancelado",
                                                    },
                                                )}
                                            >
                                                {order.status}
                                            </p>
                                        </TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.total}</TableCell>
                                        <TableCell>
                                            <Link
                                                href={`/dashboard/order-details/${order.id}`}
                                                className="flex items-center justify-start gap-[8px] text-primary"
                                            >
                                                Ver detalhes
                                                <ArrowRightIcon className="size-[16px]" />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
                <CardFooter>
                    <Pagination>
                        <PaginationContent className="gap-x-[8px]">
                            <PaginationItem className="size-[40px] mr-[12px] text-primary bg-white border-[1px] border-primary hover:bg-primary hover:text-white p-[8px] rounded-full flex items-center justify-center">
                                <Link href="#">
                                    <ArrowLeftIcon className="size-[24px] stroke-[1.5px]" />
                                </Link>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    className="size-[40px] bg-primary text-white p-[8px] rounded-full flex items-center justify-center hover:bg-primary hover:text-white"
                                >
                                    01
                                </PaginationLink>
                            </PaginationItem>
                            {Array.from({ length: 3 }, (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href="#"
                                        className="size-[40px] text-primary bg-white border-[1px] border-primary hover:bg-primary hover:text-white p-[8px] rounded-full flex items-center justify-center"
                                    >
                                        {`0${index + 2}`}
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
                </CardFooter>
            </Card>
        </section>
    );
}

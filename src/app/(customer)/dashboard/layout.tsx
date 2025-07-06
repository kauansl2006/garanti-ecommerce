"use client";

import Link from "next/link";

import { Breadcrumb } from "@/components/breadcrumb";
import {
    ClockIcon,
    CreditCardIcon,
    HeartIcon,
    HomeIcon,
    LayoutDashboardIcon,
    LogOutIcon,
    MapPinIcon,
    NotepadTextIcon,
    RefreshCcwIcon,
    SettingsIcon,
    ShoppingCartIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Card, CardContent } from "@/components/ui/card";

const sidebarLinks = [
    { icon: LayoutDashboardIcon, href: "/dashboard", title: "Dashboard" },
    {
        icon: NotepadTextIcon,
        href: "/dashboard/order-history",
        title: "Histórico de Pedido",
    },
    {
        icon: MapPinIcon,
        href: "/dashboard/track-order",
        title: "Rastrear Pedido",
    },
    {
        icon: ShoppingCartIcon,
        href: "/dashboard/shopping-cart",
        title: "Carrinho de Compras",
    },
    { icon: HeartIcon, href: "/dashboard/wishlist", title: "Lista de Desejos" },
    { icon: RefreshCcwIcon, href: "/dashboard/compare", title: "Comparar" },
    {
        icon: CreditCardIcon,
        href: "/dashboard/cards-and-address",
        title: "Cartões e Endereço",
    },
    {
        icon: ClockIcon,
        href: "/dashboard/browsing-history",
        title: "Histórico de Pesquisa",
    },
    { icon: SettingsIcon, href: "/dashboard/settings", title: "Configurações" },
    { icon: LogOutIcon, href: "/", title: "Sair" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

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
                        href: "/dashboard",
                        label: "Conta do Usúario",
                    },
                    {
                        href: "/dashboard",
                        label: "Dashboard",
                        active: true,
                    },
                ]}
            />

            <section className="flex gap-[24px] px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:pt-[40px] md:pb-[72px]">
                <Card className="hidden xl:block max-w-[264px] w-full h-max shadow-none border-[1px] border-neutral-300 rounded-[4px] p-[0px]">
                    <CardContent className="w-full flex flex-col gap-[8px] items-center justify-center p-[0px]">
                        {sidebarLinks.map((link, index) => (
                            <Link
                                key={index}
                                className={clsx(
                                    "w-full h-[48px] flex items-center justify-start gap-[12px] px-[24px] text-b-sm leading-b-sm font-medium text-neutral-600",
                                    {
                                        "bg-primary text-white":
                                            pathname === link.href,
                                    },
                                )}
                                href={link.href}
                            >
                                <link.icon className="size-[20px]" />
                                {link.title}
                            </Link>
                        ))}
                    </CardContent>
                </Card>

                {children}
            </section>
        </main>
    );
}

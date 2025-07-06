"use client";

import Link from "next/link";

import {
    CircleAlertIcon,
    ClockIcon,
    CreditCardIcon,
    HeadsetIcon,
    HeartIcon,
    LayoutDashboardIcon,
    MapPinIcon,
    NotepadTextIcon,
    RefreshCcwIcon,
    SettingsIcon,
    ShoppingBasketIcon,
    ShoppingCartIcon,
} from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const sidebarLinks = [
    {
        title: "Acesso Rápido",
        links: [
            { href: "/wishlist", icon: HeartIcon, title: "Favoritos" },
            {
                href: "/shopping-cart",
                icon: ShoppingCartIcon,
                title: "Carrinho de Compras",
            },
            { href: "/shop", icon: ShoppingBasketIcon, title: "Comprar" },
            {
                href: "/track-order",
                icon: MapPinIcon,
                title: "Rastrear Pedido",
            },
            { href: "/compare", icon: RefreshCcwIcon, title: "Comparar" },
            { href: "/suport", icon: HeadsetIcon, title: "Suporte" },
            { href: "/help", icon: CircleAlertIcon, title: "Ajuda" },
        ],
    },
    {
        title: "Minha Conta",
        links: [
            {
                icon: LayoutDashboardIcon,
                href: "/dashboard",
                title: "Dashboard",
            },
            {
                icon: NotepadTextIcon,
                href: "/dashboard/order-history",
                title: "Histórico de Pedido",
            },
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
            {
                icon: SettingsIcon,
                href: "/dashboard/settings",
                title: "Configurações",
            },
        ],
    },
];

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="w-[290px] h-[100vh] p-[20px] md:hidden flex flex-col items-start justify-start gap-y-[24px] bg-neutral-100 absolute top-[60px] right-[0px] z-100 border-l-[1px] border-neutral-300">
            {sidebarLinks.map((sidebarLink, index) => (
                <div
                    key={index}
                    className="w-[100%] flex flex-col items-start justify-start gap-y-[12px]"
                >
                    <h5 className="text-b-sm leading-b-sm font-semibold">
                        {sidebarLink.title}
                    </h5>

                    <ul className="w-[100%] flex flex-col items-start justify-start">
                        {sidebarLink.links.map((link, index) => (
                            <li
                                key={index}
                                className={clsx(
                                    "w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-200",
                                    {
                                        "bg-primary hover:bg-primary font-semibold text-white":
                                            pathname === link.href,
                                    },
                                )}
                            >
                                <Link
                                    className="w-[100%] flex items-start justify-start gap-x-[18px] text-b-md leading-b-md"
                                    href={link.href}
                                >
                                    <link.icon className="size-[24px] stroke-[1.5px]" />
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

"use client";

import Link from "next/link";

import {
    CircleAlertIcon,
    HeadsetIcon,
    HeartIcon,
    MapPinIcon,
    RefreshCcwIcon,
    ShoppingBagIcon,
    ShoppingBasketIcon,
    UserCircle2Icon,
} from "lucide-react";

const sidebarLinks = [
    {
        id: 1,
        title: "Acesso Rápido",
        links: [
            {
                id: 1,
                href: "/shop",
                icon: (
                    <ShoppingBasketIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Comprar",
            },
            {
                id: 2,
                href: "/wishlist",
                icon: (
                    <HeartIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Favoritos",
            },
            {
                id: 3,
                href: "/shopping-cart",
                icon: (
                    <ShoppingBagIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Meus Produtos",
            },
            {
                id: 4,
                href: "/dashboard/settings",
                icon: (
                    <UserCircle2Icon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Minha Conta",
            },
        ],
    },
    {
        id: 2,
        title: "Central de Ajuda",
        links: [
            {
                id: 5,
                href: "/track-order",
                icon: (
                    <MapPinIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Rastrear Pedido",
            },
            {
                id: 6,
                href: "/compare",
                icon: (
                    <RefreshCcwIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Comparar",
            },
            {
                id: 7,
                href: "/suport",
                icon: (
                    <HeadsetIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Suporte",
            },
            {
                id: 8,
                href: "/help",
                icon: (
                    <CircleAlertIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                ),
                title: "Ajuda",
            },
        ],
    }
];

export const Sidebar = () => {
    return (
        <section className="w-[290px] h-[100vh] p-[20px] md:hidden flex flex-col items-start justify-start gap-y-[24px] bg-neutral-100 absolute top-[60px] right-[0px] z-100 border-l-[1px] border-neutral-300">
            {sidebarLinks.map((sidebarLink) => (
                <div key={sidebarLink.id} className="w-[100%] flex flex-col items-start justify-start gap-y-[12px]">
                <h5 className="text-b-sm leading-b-sm font-semibold">
                    Acesso Rápido
                </h5>

                <ul className="w-[100%] flex flex-col items-start justify-start">
                    {sidebarLink.links.map((link) => (
                        <li
                            className="w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-200"
                            key={link.id}
                        >
                            <Link
                                className="w-[100%] flex items-start justify-start gap-x-[18px] text-b-md leading-b-md font-normal"
                                href={link.href}
                            >
                                {link.icon}
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            ))}
        </section>
    );
}

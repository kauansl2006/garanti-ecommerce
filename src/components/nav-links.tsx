"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    CircleAlertIcon,
    HeadsetIcon,
    MapPinIcon,
    RefreshCcwIcon,
    ShoppingBasketIcon,
} from "lucide-react";

import clsx from "clsx";

const navLinks = [
    {
        href: "/shop",
        icon: ShoppingBasketIcon,
        title: "Comprar",
    },
    {
        href: "/track-order",
        icon: MapPinIcon,
        title: "Rastrear Pedido",
    },
    {
        href: "/compare",
        icon: RefreshCcwIcon,
        title: "Comparar",
    },
    {
        href: "/suport",
        icon: HeadsetIcon,
        title: "Suporte",
    },
    {
        href: "/help",
        icon: CircleAlertIcon,
        title: "Ajuda",
    },
];

export const NavLinks = () => {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link
                        className={clsx(
                            "w-[100%] p-[8px] rounded-[4px] flex text-nowrap items-center justify-center gap-x-[8px] text-b-sm leading-b-sm font-medium text-neutral-300 hover:bg-neutral-800",
                            {
                                "bg-primary hover:bg-primary font-semibold":
                                    pathname === link.href,
                            },
                        )}
                        href={link.href}
                    >
                        <link.icon className="size-[24px] stroke-[1.5px]" />
                        {link.title}
                    </Link>
                </li>
            ))}
        </>
    );
};

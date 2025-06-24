"use client";

import Link from "next/link";

import {
    CircleAlertIcon,
    HeadsetIcon,
    MapPinIcon,
    RefreshCcwIcon,
    ShoppingBasketIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
    {
        id: 1,
        href: "/shop",
        icon: (
            <ShoppingBasketIcon className="size-[24px] stroke-[1.5]" />
        ),
        title: "Comprar",
    },
    {
        id: 2,
        href: "#",
        icon: (
            <MapPinIcon className="size-[24px] stroke-[1.5]" />
        ),
        title: "Rastrear Pedido",
    },
    {
        id: 3,
        href: "#",
        icon: (
            <RefreshCcwIcon className="size-[24px] stroke-[1.5]" />
        ),
        title: "Comparar",
    },
    {
        id: 4,
        href: "#",
        icon: (
            <HeadsetIcon className="size-[24px] stroke-[1.5]" />
        ),
        title: "Suporte",
    },
    {
        id: 5,
        href: "#",
        icon: (
            <CircleAlertIcon className="size-[24px] stroke-[1.5]" />
        ),
        title: "Ajuda",
    },
];


export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link) => (
            <li key={link.id} >
                <Link
                    className={clsx(
                        "w-[100%] p-[8px] rounded-[4px] flex text-nowrap items-center justify-center gap-x-[8px] text-b-sm leading-b-sm font-medium text-neutral-300 hover:bg-neutral-800",
                        {
                            "bg-primary hover:bg-primary font-semibold" : pathname === link.href
                        }
                    )}
                    href={link.href}
                >
                    {link.icon}
                    {link.title}
                </Link>
            </li>
        ))}
        </>
    )
}
"use client";

import Image from "next/image";
import Link from "next/link";

import {
    ChevronDownIcon,
    HeartIcon,
    MenuIcon,
    ShoppingCartIcon,
    UserCircle2Icon,
} from "lucide-react";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { 
    Logo,
    Searchbar,
    NavLinks,
    Sidebar
} from "@/components";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen((prev) => !prev);

    return (
        <header className="w-[100%] flex flex-col items-center justify-center bg-white fixed z-100 md:relative">
            <section className="hidden w-[100%] px-[12px] xl:px-[15.625%] py-[12px] lg:flex items-center justify-between border-b-[1px] border-neutral-300">
                <div className="text-b-sm leading-b-sm font-normal">
                    Bem-vindo à loja online da Garanti.
                </div>
                <div className="flex items-center justify-center gap-x-[12px] text-b-sm leading-b-sm font-normal">
                    Siga-nos:
                    <div className="flex items-center justify-center gap-x-[12px]">
                        <Link href="#">
                            <Image
                                src="/x.svg"
                                width={16}
                                height={16}
                                alt="Logo do X"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/instagram.svg"
                                width={16}
                                height={16}
                                alt="Logo do Instagram"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/facebook.svg"
                                width={16}
                                height={16}
                                alt="Logo do Facebook"
                            />
                        </Link>
                    </div>
                    |
                    <Image
                        src="/brazil.svg"
                        width={28}
                        height={16}
                        alt="Logo do X"
                    />
                </div>
            </section>
            <section className="w-[100%] h-[60px] md:h-auto px-[12px] xl:px-[15.625%] py-[18px] flex items-center justify-between border-b-[1px] border-neutral-300">
                <Link href="/" className="w-[150px] h-[50px] md:w-[180px] md:h-[70px] relative">
                    <Image
                        src="/light-logo.svg"
                        fill={true}
                        alt="Logo da Garanti"
                    />
                </Link>

                <Searchbar />

                <div className="hidden md:flex lg:hidden xl:flex items-center justify-center gap-[8px]">
                    <Link
                        className="p-[8px] rounded-[4px] hover:bg-neutral-200 xl:hover:bg-white xl:p-[4px] xl:rounded-[0px]"
                        href="/wishlist"
                    >
                        <HeartIcon className="size-[28px] xl:size-[32px] stroke-[1.5] text-neutral-900" />
                    </Link>
                    <Link
                        className="p-[8px] rounded-[4px] hover:bg-neutral-200 xl:hover:bg-white xl:p-[4px] xl:rounded-[0px]"
                        href="/shopping-cart"
                    >
                        <ShoppingCartIcon className="size-[28px] xl:size-[32px] stroke-[1.5] text-neutral-900" />
                    </Link>
                    <Link
                        className="p-[8px] rounded-[4px] hover:bg-neutral-200 xl:hover:bg-white xl:p-[4px] xl:rounded-[0px]"
                        href="/dashboard"
                    >
                        <UserCircle2Icon className="size-[28px] xl:size-[32px] stroke-[1.5] text-neutral-900" />
                    </Link>
                </div>

                <Button
                    onClick={handleOpen}
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer block md:hidden"
                >
                    <MenuIcon className="size-[32px] stroke-[1.5] text-neutral-900" />
                </Button>
            </section>
            <section className="hidden w-[100%] py-[8px] px-[12px] xl:px-[15.625%] md:flex items-center justify-between bg-neutral-900">
                <ul className="flex items-center justify-center gap-x-[20px]">
                    <li className="hidden lg:block w-[100%] p-[8px] rounded-[4px] bg-neutral-800">
                        <Link
                            className="w-[100%] flex text-nowrap items-center justify-center gap-x-[8px] text-b-sm leading-b-sm font-medium text-neutral-300"
                            href="#"
                        >
                            Categorias
                            <ChevronDownIcon className="size-[18px] stroke-[1.5] text-neutral-500" />
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className="hidden lg:flex xl:hidden 2xl:hidden items-center justify-center gap-[18px]">
                    <Link
                        className="p-[8px] rounded-[4px] hover:bg-neutral-800"
                        href="/wishlist"
                    >
                        <HeartIcon className="size-[28px] stroke-[1.5] text-white" />
                    </Link>
                    <Link
                        className="p-[8px] rounded-[4px] hover:bg-neutral-800"
                        href="/shopping-cart"
                    >
                        <ShoppingCartIcon className="size-[28px] stroke-[1.5] text-white" />
                    </Link>
                    <Link
                        className="p-[8px] rounded-[4px] hover:bg-neutral-800"
                        href="/dashboard"
                    >
                        <UserCircle2Icon className="size-[28px] stroke-[1.5] text-white" />
                    </Link>
                </div>
            </section>
            {isOpen && <Sidebar />}
        </header>
    );
}


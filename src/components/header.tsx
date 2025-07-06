"use client";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowRightIcon,
    ChevronDownIcon,
    HeartIcon,
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserCircle2Icon,
} from "lucide-react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { categories, products } from "@/lib/placeholder-data";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLinks } from "@/components/nav-links";
import { SmallProductCard } from "@/components/small-product-card";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";

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
                <Link
                    href="/"
                    className="w-[150px] h-[50px] md:w-[180px] md:h-[70px] relative"
                >
                    <Image
                        src="/light-logo.svg"
                        fill={true}
                        alt="Logo da Garanti"
                    />
                </Link>

                <div className="hidden md:flex lg:flex max-w-[440px] xl:max-w-[540px] w-[100%] items-center justify-center relative">
                    <SearchIcon className="size-[18px] stroke-[1.5] text-neutral-900 absolute left-[10px]" />
                    <Input
                        type="text"
                        placeholder="Procure por produtos aqui..."
                        className="rounded-l-[4px] rounded-r-none pl-[40px] h-[38px] xl:h-[42px]"
                    />
                    <Button
                        variant="default"
                        size="default"
                        className="cursor-pointer rounded-l-none rounded-r-[4px] h-[38px] xl:h-[42px]"
                    >
                        Pesquisar
                    </Button>
                </div>

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
                    <li className="hidden lg:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="w-full rounded-[4px] bg-neutral-800 hover:bg-neutral-800 flex text-nowrap items-center justify-center gap-x-[8px] text-b-sm leading-b-sm font-medium text-neutral-300">
                                    Categorias
                                    <ChevronDownIcon className="size-[18px] stroke-[1.5] text-neutral-500" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="hidden lg:block ml-[10px] xl:ml-[150px] mt-[20px] w-[280px] p-[0px] rounded-[0px]">
                                {categories.map((category, index) => (
                                    <DropdownMenuSub key={index}>
                                        <DropdownMenuSubTrigger className="px-[24px] w-full h-[44px] rounded-[0px] flex items-center justify-between text-b-sm leading-b-sm font-medium">
                                            {category.title}
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="hidden lg:block ml-[10px] w-full p-[20px] rounded-[0px]">
                                            <div className="grid grid-cols-[repeat(2,auto)] 2xl:grid-cols-[repeat(3,auto)] gap-[16px]">
                                                <div className="flex flex-col">
                                                    {products
                                                        .slice(0, 9)
                                                        .map((product) => (
                                                            <DropdownMenuItem
                                                                className="px-[24px] h-[44px] rounded-[0px] flex items-center justify-between "
                                                                key={product.id}
                                                            >
                                                                <Link
                                                                    className="max-w-[164px] w-full text-nowrap overflow-hidden text-ellipsis"
                                                                    href={`/product-details/${product.id}`}
                                                                >
                                                                    {
                                                                        product.title
                                                                    }
                                                                </Link>
                                                            </DropdownMenuItem>
                                                        ))}
                                                </div>
                                                <div className="flex flex-col gap-[10px]">
                                                    <h3 className="text-b-md leading-b-md font-semibold">
                                                        Melhores Ofertas
                                                    </h3>

                                                    {products
                                                        .slice(0, 3)
                                                        .map((product) => (
                                                            <SmallProductCard
                                                                key={product.id}
                                                                product={
                                                                    product
                                                                }
                                                            />
                                                        ))}
                                                </div>
                                                <div className="hidden max-w-[312px] w-full p-[15px] 2xl:p-[32px] bg-[#F7E99E] 2xl:flex flex-col items-center justify-center gap-[10px] rounded-[4px]">
                                                    <div className="size-[96px] relative">
                                                        <Image
                                                            src="/xiomi-mi-11.png"
                                                            fill={true}
                                                            alt="Foto do Xiomi"
                                                        />
                                                    </div>
                                                    <div className="text-center flex items-center justify-center flex-col gap-[8px]">
                                                        <h2 className="text-h-03 leading-h-03 md:text-h-02 md:leading-h-02 font-semibold">
                                                            21% Desconto
                                                        </h2>
                                                        <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                                                            Fuja do barulho. É
                                                            hora de ouvir a
                                                            magia com os fones
                                                            de ouvido Xiaomi.
                                                        </p>
                                                    </div>
                                                    <Link
                                                        href="/shop"
                                                        className="bg-primary text-white text-b-sm leading-b-sm font-medium text-nowrap cursor-pointer w-[156px] h-[48px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
                                                    >
                                                        Ver agora
                                                        <ArrowRightIcon className="size-[20px] stroke-[1.5px] text-white" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
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
};

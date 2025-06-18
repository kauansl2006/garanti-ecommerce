"use client";

import Image from "next/image";
import Link from "next/link";

import { 
    ChevronDownIcon,
    CircleAlertIcon,
    HeadsetIcon,
    HeartIcon,
    MapPinIcon,
    MenuIcon,
    RefreshCcwIcon,
    SearchIcon, 
    ShoppingBagIcon, 
    ShoppingBasketIcon,
    UserCircle2Icon
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Logo from "@/components/logo";
import { useState } from "react";

const navLinks = [
    {
        id: 1,
        href: "#",
        icon: <ShoppingBasketIcon className="size-[24px] stroke-[1.5] text-neutral-500" />,
        title: "Comprar",
    },
    {
        id: 2,
        href: "#",
        icon: <MapPinIcon className="size-[24px] stroke-[1.5] text-neutral-500" />,
        title: "Rastrear Pedido",
    },
    {
        id: 3,
        href: "#",
        icon: <RefreshCcwIcon className="size-[24px] stroke-[1.5] text-neutral-500" />,
        title: "Comparar",
    },
    {
        id: 4,
        href: "#",
        icon: <HeadsetIcon className="size-[24px] stroke-[1.5] text-neutral-500" />,
        title: "Suporte"
    },
    {
        id: 5,
        href: "#",
        icon: <CircleAlertIcon className="size-[24px] stroke-[1.5] text-neutral-500" />,
        title: "Ajuda"
    }
]

export default function HeaderDesktop() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        return setIsOpen(prev => !prev);
    }

    return (
        <header className="w-[100%] flex flex-col items-center justify-center bg-white relative">
            <section className="hidden w-[100%] px-[12px] xl:px-[15.625%] py-[12px] lg:flex items-center justify-between border-b-[1px] border-neutral-300">
            <div className="text-b-sm leading-b-sm font-normal">Bem-vindo à loja online da Garanti.</div>
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
                <Logo src="/light-logo.svg" width={150} height={50} className="md:w-[180px] md:h-[70px]"/>

                <div className="hidden md:flex lg:flex max-w-[440px] xl:max-w-[540px] w-[100%] items-center justify-center relative">
                    <SearchIcon className="size-[18px] stroke-[1.5] text-neutral-900 absolute left-[10px]" />
                    <Input 
                        type="text" 
                        placeholder="Procure por produtos aqui..."
                        className="rounded-l-[4px] rounded-r-none pl-[40px] h-[38px] xl:h-[42px]"
                    />
                    <Button variant="default" size="default" className="cursor-pointer rounded-l-none rounded-r-[4px] h-[38px] xl:h-[42px]">
                        Pesquisar
                    </Button>
                </div>

                <div className="hidden md:flex lg:hidden xl:flex items-center justify-center gap-[8px]">
                    <Link className="p-[8px] rounded-[4px] hover:bg-neutral-200 xl:hover:bg-white xl:p-[4px] xl:rounded-[0px]" href="#">
                        <HeartIcon className="size-[28px] xl:size-[32px] stroke-[1.5] text-neutral-900" />
                    </Link>
                    <Link className="p-[8px] rounded-[4px] hover:bg-neutral-200 xl:hover:bg-white xl:p-[4px] xl:rounded-[0px]" href="#">
                        <ShoppingBagIcon className="size-[28px] xl:size-[32px] stroke-[1.5] text-neutral-900" />
                    </Link>
                    <Link className="p-[8px] rounded-[4px] hover:bg-neutral-200 xl:hover:bg-white xl:p-[4px] xl:rounded-[0px]" href="#">
                        <UserCircle2Icon className="size-[28px] xl:size-[32px] stroke-[1.5] text-neutral-900" />
                    </Link>
                </div>

                <Button onClick={() => handleOpen()} variant="ghost" size="icon" className="cursor-pointer block md:hidden">
                    <MenuIcon className="size-[32px] stroke-[1.5] text-neutral-900" />
                </Button>
            </section>
            <section className="hidden w-[100%] py-[8px] px-[12px] xl:px-[15.625%] md:flex items-center justify-between bg-neutral-900">
                <ul className="flex items-center justify-center gap-x-[20px]">
                    <li className="hidden lg:block w-[100%] p-[8px] rounded-[4px] bg-neutral-800">
                        <Link className="w-[100%] flex text-nowrap items-center justify-center gap-x-[8px] text-b-sm leading-b-sm font-medium text-neutral-300" href="#">
                            Categorias
                            <ChevronDownIcon className="size-[18px] stroke-[1.5] text-neutral-500" />
                        </Link>
                    </li>
                    {navLinks.map((link) => (
                        <li className="w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-800" key={link.id}>
                            <Link className="w-[100%] flex text-nowrap items-center justify-center gap-x-[8px] text-b-sm leading-b-sm font-medium text-neutral-300" href={link.href}>
                                {link.icon}
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex xl:hidden 2xl:hidden items-center justify-center gap-[18px]">
                    <Link className="p-[8px] rounded-[4px] hover:bg-neutral-800" href="#">
                        <HeartIcon className="size-[28px] stroke-[1.5] text-white" />
                    </Link>
                    <Link className="p-[8px] rounded-[4px] hover:bg-neutral-800" href="#">
                        <ShoppingBagIcon className="size-[28px] stroke-[1.5] text-white" />
                    </Link>
                    <Link className="p-[8px] rounded-[4px] hover:bg-neutral-800" href="#">
                        <UserCircle2Icon className="size-[28px] stroke-[1.5] text-white" />
                    </Link>
                </div>
            </section>
            {isOpen && <Sidebar />}
        </header>
    )
}

function Sidebar() {
    return (
        <section className="w-[290px] h-[100vh] p-[20px] md:hidden flex flex-col items-start justify-start gap-y-[24px] bg-neutral-100 absolute top-[60px] right-[0px] border-l-[1px] border-neutral-300">

            <div className="w-[100%] flex flex-col items-start justify-start gap-y-[12px]">
                <h5 className="text-b-sm leading-b-sm font-semibold">Acesso Rápido</h5>

                <ul className="w-[100%] flex flex-col items-start justify-start">
                    {navLinks.slice(0, 4).map((link) => (
                        <li className="w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-200" key={link.id}>
                            <Link className="w-[100%] flex items-start justify-start gap-x-[18px] text-b-md leading-b-md font-normal" href={link.href}>
                                {link.icon}
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="w-[100%] flex flex-col items-start justify-start gap-y-[12px]">
                <h5 className="text-b-sm leading-b-sm font-semibold">Central de Ajuda</h5>

                <ul className="w-[100%] flex flex-col items-start justify-start">
                    {navLinks.slice(4).map((link) => (
                        <li className="w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-200" key={link.id}>
                            <Link className="w-[100%] flex items-start justify-start gap-x-[18px] text-b-md leading-b-md font-normal" href={link.href}>
                                {link.icon}
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
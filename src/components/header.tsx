"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ShoppingBagIcon,
    HeartIcon,
    UserCircle2Icon,
    PhoneIcon,
    SearchIcon,
    MapPinIcon,
    RefreshCcwIcon,
    HeadsetIcon,
    InfoIcon
} from "lucide-react";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
    return (
        <header className="w-[100%] flex flex-col items-center justify-center bg-white">
            <section className="w-[100%] px-[300px] py-[12px] flex items-center justify-between">
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
            <section className="w-[100%] px-[300px] py-[20px] border-y-[1px] flex items-center justify-between">
                <Logo src="/light-logo.svg" />
                <div>
                    <div className="w-[540px] flex items-center justify-center gap-x-0 relative">
                        <SearchIcon size={20} strokeWidth={1.5} className="absolute left-[10px]" />
                        <Input className="focus-visible:border-input focus-visible:ring-0 pl-[40px] py-[20px] rounded-l-[4px] rounded-r-[0px] text-b-sm leading-b-sm font-normal" type="text" placeholder="Busque por produtos aqui..." />
                        <Button className="cursor-pointer py-[20px] rounded-r-[4px] rounded-l-[0px]" variant="default">
                            Pesquisar
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-[24px]">
                    <Link href="/">
                        <ShoppingBagIcon size={32} strokeWidth={1.5} />
                    </Link>
                    <Link href="/">
                        <HeartIcon size={32} strokeWidth={1.5} />
                    </Link>
                    <Link href="/">
                        <UserCircle2Icon size={32} strokeWidth={1.5} />
                    </Link>
                </div>
            </section>
            <section className="w-[100%] px-[300px] py-[16px] flex items-center justify-between bg-neutral-900">
                <NavigationMenu>
                    <NavigationMenuList className="flex-row gap-x-[24px]">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-neutral-800 text-white py-[20px] rounded-[4px] hover:bg-neutral-800 hover:text-white focus:bg-neutral-800 focus:text-white data-[state=open]:hover:bg-neutral-800 data-[state=open]:text-white data-[state=open]:focus:bg-neutral-800 data-[state=open]:bg-neutral-800">
                                Categorias
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Categoria 1</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-white data-[active=true]:focus:bg-neutral-900 data-[active=true]:hover:bg-neutral-900 data-[active=true]:bg-neutral-900 data-[active=true]:text-white hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white" asChild>
                                <Link href="#" className="flex-row items-center gap-x-[6px]">
                                    <MapPinIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                                    Rastrear Pedido
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-white data-[active=true]:focus:bg-neutral-900 data-[active=true]:hover:bg-neutral-900 data-[active=true]:bg-neutral-900 data-[active=true]:text-white hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white" asChild>
                                <Link href="#" className="flex-row items-center gap-x-[6px]">
                                  <RefreshCcwIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                                    Comparar
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-white data-[active=true]:focus:bg-neutral-900 data-[active=true]:hover:bg-neutral-900 data-[active=true]:bg-neutral-900 data-[active=true]:text-white hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white" asChild>
                                <Link href="#" className="flex-row items-center gap-x-[6px]">
                                    <HeadsetIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                                    Suporte
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <NavigationMenuLink className="text-white data-[active=true]:focus:bg-neutral-900 data-[active=true]:hover:bg-neutral-900 data-[active=true]:bg-neutral-900 data-[active=true]:text-white hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white" asChild>
                                <Link href="#" className="flex-row items-center gap-x-[6px]">
                                    <InfoIcon className="size-[24px] stroke-[1.5] text-neutral-500" />
                                    Ajuda
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center justify-center gap-x-[8px] text-b-lg leading-b-lg font-normal text-white">
                    <PhoneIcon size={24} strokeWidth={1.5} color="white" />
                    +1-202-555-0104
                </div>
            </section>
        </header>
    )
}
"use client";

import Link from "next/link";

import {
    HomeIcon,
    TruckIcon,
    KeyRoundIcon,
    CreditCardIcon,
    UserIcon,
    HeartIcon,
    PackageSearchIcon,
    ShoppingCartIcon,
    StoreIcon,
    MessageCircleMoreIcon,
    PhoneIcon,
    SearchIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Breadcrumb } from "@/components/breadcrumb";

const helpLinks = [
    {
        icon: TruckIcon,
        title: "Restrear Pedido",
        href: "#",
    },
    {
        icon: KeyRoundIcon,
        title: "Redefinir Senha",
        href: "#",
    },
    {
        icon: CreditCardIcon,
        title: "Opções de Pagamento",
        href: "#",
    },
    {
        icon: UserIcon,
        title: "Usuário e Conta",
        href: "#",
    },
    {
        icon: HeartIcon,
        title: "Favoritos e Comparar",
        href: "#",
    },
    {
        icon: PackageSearchIcon,
        title: "Envio e cobrança",
        href: "#",
    },
    {
        icon: ShoppingCartIcon,
        title: "Compras e Carteira",
        href: "#",
    },
    {
        icon: StoreIcon,
        title: "Loja Física",
        href: "#",
    },
];

const popularTopics = [
    {
        title: "Como rastrear meu pedido?",
        href: "#",
    },
    {
        title: "Como redefinir minha senha?",
        href: "#",
    },
    {
        title: "Formas de pagamento aceitas",
        href: "#",
    },
    {
        title: "Como alterar meus dados de conta",
        href: "#",
    },
    {
        title: "Problemas com entrega",
        href: "#",
    },
    {
        title: "Como adicionar produtos à lista de desejos",
        href: "#",
    },
    {
        title: "Posso retirar na loja física?",
        href: "#",
    },
    {
        title: "Como utilizar cupons de desconto",
        href: "#",
    },
    {
        title: "Política de trocas e devoluções",
        href: "#",
    },
];

export default function Suport() {
    return (
        <main className="w-screen">
            <Breadcrumb
                breadcrumbs={[
                    {
                        icon: HomeIcon,
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Suporte ao Cliente",
                        href: "/suport",
                        active: true,
                    },
                ]}
            />
            <section className="w-full px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:py-[72px] flex flex-col items-center justify-center gap-[40px]">
                <div className="flex flex-col items-center justify-center gap-[16px] max-w-[850px] w-full">
                    <h1 className="text-h-03 leading-h-03 md:text-h-01 md:leading-h-01 font-semibold text-center">
                        Como podemos ajudar você?
                    </h1>

                    <p className="text-b-sm leading-b-sm md:text-b-md md:leading-b-md text-neutral-500 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti neque ab aliquam numquam nam eos nostrum,
                        commodi sit excepturi magni
                    </p>
                </div>

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

                <Separator
                    orientation="horizontal"
                    className="bg-neutral-300"
                />
            </section>
            <section className="w-full px-[5.625%] xl:px-[15.625%] py-[35.10px] md:py-[72px] flex flex-col items-center justify-center gap-[40px]">
                <h1 className="text-h-03 leading-h-03 md:text-h-01 md:leading-h-01 font-semibold text-center">
                    Em que podemos ajudar você hoje?
                </h1>

                <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[12px] xl:gap-[24px]">
                    {helpLinks.map((link, index) => (
                        <div
                            key={index}
                            className="sm:max-w-[312px] w-full min-h-[80px] p-[24px] rounded-[4px] flex items-center justify-start gap-[16px] bg-white border-[1px] border-neutral-300 hover:border-[1.5px] hover:border-primary"
                        >
                            <link.icon className="size-[32px] stroke-[1.5px] text-primary" />
                            <Link
                                href={link.href}
                                className="text-b-md leading-b-md font-medium"
                            >
                                {link.title}
                            </Link>
                        </div>
                    ))}
                </div>

                <Separator
                    orientation="horizontal"
                    className="bg-neutral-300"
                />
            </section>
            <section className="w-auto sm:w-full px-[5.625%] xl:px-[15.625%] py-[35.10px] md:py-[72px] flex flex-col items-center justify-center gap-[40px]">
                <h3 className="text-h-03 leading-h-03 font-semibold text-start sm:text-center">
                    Tópicos Populares
                </h3>

                <ul className="pl-[10.625%] md:pl-[0%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[8px] lg:gap-[16px] list-disc">
                    {popularTopics.map((topic, index) => (
                        <li key={index}>
                            <Link
                                href={topic.href}
                                className="text-b-sm leading-b-sm md:text-b-md md:leading-b-md font-normal hover:text-primary list-disc"
                            >
                                {topic.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Separator
                    orientation="horizontal"
                    className="bg-neutral-300"
                />
            </section>
            <section className="w-full px-[5.625%] xl:px-[15.625%] py-[35.10px] md:py-[72px] flex flex-col items-center justify-center gap-[40px]">
                <h1 className="text-h-03 leading-h-03 md:text-h-01 md:leading-h-01 font-semibold text-center">
                    Não encontrou a resposta? <br />
                    Contate-nos.
                </h1>

                <div className="flex flex-col lg:flex-row gap-[12] sm:gap-[24px]">
                    <div className="lg:max-w-[50%] w-full flex gap-[24px] p-[15.10px] sm:p-[32px] bg-white border-[1px] border-neutral-300 rounded-[4px]">
                        <div className="size-[96px] p-[24px] rounded-[4px] flex items-center justify-center bg-neutral-200">
                            <PhoneIcon className="size-[48px] stroke-[1.5px] text-primary" />
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex flex-col gap-[8px]">
                                <p className="text-b-md leading-b-md md:text-b-lg md:leading-b-lg font-semibold">
                                    Ligue-nos agora
                                </p>
                                <p className="text-b-ty leading-b-ty sm:text-b-sm sm:leading-b-sm font-semibold text-neutral-600">
                                    Estamos disponíveis online das 9h00 às 17h00
                                    (GMT95:45) Fale conosco agora
                                </p>
                            </div>
                            <p className="text-b-lg leading-b-lg md:text-b-xll md:leading-b-xll font-normal">
                                +1-202-55-0126
                            </p>
                        </div>
                    </div>
                    <div className="lg:max-w-[50%] w-full flex gap-[24px] p-[15.10px] sm:p-[32px] bg-white border-[1px] border-neutral-300 rounded-[4px]">
                        <div className="size-[96px] p-[24px] rounded-[4px] flex items-center justify-center bg-neutral-200">
                            <MessageCircleMoreIcon className="size-[48px] stroke-[1.5px] text-success" />
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex flex-col gap-[8px]">
                                <p className="text-b-md leading-b-md md:text-b-lg md:leading-b-lg font-semibold">
                                    Converse conosco
                                </p>
                                <p className="text-b-ty leading-b-ty sm:text-b-sm sm:leading-b-sm font-semibold text-neutral-600">
                                    Estamos disponíveis online das 9h00 às 17h00
                                    (GMT95:45) Fale conosco agora
                                </p>
                            </div>
                            <p className="text-b-lg leading-b-lg md:text-b-xll md:leading-b-xll font-normal">
                                support@garanti.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

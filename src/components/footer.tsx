"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    {
        id: 1,
        title: "MINHA CONTA",
        links: [
            { id: 1, title: "Dashboard", href: "/dashboard" },
            {
                id: 2,
                title: "Histórico de Pedidos",
                href: "/dashboard/order-history",
            },
            { id: 3, title: "Lista de Desejos", href: "/dashboard/wishlist" },
            {
                id: 4,
                title: "Carrinho de Compras",
                href: "/dashboard/shopping-cart",
            },
        ],
    },
    {
        id: 2,
        title: "AJUDA",
        links: [
            { id: 1, title: "Contato", href: "#" },
            { id: 2, title: "Perguntas Frequentes", href: "/help" },
            { id: 3, title: "Termos e Condições", href: "#" },
            { id: 4, title: "Política de Privacidade", href: "#" },
        ],
    },
    {
        id: 3,
        title: "QUICKLINKS",
        links: [
            { id: 1, title: "Sobre nós", href: "#" },
            { id: 2, title: "Produtos", href: "/shop" },
            { id: 3, title: "Comparar", href: "/compare" },
            { id: 4, title: "Rastrear Pedidos", href: "/track-order" },
        ],
    },
];

const popularTags = [
    {
        id: 1,
        title: "Games",
    },
    {
        id: 2,
        title: "iphone",
    },
    {
        id: 3,
        title: "TV",
    },
    {
        id: 4,
        title: "Laptops",
    },
    {
        id: 5,
        title: "Macbook",
    },
    {
        id: 6,
        title: "SSD",
    },
    {
        id: 7,
        title: "Graphic Card",
    },
    {
        id: 8,
        title: "Power bank",
    },
    {
        id: 9,
        title: "Smart TV",
    },
    {
        id: 10,
        title: "Speaker",
    },
    {
        id: 11,
        title: "Tablet",
    },
    {
        id: 12,
        title: "Microwave",
    },
    {
        id: 13,
        title: "Samsung",
    },
];

export const Footer = () => {
    return (
        <footer className="w-[100%] flex flex-col items-center justify-center px-[12px] xl:px-[15.625%] bg-neutral-900">
            <section className="w-[100%] flex flex-wrap items-start justify-between gap-[25px] py-[60px]">
                <div className="w-[336px] flex flex-col xl:items-start xl:justify-start gap-y-[20px]">
                    <Link
                        href="/"
                        className="w-[150px] h-[50px] md:w-[180px] md:h-[70px] relative"
                    >
                        <Image
                            src="/dark-logo.svg"
                            fill={true}
                            alt="Logo da Garanti"
                        />
                    </Link>

                    <p className="text-b-sm leading-b-sm font-medium text-neutral-500">
                        Garanti é o template ideal para lojas brasileiras que
                        buscam performance, design moderno e experiência de
                        compra otimizada desde o primeiro clique.
                    </p>

                    <div className="flex items-center justify-start gap-x-[16px] text-b-sm leading-b-sm font-medium text-neutral-500">
                        <p className="text-b-sm leading-b-sm font-medium text-white border-b-primary border-b-2 py-[6px]">
                            (219) 555-0114
                        </p>
                        ou
                        <p className="text-b-sm leading-b-sm font-medium text-white border-b-primary border-b-2 py-[6px]">
                            Proxy@gmail.com
                        </p>
                    </div>
                </div>
                {footerLinks.map((footerLink) => (
                    <div
                        key={footerLink.id}
                        className="lg:max-w-[160px] flex flex-col items-start justify-start gap-y-[20px]"
                    >
                        <h5 className="text-l-02 leading-l-02 font-medium text-white">
                            {footerLink.title}
                        </h5>

                        <ul className="flex flex-col items-start justify-start text-b-sm leading-b-sm font-medium text-neutral-500">
                            {footerLink.links.map((link) => (
                                <li
                                    key={link.id}
                                    className="py-[6px] text-nowrap"
                                >
                                    <Link href={link.href}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="2xl:max-w-[256px] flex flex-col items-start justify-start gap-y-[20px]">
                    <h5 className="text-l-02 leading-l-02 font-medium text-white">
                        TAGS POPULARES
                    </h5>

                    <div className="flex flex-wrap items-start justify-start gap-[8px] text-b-sm leading-b-sm font-medium text-white">
                        {popularTags.map((tag) => (
                            <span
                                key={tag.id}
                                className="px-12px py-6px rounded-2px border-[1.5px] px-[12px] py-[6px] border-neutral-500 text-center"
                            >
                                {tag.title}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-[100%] flex text-center items-center justify-between py-[24px] border-t-[1px] border-t-neutral-500">
                <p className="text-b-sm leading-b-sm font-medium text-neutral-500">
                    Garanti eCommerce © 2025. Todos os direitos reservados
                </p>

                <Image
                    src="/payment-cards.svg"
                    width={280}
                    height={35}
                    alt="Métodos de Pagamento aceitos"
                    className="hidden md:block"
                />
            </section>
        </footer>
    );
};

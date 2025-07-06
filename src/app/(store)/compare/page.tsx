"use client";

import Image from "next/image";

import { Breadcrumb } from "@/components/breadcrumb";
import { Rating } from "@/components/rating";
import {
    HeartIcon,
    HomeIcon,
    ShoppingCartIcon,
    XCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const informations = [
    {
        label: null,
        key: "cardProduto",
    },
    {
        label: "Feedback do cliente",
        key: "feedbackCliente",
    },
    {
        label: "Preço",
        key: "preco",
    },
    {
        label: "Vendido por",
        key: "vendidoPor",
    },
    {
        label: "Marca",
        key: "marca",
    },
    {
        label: "Modelo",
        key: "modelo",
    },
    {
        label: "Status do estoque",
        key: "statusEstoque",
    },
    {
        label: "Tamanho",
        key: "tamanho",
    },
    {
        label: "Peso",
        key: "peso",
    },
];

const products = [
    {
        id: 1,
        title: "PlayStation®5 Slim Edição Digital com 2 Jogos ",
        description:
            "Experimente o carregamento extremamente rápido de um SSD de ultravelocidade, imersão mais profunda com ajuda da resposta tátil, gatilhos adaptáveis e áudio 3D, além dos dois jogos PlayStation® incríveis.",
        thumbnail: "/products/product-1/photo-1.png",
        price: 2707.9,
        discount: 20,
        availableQuantity: 10,
        score: 52.677,
        isAvailable: true,
        isActive: true,
        isHot: true,
        store: "PlayStation Oficial",
        brand: "Sony",
        model: "CFI-2000B",
        stock: "Disponível",
        size: "39 x 10 x 26 cm",
        weight: "3.2 kg",
    },
    {
        id: 2,
        title: "Fones de ouvido esportivos Bose - Fones de ouvido sem fio",
        description:
            "Desempenho superior com cancelamento de ruído ativo, ideal para treinos intensos e chamadas nítidas.",
        thumbnail: "/products/product-2/photo-1.png",
        price: 367.9,
        availableQuantity: 0,
        score: 22.677,
        isAvailable: false,
        isActive: true,
        isHot: false,
        store: "Bose Store",
        brand: "Bose",
        model: "Sport Earbuds",
        stock: "Esgotado",
        size: "7.8 x 5 x 3.4 cm",
        weight: "0.5 kg",
    },
    {
        id: 3,
        title: "Simple Mobile 4G LTE Prepaid Smartphone",
        description:
            "Smartphone desbloqueado com conectividade 4G LTE, câmera de alta qualidade e sistema Android.",
        thumbnail: "/products/product-3/photo-1.png",
        price: 1899.9,
        availableQuantity: 10,
        score: 41.115,
        isAvailable: true,
        isActive: true,
        isHot: false,
        store: "Simple Mobile",
        brand: "Samsung",
        model: "Galaxy A14",
        stock: "Disponível",
        size: "16 x 7.5 x 0.9 cm",
        weight: "0.8 kg",
    },
];

export default function Compare() {
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
                        label: "Comparar",
                        href: "/compare",
                        active: true,
                    },
                ]}
            />

            <section className="flex items-center justify-center px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:py-[72px]">
                <div className="w-[1320px] overflow-x-scroll bg-white border-[1px] border-neutral-300 rounded-[4px]">
                    <table>
                        <tbody>
                            {informations.map((information) => (
                                <tr
                                    key={information.key}
                                    className="even:bg-neutral-200"
                                >
                                    <th className="max-w-[336px] w-full text-start text-b-sm leading-b-sm font-normal text-neutral-700 text-nowrap border-x-[1px] border-neutral-300 border-collapse px-[24px] py-[12px]">
                                        {information.label
                                            ? information.label
                                            : ""}
                                    </th>
                                    {products.map((product, index) => (
                                        <td
                                            key={index}
                                            className="max-w-[336px] w-full border-x-[1px] border-neutral-300 border-collapse px-[24px] py-[12px]"
                                        >
                                            {information.key ===
                                                "cardProduto" && (
                                                <div className="flex flex-col items-center justify-center gap-[16px]">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="cursor-pointer rounded-full"
                                                    >
                                                        <XCircleIcon className="size-[24px] text-neutral-400" />
                                                    </Button>
                                                    <div className="size-[272px] relative">
                                                        <Image
                                                            src={
                                                                product.thumbnail
                                                            }
                                                            fill={true}
                                                            alt={`Imagem do ${product.title}`}
                                                        />
                                                    </div>
                                                    <p className="text-b-md leading-b-md font-normal">
                                                        {product.title}
                                                    </p>
                                                    <div className="w-full flex gap-[12px]">
                                                        <Button
                                                            variant="default"
                                                            size="default"
                                                            className="cursor-pointer flex gap-[8px] w-[212px] h-[48px] px-[24px] text-white text-[14px]/[48px] font-bold rounded-[4px]"
                                                        >
                                                            ADQUIRIR
                                                            <ShoppingCartIcon className="size-[20px] stroke-[1.5px] text-white" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="cursor-pointer size-[48px] rounded-[4px] bg-white hover:bg-primary text-primary hover:text-white p-[12px]"
                                                        >
                                                            <HeartIcon className="size-[24px] stroke-[1.5px]" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                            {information.key ===
                                                "feedbackCliente" &&
                                                product.score && (
                                                    <Rating
                                                        score={product.score}
                                                    />
                                                )}
                                            {information.key === "preco" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.price}
                                                </p>
                                            )}
                                            {information.key ===
                                                "vendidoPor" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.store}
                                                </p>
                                            )}
                                            {information.key === "marca" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.brand}
                                                </p>
                                            )}
                                            {information.key === "modelo" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.model}
                                                </p>
                                            )}
                                            {information.key ===
                                                "statusEstoque" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.stock}
                                                </p>
                                            )}
                                            {information.key === "tamanho" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.size}
                                                </p>
                                            )}
                                            {information.key === "peso" && (
                                                <p className="text-b-sm leading-b-sm font-normal">
                                                    {product.weight}
                                                </p>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { SmallProductCard } from "@/components/small-product-card";

import { products, categories, categoryProducts } from "@/lib/placeholder-data";

import {
    ArrowRightIcon,
    PackageIcon,
    TrophyIcon,
    CreditCardIcon,
    HeadsetIcon,
} from "lucide-react";

const features = [
    {
        icon: PackageIcon,
        title: "ENTREGA RÁPIDA",
        description: "Entrega em até 7 dias",
    },
    {
        icon: TrophyIcon,
        title: "24H DE RETORNO",
        description: "Garantia de 100% de devolução do dinheiro",
    },
    {
        icon: CreditCardIcon,
        title: "PAGAMENTO SEGURO",
        description: "Seu dinheiro está seguro",
    },
    {
        icon: HeadsetIcon,
        title: "SUPORTE 24/7",
        description: "Suporte 24 por dia, por 7 dias na semana",
    },
];

export default function Home() {
    const maxScore = Math.max(...products.map((product) => product.score ?? 0));
    const topProduct = products.find((product) => product.score === maxScore);
    const otherProducts = products.filter(
        (product) => product.id !== topProduct?.id,
    );

    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <section className="w-full h-full flex items-center justify-between gap-x-[24px] mt-[60px] md:mt-[0px] py-[24px] px-[5.625%] xl:px-[15.625%]">
                <div className="2xl:w-[872px] 2xl:h-[520px] w-full h-full flex flex-col-reverse md:flex-row items-center justify-center gap-[36px] bg-neutral-300 rounded-[4px] p-[20px] md:p-[50px]">
                    <div className="flex flex-col items-center sm:items-start gap-y-[24px]">
                        <div className="flex flex-col items-center sm:items-start gap-y-[16px]">
                            <div className="flex flex-col items-center sm:items-start">
                                <div className="text-b-sm leading-b-sm font-semibold text-primary">
                                    - THE BEST PLACE TO PLAY
                                </div>

                                <h3 className="text-d-05 leading-d-05 md:text-d-04 md:leading-d-04 xl:text-d-03 xl:leading-d-03 font-semibold">
                                    Console Xbox
                                </h3>
                            </div>

                            <p className="text-b-sm leading-b-sm md:text-b-md md:leading-b-md xl:text-b-lg xl:leading-b-lg font-normal text-neutral-700">
                                Save up to 50% on select Xbox games. Get 3
                                months of PC Game Pass for 12 USD.
                            </p>
                        </div>

                        <Link
                            href="/shop"
                            className="bg-primary text-white text-b-md leading-b-md font-medium text-nowrap cursor-pointer w-[190px] h-[56px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
                        >
                            Ver agora
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px] text-white" />
                        </Link>
                    </div>

                    <div className="max-w-[368px] max-h-[408px] w-full h-full relative">
                        <Image
                            src="/xbox.png"
                            width={368}
                            height={408}
                            alt="Imagem do Xbox"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                        <div className="bg-success text-white text-center text-[18px]/[100px] md:text-[22px]/[100px] font-semibold rounded-full px-[20px] md:px-[24px] size-[96px] md:size-[100px] absolute top-0 right-0">
                            $299
                        </div>
                    </div>
                </div>

                <div className="2xl:max-w-[424px] w-full h-full hidden 2xl:flex flex-col items-center justify-center gap-y-[24px]">
                    <div className="max-w-[424px] max-h-[248px] w-full h-full flex items-center justify-between  bg-neutral-900 rounded-[4px] p-[35px]">
                        <div className="flex flex-col items-start gap-y-[18px]">
                            <div className="flex flex-col items-start gap-y-[8px]">
                                <div className="text-l-sm leading-l-sm font-semibold text-warning">
                                    SUMMER SALES
                                </div>

                                <h3 className="text-h-03 leading-h-03 font-semibold text-white">
                                    New Google Pixel 6 Pro
                                </h3>
                            </div>

                            <Link
                                href="/shop"
                                className="bg-primary text-white text-b-sm leading-b-sm font-medium text-nowrap cursor-pointer w-[156px] h-[48px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
                            >
                                Ver agora
                                <ArrowRightIcon className="size-[20px] stroke-[1.5px] text-white" />
                            </Link>
                        </div>

                        <div className="max-w-[312px] max-h-[312px] w-full h-full relative">
                            <Image
                                src="/google-pixel-6-pro.png"
                                width={312}
                                height={312}
                                alt="Imagem do Smartphone"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                            <Badge
                                variant="default"
                                className="px-[12px] py-[4px] rounded-[4px] text-b-md leading-b-md font-semibold bg-[#EFD33D] text-foreground absolute top-[-10px] right-[-10px]"
                            >
                                22% OFF
                            </Badge>
                        </div>
                    </div>

                    <div className="max-w-[424px] max-h-[248px] w-full h-full flex items-center justify-between gap-x-[20px] bg-neutral-300 rounded-[4px] p-[35px]">
                        <div className="max-w-[312px] max-h-[312px] w-full h-full relative">
                            <Image
                                src="/xiaomi-flip-buds-pro.png"
                                width={312}
                                height={312}
                                alt="Imagem dos Fones"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        <div className="flex flex-col items-start gap-y-[18px]">
                            <div className="flex flex-col items-start gap-y-[12px]">
                                <h3 className="text-h-03 leading-h-03 font-semibold">
                                    Xiaomi FlipBuds Pro
                                </h3>
                                <div className="text-b-lg leading-b-lg font-semibold text-primary">
                                    $299 USD
                                </div>
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
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center px-[5.625%] xl:px-[15.625%]">
                <div className="w-full grid 2xl:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(2,1fr)]  grid-cols-[repeat(1,1fr)] gap-x-[28px] p-[16px] bg-white border-[1px] border-neutral-300 rounded-[6px]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="2xl:max-w-[280px] 2xl:w-full flex items-start justify-start p-[16px] gap-x-[16px]"
                        >
                            <feature.icon className="size-[40px] stroke-[1px]" />

                            <div className="w-full flex flex-col items-start justify-start gap-y-[4px]">
                                <span className="text-l-03 leading-l-03 font-medium text-neutral-900">
                                    {feature.title}
                                </span>
                                <p className="text-b-ty leading-b-ty lg:text-b-sm lg:leading-b-sm font-normal text-neutral-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center gap-y-[24px] px-[5.625%] xl:px-[15.625%] py-[72px]">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col xl:flex-row items-center md:items-start xl:items-center justify-between gap-x-[24px]">
                        <h3 className="text-h-03 leading-h-03 font-semibold">
                            Melhores Ofertas
                        </h3>

                        <p className="flex flex-col sm:flex-row items-center justify-between gap-x-[12px]">
                            Oferta termina em:
                            <time
                                dateTime="2025-06-30T23:59:00-03:00"
                                className="bg-primary text-white px-[12px] py-[6px] rounded-[4px]"
                            >
                                11d : 06h : 20m : 45s
                            </time>
                        </p>
                    </div>

                    <Link
                        href="/shop"
                        className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-primary"
                    >
                        Visualizar todos os produtos
                        <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                    </Link>
                </div>

                <div className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] 2xl:grid-cols-[repeat(5,1fr)] items-center justify-center">
                    {topProduct && (
                        <div
                            key={topProduct.id}
                            className="md:hidden xl:block row-span-2 xl:max-w-[328px] w-full h-full"
                        >
                            <ProductCard product={topProduct} size="lg" />
                        </div>
                    )}

                    {otherProducts.map((product) => (
                        <div
                            key={product.id}
                            className="md:max-w-[248px] w-full h-full"
                        >
                            <ProductCard product={product} size="md" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center gap-y-[24px] md:gap-y-[40px] px-[5.625%] md:px-[10.625%] xl:px-[15.625%]">
                <h1 className="text-center text-nowrap md:text-wrap text-h-03 leading-h-03 xl:text-h-01 xl:leading-h-01 font-semibold">
                    Busque por Categorias
                </h1>
                <Carousel className="w-full">
                    <CarouselContent>
                        {categories.map((category) => (
                            <CarouselItem
                                className="basis-full xl:basis-1/6 max-w-[205px] max-h-[236px]"
                                key={category.id}
                            >
                                <CategoryCard category={category} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        variant="default"
                        className="cursor-pointer size-[48px] hover:bg-primary hidden md:inline-flex"
                    />
                    <CarouselNext
                        variant="default"
                        className="cursor-pointer size-[48px] hover:bg-primary hidden md:inline-flex"
                    />
                </Carousel>
            </section>

            <section className="w-full flex items-start justify-between gap-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] xl:py-[72px]">
                <div className="hidden 2xl:block max-w-[312px] w-full h-full">
                    <div className="w-full h-full flex flex-col items-center justify-center rounded-[4px] bg-[#F3DE6D]">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-[16px] px-[20px] py-[30px]">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-[12px]">
                                <div className="w-full h-full flex flex-col items-center justify-center gap-[8px]">
                                    <p className="text-b-sm leading-b-sm font-semibold text-[#BE4646]">
                                        COMPUTER & ACCESSORIES
                                    </p>
                                    <h1 className="text-h-01 leading-h-01 text-center font-semibold text-neutral-900">
                                        32% Discount
                                    </h1>
                                </div>

                                <p className="text-b-md leading-b-md font-normal text-neutral-700">
                                    For all ellectronics products
                                </p>
                            </div>

                            <div className="w-full flex items-center justify-center gap-[8px]">
                                <p className="text-b-sm leading-b-sm font-medium text-neutral-900">
                                    Offers ends in:
                                </p>
                                <Badge
                                    variant="default"
                                    className="px-[8px] py-[6px] rounded-[4px] text-b-sm leading-b-sm font-semibold text-neutral-900 bg-white"
                                >
                                    ENDS OF CHRISTMAS
                                </Badge>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="w-[191px] h-[56px] flex items-center justify-center gap-x-[12px] px-[32px] rounded-[4px] bg-primary text-white text-[15px]/[56px] font-bold text-nowrap"
                        >
                            VER AGORA
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>

                        <div className="w-[312px] h-[428px] relative">
                            <Image
                                src="/banners/banner-1.jpg"
                                fill={true}
                                alt="Banner 1"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-y-[24px]">
                    <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-y-[8px]">
                        <h3 className="text-h-03 leading-h-03 font-semibold">
                            Produtos em Destaque
                        </h3>

                        <div className="flex items-center justify-between gap-x-[16px]">
                            <div className="hidden md:flex items-center justify-center">
                                <Link
                                    href="#"
                                    className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] p-[8px] border-b-[2px] border-primary"
                                >
                                    Videogames
                                </Link>
                                <Link
                                    href="#"
                                    className="text-nowrap text-b-sm leading-b-sm font-normal flex items-center justify-start gap-x-[8px] p-[8px] text-neutral-600"
                                >
                                    Laptops
                                </Link>
                                <Link
                                    href="#"
                                    className="text-nowrap text-b-sm leading-b-sm font-normal flex items-center justify-start gap-x-[8px] p-[8px] text-neutral-600"
                                >
                                    SmartPhones
                                </Link>
                            </div>
                            <Link
                                href="#"
                                className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-primary"
                            >
                                Visualizar todos os produtos
                                <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] items-center justify-center">
                        {products.slice(0, 8).map((product) => (
                            <div
                                key={product.id}
                                className="md:max-w-[248px] w-full h-full"
                            >
                                <ProductCard product={product} size="md" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full 2xl:h-[336px] px-[5.625%] xl:px-[15.625%] flex flex-col 2xl:flex-row gap-[24px]">
                <div className="2xl:max-w-[648px] w-full h-full p-[44px] hidden sm:flex items-center bg-neutral-300 rounded-[4px] gap-x-[40px] relative">
                    <div className="w-[280px] flex flex-col items-start gap-y-[20px] z-10">
                        <div className="flex flex-col items-start gap-y-[12px]">
                            <div className="flex flex-col items-start gap-y-[8px]">
                                <Badge
                                    variant="default"
                                    className="text-b-sm leading-b-sm font-semibold text-white bg-neutral-900 px-[12px] h-[32px] rounded-none"
                                >
                                    INTRODUCING
                                </Badge>

                                <h1 className="text-h-01 leading-h-01 font-semibold text-neutral-900">
                                    New Apple <br />
                                    Homepod Mini
                                </h1>
                            </div>

                            <p className="text-b-md leading-b-md text-normal text-neutral-700">
                                Jam-packed with innovation, HomePod mini
                                delivers unexpectedly.
                            </p>
                        </div>

                        <Link
                            href="/shop"
                            className="h-[48px] flex items-center justify-center gap-x-[8px] px-[24px] rounded-[4px] bg-primary text-white text-[15px]/[56px] font-bold text-nowrap"
                        >
                            VER AGORA
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>
                    </div>

                    <div className="w-[204px] h-[204px] absolute right-[44px]">
                        <Image
                            src="/banners/apple-homepod-mini.png"
                            fill={true}
                            alt="Apple Homepod Mini"
                        />
                    </div>
                </div>

                <div className="2xl:max-w-[648px] w-full h-full p-[44px] flex items-center bg-neutral-900 rounded-[4px] gap-x-[40px] relative">
                    <div className="w-[300px] flex flex-col items-start gap-y-[20px] z-10">
                        <div className="flex flex-col items-start gap-y-[12px]">
                            <div className="flex flex-col items-start gap-y-[8px]">
                                <Badge
                                    variant="default"
                                    className="text-b-sm leading-b-sm font-semibold text-white bg-secondary px-[12px] h-[32px] rounded-none"
                                >
                                    INTRODUCING NEW
                                </Badge>

                                <h1 className="text-h-01 leading-h-01 font-semibold text-white">
                                    Xiaomi Mi 11 Ultra 12GB+256GB
                                </h1>
                            </div>

                            <p className="text-b-md leading-b-md text-normal text-neutral-400 line-clamp-2">
                                *Data provided by internal laboratories.
                                Industry measurment.
                            </p>
                        </div>

                        <Link
                            href="/shop"
                            className="h-[48px] flex items-center justify-center gap-x-[8px] px-[24px] rounded-[4px] bg-primary text-white text-[15px]/[56px] font-bold text-nowrap"
                        >
                            VER AGORA
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>
                    </div>

                    <div className="w-[312px] h-[312px] hidden sm:block absolute bottom-0 right-0">
                        <Image
                            src="/banners/smartphones.png"
                            fill={true}
                            alt="Apple Homepod Mini"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full flex items-start justify-between gap-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] xl:py-[72px]">
                <div className="w-full flex flex-col items-center justify-center gap-y-[24px]">
                    <div className="w-full flex-col xl:flex-row flex items-center justify-between">
                        <h3 className="text-h-03 leading-h-03 font-semibold">
                            Computadores e Laptops
                        </h3>

                        <div className="flex items-center justify-between gap-x-[16px]">
                            <div className="hidden md:flex items-center justify-center">
                                <Link
                                    href="#"
                                    className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] p-[8px] border-b-[2px] border-primary"
                                >
                                    Videogames
                                </Link>
                                <Link
                                    href="#"
                                    className="text-nowrap text-b-sm leading-b-sm font-normal flex items-center justify-start gap-x-[8px] p-[8px] text-neutral-600"
                                >
                                    Laptops
                                </Link>
                                <Link
                                    href="#"
                                    className="text-nowrap text-b-sm leading-b-sm font-normal flex items-center justify-start gap-x-[8px] p-[8px] text-neutral-600"
                                >
                                    SmartPhones
                                </Link>
                            </div>
                            <Link
                                href="#"
                                className="text-nowrap text-b-sm leading-b-sm font-semibold flex items-center justify-start gap-x-[8px] text-primary"
                            >
                                Visualizar todos os produtos
                                <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] items-center justify-center">
                        {products.slice(0, 8).map((product) => (
                            <div
                                key={product.id}
                                className="md:max-w-[248px] w-full h-full"
                            >
                                <ProductCard product={product} size="md" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden 2xl:flex flex-col gap-y-[24px] max-w-[312px] h-[716px] w-full">
                    <div className="flex flex-col items-center justify-center gap-y-[24px] p-[32px] bg-[#F7E99E] rounded-[4px]">
                        <div className="flex items-center justify-center flex-col gap-y-[16px]">
                            <div className="w-[108px] h-[108px] relative">
                                <Image
                                    src="/banners/banner-2.png"
                                    fill={true}
                                    alt="Banner 2"
                                />
                            </div>
                            <div className="flex items-center justify-center flex-col gap-y-[8px]">
                                <h2 className="text-h-02 leading-h-02 w-[290px] text-center font-semibold">
                                    Xiaomi True Wireless Earbuds
                                </h2>
                                <p className="text-b-md leading-b-md text-center line-clamp-2 font-normal text-neutral-700">
                                    Escape the noise, It’s time to hear the
                                    magic with Xiaomi Earbuds.
                                </p>
                            </div>

                            <div className="w-full flex items-center justify-center gap-[8px]">
                                <p className="text-b-sm leading-b-sm font-medium text-neutral-900">
                                    Only for:
                                </p>
                                <Badge
                                    variant="default"
                                    className="px-[8px] py-[6px] rounded-[4px] text-b-sm leading-b-sm font-semibold text-neutral-900 bg-white"
                                >
                                    $299 USD
                                </Badge>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="w-full h-[48px] flex items-center justify-center gap-x-[12px] px-[32px] rounded-[4px] bg-primary text-white text-[15px]/[56px] font-bold text-nowrap"
                        >
                            VER AGORA
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full max-h-[264px] h-full px-[24px] py-[40px] bg-[#124261] rounded-[4px] gap-y-[24px]">
                        <div className="flex items-center justify-center flex-col gap-y-[12px]">
                            <Badge
                                variant="default"
                                className="px-[8px] py-[6px] rounded-[4px] text-b-sm leading-b-sm font-semibold text-white bg-[#ffffff1f]"
                            >
                                SUMMER SALES
                            </Badge>

                            <h2 className="text-h-02 leading-h-02 text-center font-semibold text-white">
                                37% DISCOUNT
                            </h2>

                            <p className="text-b-md leading-b-md font-normal text-white text-center">
                                only for{" "}
                                <strong className="text-warning">
                                    SmartPhone
                                </strong>{" "}
                                product.
                            </p>
                        </div>

                        <Link
                            href="#"
                            className="w-full h-[48px] flex items-center justify-center gap-x-[12px] px-[32px] rounded-[4px] bg-[#2DA5F3] text-white text-[15px]/[56px] font-bold text-nowrap"
                        >
                            VER AGORA
                            <ArrowRightIcon className="size-[24px] stroke-[1.5px]" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] 2xl:grid-cols-[repeat(4,1fr)] gap-y-[24px] items-start gap-x-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] md:py-[72px]">
                {categoryProducts.map((category) => (
                    <div
                        key={category.id}
                        className="w-full flex flex-col items-start justify-start gap-y-[16px]"
                    >
                        <h5 className="text-b-md leading-b-md font-semibold">
                            {category.title}
                        </h5>

                        {category.products.map((product) => (
                            <SmallProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ))}
            </section>
        </main>
    );
}

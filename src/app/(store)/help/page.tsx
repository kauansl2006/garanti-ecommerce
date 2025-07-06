"use client";

import { useState } from "react";

import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { ArrowRightIcon, HomeIcon, MinusIcon, PlusIcon } from "lucide-react";

const questions = [
    {
        question: "Quais são os prazos de entrega?",
        answer: "Os prazos variam de acordo com a sua região e o tipo de envio selecionado. Você pode consultar o prazo estimado na finalização da compra.",
    },
    {
        question: "Posso trocar ou devolver um produto?",
        answer: "Sim! Você tem até 7 dias corridos após o recebimento para solicitar a troca ou devolução, conforme o Código de Defesa do Consumidor.",
    },
    {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos cartões de crédito, débito, Pix, boleto bancário e carteiras digitais como PayPal e Mercado Pago.",
    },
    {
        question: "Como acompanho meu pedido?",
        answer: "Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail e poderá acompanhar o status do pedido na sua conta.",
    },
    {
        question: "É seguro comprar no site?",
        answer: "Sim! Nosso site possui certificado SSL e todos os dados são criptografados. Trabalhamos com plataformas de pagamento seguras.",
    },
];

export default function Help() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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
                        label: "Ajuda",
                        href: "/help",
                        active: true,
                    },
                ]}
            />
            <section className="w-full px-[5.625%] xl:px-[15.625%] pt-[102px] pb-[72px] md:py-[72px] flex flex-col xl:flex-row gap-[24px] items-center xl:items-start justify-center xl:justify-between">
                <div className="max-w-[760px] w-full flex flex-col gap-[20px] md:gap-[40px]">
                    <h1 className="text-h-03 leading-h-03 md:text-h-01 md:leading-h-01 font-semibold text-center md:text-start">
                        Perguntas frequentes
                    </h1>

                    <div className=" flex flex-col gap-[20px]">
                        {questions.map((question, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <div key={index}>
                                    <div className="h-[64px] bg-white border-[1px] border-neutral-300 rounded-t-[4px] px-[24px] py-[20] flex items-center justify-center">
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-b-md leading-b-md md:text-b-lg md:leading-b-lg font-medium">
                                                {question.question}
                                            </p>

                                            <Button
                                                onClick={() =>
                                                    handleOpen(index)
                                                }
                                                variant="ghost"
                                                size="icon"
                                                className="cursor-pointer rounded-full"
                                            >
                                                {isOpen ? (
                                                    <MinusIcon className="size-[20px] text-neutral-400" />
                                                ) : (
                                                    <PlusIcon className="size-[20px] text-neutral-400" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div className="bg-neutral-100 border-[1px] border-neutral-300 rounded-b-[4px] px-[24px] py-[20px] flex items-center justify-center">
                                            <p className="text-b-sm leading-b-sm font-medium text-neutral-700">
                                                {question.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full md:size-[480px] bg-white border-[1px] border-neutral-300 rounded-[4px] flex flex-col gap-[24px] p-[32px]">
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-b-lg leading-b-lg font-bold">
                            Não encontrou sua resposta, peça suporte.
                        </p>
                        <p className="text-b-sm leading-b-sm text-normal text-neutral-700">
                            Interdum et malesuada famas ac ante ipsum primis in
                            faucibus. Sed molestie accumsan dui, non iaculis
                            primis in faucibu raesent eget sem purus.
                        </p>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <Input
                            className="rounded-[4px] h-[44px]"
                            type="email"
                            placeholder="Endereço de e-mail..."
                        />
                        <Input
                            className="rounded-[4px] h-[44px]"
                            type="text"
                            placeholder="Assunto"
                        />
                        <Textarea
                            className="resize-none rounded-[4px] h-[68px]"
                            placeholder="Mensagem..."
                        />
                    </div>
                    <Button
                        variant="default"
                        size="default"
                        className="cursor-pointer w-[190px] h-[48px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
                    >
                        Enviar Mensagem
                        <ArrowRightIcon className="size-[20px] stroke-[1.5px] text-white" />
                    </Button>
                </div>
            </section>
        </main>
    );
}

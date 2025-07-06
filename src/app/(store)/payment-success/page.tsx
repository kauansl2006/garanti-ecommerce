"use client";

import { ArrowRightIcon, CheckIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess() {
    return (
        <main className="w-screen h-screen md:h-auto flex items-center justify-center">
            <section className="w-full flex items-center justify-center px-[5.625%] xl:px-[15.625%] py-[72px]">
                <div className="flex flex-col items-center justify-center gap-[24px]">
                    <div className="w-full md:w-[550px] flex flex-col items-center justify-center gap-[16px]">
                        <div className="bg-green-200 rounded-full size-[80px] flex items-center justify-center">
                            <CheckIcon className="size-[50px] text-green-500" />
                        </div>
                        <h1 className="text-h-02 leading-h-02 md:text-h-01 md:leading-h-01 font-semibold text-center">
                            Pedido realizado com sucesso!
                        </h1>
                        <p className="text-b-sm leading-b-sm text-neutral-700 font-medium text-center">
                            Recebemos seu pedido e ele já está sendo processado.
                            A Garanti agradece a sua confiança!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-[12px]">
                        <Link
                            href="/"
                            className="bg-white hover:bg-primary text-primary hover:text-white border-2 border-primary text-b-sm leading-b-sm sm:text-b-md sm:leading-b-md font-medium text-nowrap cursor-pointer h-[48px] rounded-[4px] flex items-center justify-center gap-[4px] sm:gap-[8px] px-[18px] sm:px-[24px]"
                        >
                            <HomeIcon className="size-[18px] sm:size-[20px] stroke-[1.5px]" />
                            Voltar ao início
                        </Link>
                        <Link
                            href="/dashboard/order-history"
                            className="bg-primary text-white text-b-sm leading-b-sm sm:text-b-md sm:leading-b-md font-medium text-nowrap cursor-pointer h-[48px] rounded-[4px] flex items-center justify-center gap-[4px] sm:gap-[8px] px-[18px] sm:px-[24px]"
                        >
                            Ver pedido
                            <ArrowRightIcon className="size-[18px] sm:size-[20px] stroke-[1.5px] text-white" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

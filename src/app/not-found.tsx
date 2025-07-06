"use client";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

export default function NotFound() {
    return (
        <main className="w-screen h-screen md:h-auto flex items-center justify-center">
            <section className="w-full flex items-center justify-center px-[5.625%] xl:px-[15.625%] py-[72px]">
                <div className="flex flex-col items-center justify-center gap-[24px]">
                    <div className="w-full md:w-[550px] flex flex-col items-center justify-center gap-[16px]">
                        <h1 className="text-h-02 leading-h-02 md:text-h-01 md:leading-h-01 font-semibold text-center">
                            404 - Não Encontrado
                        </h1>
                        <p className="text-b-sm leading-b-sm text-neutral-700 font-medium text-center">
                            A página que você está procurando não foi
                            encontrada. Ela pode ter sido removida, renomeada ou
                            nunca existido. Verifique o endereço digitado ou
                            volte para a página inicial.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="bg-primary text-white text-b-md leading-b-md font-medium text-nowrap cursor-pointer h-[48px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
                    >
                        Voltar ao início
                        <ArrowRightIcon className="size-[20px] stroke-[1.5px] text-white" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

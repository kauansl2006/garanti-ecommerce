"use client";

import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="w-screen h-screen md:h-auto flex items-center justify-center">
            <section className="w-full flex items-center justify-center px-[5.625%] xl:px-[15.625%] py-[72px]">
                <div className="flex flex-col items-center justify-center gap-[24px]">
                    <div className="w-full md:w-[550px] flex flex-col items-center justify-center gap-[16px]">
                        <h1 className="text-h-02 leading-h-02 md:text-h-01 md:leading-h-01 font-semibold text-center">
                            Algo deu errado!
                        </h1>
                        <p className="text-b-sm leading-b-sm text-neutral-700 font-medium text-center">
                            Algo deu errado durante o carregamento da página.
                            Estamos trabalhando para resolver o problema o mais
                            rápido possível. Tente novamente mais tarde ou volte
                            para a página inicial.
                        </p>
                    </div>

                    <Button
                        variant="default"
                        size="default"
                        className="cursor-pointer w-[190px] h-[48px] rounded-[4px] flex items-center justify-center gap-[8px] px-[24px]"
                        onClick={() => reset()}
                    >
                        Tentar novamente
                        <RefreshCcwIcon className="size-[20px] stroke-[1.5px] text-white" />
                    </Button>
                </div>
            </section>
        </main>
    );
}

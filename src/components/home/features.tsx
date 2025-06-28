import {
    PackageIcon,
    TrophyIcon,
    CreditCardIcon,
    HeadsetIcon,
} from "lucide-react";

import { FeatureCard } from "@/components/home";

const features: any[] = [
    {
        id: 1,
        icon: <PackageIcon className="size-[40px] stroke-[1px]" />,
        title: "ENTREGA RÁPIDA",
        description: "Entrega em até 7 dias",
    },
    {
        id: 2,
        icon: <TrophyIcon className="size-[40px] stroke-[1px]" />,
        title: "24H DE RETORNO",
        description: "Garantia de 100% de devolução do dinheiro",
    },
    {
        id: 3,
        icon: <CreditCardIcon className="size-[40px] stroke-[1px]" />,
        title: "PAGAMENTO SEGURO",
        description: "Seu dinheiro está seguro",
    },
    {
        id: 4,
        icon: <HeadsetIcon className="size-[40px] stroke-[1px]" />,
        title: "SUPORTE 24/7",
        description: "Suporte 24 por dia, por 7 dias na semana",
    },
];

export const Features = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center px-[5.625%] xl:px-[15.625%]">
            <div className="w-full grid 2xl:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(2,1fr)]  grid-cols-[repeat(1,1fr)] gap-x-[28px] p-[16px] bg-white border-[1px] border-neutral-300 rounded-[6px]">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    );
}

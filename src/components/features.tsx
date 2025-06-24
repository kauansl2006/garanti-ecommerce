import {
    PackageIcon,
    TrophyIcon,
    CreditCardIcon,
    HeadsetIcon,
} from "lucide-react";

import { Feature } from "@/lib/definitions";

const features: Feature[] = [
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

export default function Features() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-[5.625%] xl:px-[15.625%]">
            <div className="w-full grid 2xl:grid-cols-[repeat(4,auto)] sm:grid-cols-[repeat(2,auto)]  grid-cols-[repeat(1,auto)] gap-x-[28px] p-[16px] bg-white border-[1px] border-neutral-300 rounded-[6px]">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    );
}

export function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <div className="2xl:max-w-[280px] 2xl:w-full flex items-start justify-start p-[16px] gap-x-[16px]">
            {feature.icon}
            <div className="w-full flex flex-col items-start justify-start gap-y-[4px]">
                <span className="text-l-03 leading-l-03 font-medium text-neutral-900">
                    {feature.title}
                </span>
                <p className="text-b-ty leading-b-ty lg:text-b-sm lg:leading-b-sm font-normal text-neutral-600">
                    {feature.description}
                </p>
            </div>
        </div>
    );
}

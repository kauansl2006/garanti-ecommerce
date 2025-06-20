import {
    PackageIcon,
    TrophyIcon,
    CreditCardIcon,
    HeadsetIcon,
} from "lucide-react";

import { Feature } from "@/lib/definitions";
import { widgets } from "@/lib/placeholder-data";

import FeatureCard from "@/components/feature-card";
import WidgetCard from "@/components/widget-card";

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
        <section className="w-full flex flex-col items-center justify-center px-[15.625%]">
            <div className="w-full flex flex-col items-center justify-center py-[24px]">
                <div className="w-full h-[520px] flex items-center justify-between gap-x-[24px]">
                    <div className="max-w-[872px] w-full h-full flex">
                        <WidgetCard widget={widgets[0]} />
                    </div>

                    <div className="max-w-[424px] w-full h-full flex flex-col items-center justify-center gap-y-[24px]">
                        <div className="max-h-[248px] h-full">
                            <WidgetCard widget={widgets[1]} />
                        </div>
                        <div className="max-h-[248px] h-full">
                            <WidgetCard widget={widgets[2]} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[108px] flex items-start justify-between gap-x-[28px] p-[16px] bg-white border-[1px] border-neutral-300 rounded-[6px]">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    );
}

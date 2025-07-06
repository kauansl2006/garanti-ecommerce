import {
    MedalIcon,
    TruckIcon,
    HandshakeIcon,
    HeadphonesIcon,
    CreditCardIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const features = [
    { label: "Garantia gratuita de 1 ano", icon: MedalIcon },
    { label: "Frete grátis e entrega rápida", icon: TruckIcon },
    { label: "Garantia de 100% de devolução do dinheiro", icon: HandshakeIcon },
    {
        label: "Suporte ao cliente 24 horas por dia, 7 dias por semana",
        icon: HeadphonesIcon,
    },
    { label: "Método de pagamento seguro", icon: CreditCardIcon },
];

export const shippingInformation = [
    { type: "Correio:", value: "2 a 4 dias, frete grátis" },
    { type: "Envio Local:", value: "até uma semana, R$ 19,00" },
    { type: "Envio Terrestre UPS:", value: "4 a 6 dias, R$ 29,00" },
];

export const ProductDescription = () => {
    return (
        <section className="w-full grid grid-cols-[repeat(1,auto)] 2xl:grid-cols-[repeat(4,auto)] gap-[24px]">
            <div className="flex flex-col gap-[12px]">
                <p className="text-b-md leading-b-md font-semibold">
                    DESCRIÇÃO
                </p>
                <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                </p>
            </div>

            <div className="flex flex-col gap-[12px]">
                <p className="text-b-md leading-b-md font-semibold">
                    FUNCIONALIDADES
                </p>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white text-b-sm leading-b-sm font-normal text-neutral-900 flex gap-x-[8px]"
                    >
                        <feature.icon className="size-[24px] stroke-[1.5px] text-primary" />
                        {feature.label}
                    </div>
                ))}
            </div>

            <Separator orientation="vertical" className="hidden 2xl:block" />

            <div className="flex flex-col gap-[12px]">
                <p className="text-b-md leading-b-md font-semibold">
                    INFORMAÇÕES DE ENVIO
                </p>
                {shippingInformation.map((information, index) => (
                    <p
                        key={index}
                        className="text-b-sm leading-b-sm font-normal text-neutral-600"
                    >
                        <strong className="text-b-sm leading-b-sm font-medium text-neutral-900">
                            {information.type}
                        </strong>{" "}
                        {information.value}
                    </p>
                ))}
            </div>
        </section>
    );
};



import { features, shippingInformation } from "@/lib/placeholder-data";
import { Separator } from "@/components/ui/separator";

export default function ProductDescription() {
    return (
        <section className="w-full grid grid-cols-[repeat(4,auto)] gap-[24px]">
            <div className="flex flex-col gap-[12px]">
                <p className="text-b-md leading-b-md font-semibold">
                    DESCRIÇÃO
                </p>
                <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                    The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                </p>
            </div>

            <div className="flex flex-col gap-[12px]">
                <p className="text-b-md leading-b-md font-semibold">
                    FUNCIONALIDADES
                </p>
                {features.map((feature, index) => (
                    <div key={index} className="bg-white text-b-sm leading-b-sm font-normal text-neutral-900 flex gap-x-[8px]">
                        <feature.icon className="size-[24px] stroke-[1.5px] text-primary" />
                        {feature.label}
                    </div>
                ))}
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col gap-[12px]">
                <p className="text-b-md leading-b-md font-semibold">
                    INFORMAÇÕES DE ENVIO
                </p>
                {shippingInformation.map((information, index) => (
                    <p key={index} className="text-b-sm leading-b-sm font-normal text-neutral-600">
                        <strong className="text-b-sm leading-b-sm font-medium text-neutral-900">
                            {information.type}
                        </strong> {information.value}
                    </p>
                ))}
            </div>
        </section>
    )
}
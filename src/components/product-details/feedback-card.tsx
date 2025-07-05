"use client";

import Image from "next/image";

import { Rating } from "@/components/products/rating";

export const FeedbackCard = ({ customer }: { customer: any}) => {
    return (
        <div className="w-[720px] flex flex-col gap-[12px]">
            <div className="flex gap-[12px]">
                <div className="size-[48px] rounded-full relative">
                    <Image
                        src={customer.photo}
                        fill={true}
                        alt="Foto de Perfil"
                    />
                </div>

                <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center gap-[6px]">
                        <p className="font-medium text-foreground">
                            {customer.name}
                        </p>
                        <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                            • Agora mesmo
                        </p>
                    </div>

                    <Rating score={64} size="18px"/>
                </div>
            </div>

            <p className="text-b-sm leading-b-sm text-normal text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.
            </p>
        </div>
    )
}
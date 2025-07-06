import { overview, productDetails } from "@/lib/placeholder-data";

export const ProductAdditionalInformation = () => {
    return (
        <section className="w-full grid grid-cols-[repeat(1,auto)] 2xl:grid-cols-[repeat(2,1fr)] gap-[24px]">
            <div className="w-full flex flex-col gap-[12px] 2xl:border-r-[1px] border-r-neutral-300">
                <p className="text-b-md leading-b-md font-semibold">
                    VISÃO GERAL
                </p>

                <div className="w-full flex flex-col gap-[8px]">
                    {overview.map((overview, index) => (
                        <div key={index} className="w-full flex gap-[24px]">
                            <p className="w-full text-b-sm leading-b-sm font-normal">
                                {overview.label}
                            </p>
                            <p className="w-full text-b-sm leading-b-sm font-normal text-neutral-600">
                                {overview.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] gap-[24px]">
                {productDetails.map((detail, index) => (
                    <div key={index} className="w-full flex flex-col gap-[8px]">
                        <p className="text-b-md leading-b-md font-semibold">
                            {detail.label}
                        </p>
                        {detail.value && (
                            <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                {detail.value}
                            </p>
                        )}
                        {detail.values?.map((value, index) =>
                            value.label ? (
                                <div
                                    key={index}
                                    className="w-full flex gap-[24px]"
                                >
                                    <p className="text-b-sm leading-b-sm font-normal">
                                        {value.label}
                                    </p>
                                    <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                                        {value.value}
                                    </p>
                                </div>
                            ) : (
                                <ul
                                    key={index}
                                    className="w-full flex flex-col gap-[12px]"
                                >
                                    <li className="list-disc text-b-sm leading-b-sm font-normal text-neutral-600">
                                        {value.value}
                                    </li>
                                </ul>
                            ),
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

import { Separator } from "@/components/ui/separator";

import { specifications } from "@/lib/placeholder-data";

export const ProductSpecification = () => {
    return (
        <section className="w-full grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] gap-[24px]">
            {specifications.map((specification, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col gap-[12px] border-r-neutral-300"
                >
                    <p className="text-b-md leading-b-md font-semibold">
                        {specification.label}
                    </p>

                    <div className="w-full flex flex-col gap-[8px]">
                        {specification.values.map((value, index) => (
                            <div key={index} className="w-full flex gap-[24px]">
                                <p className="w-full text-b-sm leading-b-sm font-normal">
                                    {value.label}
                                </p>
                                <p className="w-full text-b-sm leading-b-sm font-normal text-neutral-600">
                                    {value.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Separator orientation="horizontal" />
                </div>
            ))}
        </section>
    );
};

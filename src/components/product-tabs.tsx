import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductDescription } from "@/components/description";
import { ProductAdditionalInformation } from "@/components/information";
import { ProductReviews } from "@/components/reviews";
import { ProductSpecification } from "@/components/specification";

export const tabs = [
    { label: "DESCRIÇÃO", value: "description", content: ProductDescription },
    {
        label: "INFORMAÇÕES ADICIONAIS",
        value: "additional-information",
        content: ProductAdditionalInformation,
    },
    {
        label: "ESPECIFICAÇÃO",
        value: "specification",
        content: ProductSpecification,
    },
    { label: "REVIEWS", value: "reviews", content: ProductReviews },
];

export const ProductTabs = () => {
    return (
        <section className="w-full flex flex-col items-start justify-between px-[5.625%] xl:px-[15.625%]">
            <div className="w-full flex flex-col items-center pb-[40px] border-[1px] bg-white border-neutral-300 rounded-[4px]">
                <Tabs
                    defaultValue="description"
                    className="w-full flex items-center justify-between"
                >
                    <TabsList className="w-full h-auto rounded-none p-0 bg-white border-b-[1px] border-b-neutral-300">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center xl:px-[300px]">
                            {tabs.map((tab, index) => (
                                <TabsTrigger
                                    key={index}
                                    className="
                                        cursor-pointer data-[state=active]:bg-white bg-white data-[state=active]:border-b-[2px] data-[state=active]:border-b-primary focus-visible:border-none focus-visible:ring-0 focus-visible:outline-none inline-flex h-[56px] flex-1 items-center justify-center rounded-none px-[20px] py-[18px] text-[14px]/[20px] transition-none disabled:pointer-events-none data-[state=active]:shadow-none
                                    "
                                    value={tab.value}
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </div>
                    </TabsList>
                    <div className="w-full flex items-center p-[20px] md:p-[40px]">
                        {tabs.map((tab, index) => (
                            <TabsContent key={index} value={tab.value}>
                                <tab.content />
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

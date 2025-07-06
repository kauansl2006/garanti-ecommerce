import { categoryProducts } from "@/lib/placeholder-data";

import { SmallProductCard } from "@/components/small-product-card";

export const CategoryProducts = () => {
    return (
        <section className="w-full grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] 2xl:grid-cols-[repeat(4,1fr)] gap-y-[24px] items-start gap-x-[24px] px-[5.625%] xl:px-[15.625%] py-[42px] md:py-[72px]">
            {categoryProducts.map((category) => (
                <div
                    key={category.id}
                    className="w-full flex flex-col items-start justify-start gap-y-[16px]"
                >
                    <h5 className="text-b-md leading-b-md font-semibold">
                        {category.title}
                    </h5>

                    {category.products.map((product) => (
                        <SmallProductCard key={product.id} product={product} />
                    ))}
                </div>
            ))}
        </section>
    );
};

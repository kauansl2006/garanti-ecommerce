import { notFound } from "next/navigation";

import { HomeIcon } from "lucide-react";

import { products } from "@/lib/placeholder-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryProducts } from "@/components/category-products";
import { ProductDetails as Details } from "@/components/product-details";
import { ProductTabs } from "@/components/product-tabs";

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        notFound();
    }

    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Breadcrumb
                breadcrumbs={[
                    {
                        icon: HomeIcon,
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Comprar",
                        href: "/shop",
                    },
                    {
                        label: product.title,
                        href: `/product-details/${id}`,
                        active: true,
                    },
                ]}
            />
            <Details product={product} />
            <ProductTabs />
            <CategoryProducts />
        </main>
    );
}

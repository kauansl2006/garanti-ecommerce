import { notFound } from "next/navigation";

import { HomeIcon } from "lucide-react";

import {
    Breadcrumb,
    CategoryProducts,
    ProductDetails,
    ProductInformation
} from "@/components";

import { products } from "@/lib/placeholder-data";


export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        notFound();
    }

    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Breadcrumb breadcrumbs={[
                { 
                    icon: HomeIcon,
                    label: "Home",
                    href: "/"
                },
                { 
                    label: "Comprar",
                    href: "/shop",
                },
                {
                    label: product.title,
                    href: `/product-details/${id}`,
                    active: true
                }
            ]}/>
            <ProductDetails product={product} />
            <ProductInformation />
            <CategoryProducts />
        </main>
    )
}
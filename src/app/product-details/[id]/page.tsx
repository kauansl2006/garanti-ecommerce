import Breadcrumb from "@/components/breadcrumb";
import CategoryProducts from "@/components/category-products";
import ProductDetails from "@/components/product-details";
import ProductInformation from "@/components/product-information";
import { products } from "@/lib/placeholder-data/products";
import { HomeIcon } from "lucide-react";
import { notFound } from "next/navigation";
;

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
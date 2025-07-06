import { ProductCard } from "@/components/product-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/placeholder-data";
import { SearchIcon } from "lucide-react";

export default function BrowsingHistory() {
    return (
        <section className="w-full flex flex-col gap-[24px]">
            <h1 className="text-b-xl leading-b-xl font-semibold">
                Histórico de Pesquisa
            </h1>

            <div className="flex flex-col md:flex-row gap-[12px]">
                <div className="flex items-center relative">
                    <SearchIcon className="size-[20px] stroke-[1.5px] text-neutral-900 absolute left-[10px]" />
                    <Input
                        type="search"
                        placeholder="Pesquise por produtos aqui..."
                        className="h-[44px] w-full md:w-[424px] rounded-[4px] pl-[40px]"
                    />
                </div>
                <Input
                    type="date"
                    className="h-[44px] w-full md:w-[312px] rounded-[4px]"
                />
            </div>

            <Card className="shadow-none rounded-[4px] p-[0px] border-[1px] border-neutral-300">
                <CardHeader className="flex items-center h-[56px] justify-start border-b-[1px] border-b-neutral-300">
                    <CardTitle>17 de JUNHO de 2025</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                size="md"
                                product={product}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

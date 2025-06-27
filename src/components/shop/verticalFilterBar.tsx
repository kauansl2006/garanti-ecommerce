import { RadioGroup, RadioGroupItem,} from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import { categories } from "@/lib/placeholder-data/categories";
import { priceMarks } from "@/lib/placeholder-data/priceMarks";
import { popularTags } from "@/lib/placeholder-data/popularTags";
import { popularBrands } from "@/lib/placeholder-data/popularBrands";

export default function VerticalFilterBar() {
    return (
        <div className="w-[312px] h-full flex flex-col items-start justify-start gap-[24px] bg-white border-[1px] border-neutral-300 p-[20px] rounded-[4px]">
            <div className="flex flex-col items-start justify-start gap-[16px]">
                <h2 className="text-l-02 leading-l-02 font-medium">CATEGORIAS</h2>

                <div className="flex flex-col items-start-justify-start gap-[12px]">
                    <RadioGroup defaultValue="comfortable">
                        {categories.map((category) => (
                            <div key={category.id} className="flex items-center gap-3">
                                <RadioGroupItem
                                    value={category.title}
                                    id={`category-${category.id}`}
                                />
                                <Label htmlFor={`category-${category.id}`}>
                                    {category.title}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            <Separator orientation="horizontal" />

            <div className="flex flex-col items-start justify-start gap-[16px]">
                <h2 className="text-l-02 leading-l-02 font-medium">
                    FAIXA DE PREÇO
                </h2>

                <Slider defaultValue={[1500, 8000]} max={10000} className="w-full" />

                <div className="w-full flex items-center justify-center gap-x-[12px]">
                    <Input type="number" placeholder="Valor Mínimo" className="w-full text-ellipsis overflow-hidden" />
                    <Input type="number" placeholder="Valor Máximo" className="w-full text-ellipsis overflow-hidden" />
                </div>

                <div className="flex flex-col items-start-justify-start gap-[12px]">
                    <RadioGroup defaultValue="comfortable">
                        {priceMarks.map((price) => (
                            <div key={price.id} className="flex items-center gap-3">
                                <RadioGroupItem
                                    value={price.title}
                                    id={`price-${price.id}`}
                                />
                                <Label htmlFor={`price-${price.id}`}>
                                    {price.title}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            <Separator orientation="horizontal" />

            <div className="flex flex-col items-start justify-start gap-[16px]">
                <h2 className="text-l-02 leading-l-02 font-medium">
                    MARCAS POPULARES
                </h2>

                <div className="grid grid-cols-2 items-start justify-start gap-[12px]">
                    {popularBrands.map((brand) => (
                        <div key={brand.id} className="flex items-center gap-3">
                            <Checkbox id={`brand-${brand.id}`} className="rounded-none" />
                            <Label htmlFor={`brand-${brand.id}`}>
                                {brand.title}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator orientation="horizontal" />

            <div className="flex flex-col items-start justify-start gap-[16px]">
                <h2 className="text-l-02 leading-l-02 font-medium">
                    TAGS POPULARES
                </h2>

                <div className="flex flex-wrap items-start justify-start gap-[8px]">
                    {popularTags.map((tag) => (
                        <span
                            key={tag.id}
                            className="px-[12px] py-[6px] border-[1px] border-neutral-900 rounded-[4px] text-b-sm leading-b-sm font-medium cursor-pointer hover:bg-primary hover:border-white hover:text-white"
                        >
                            {tag.title}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}


import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Searchbar() {
    return (
        <div className="hidden md:flex lg:flex max-w-[440px] xl:max-w-[540px] w-[100%] items-center justify-center relative">
            <SearchIcon className="size-[18px] stroke-[1.5] text-neutral-900 absolute left-[10px]" />
            <Input
                type="text"
                placeholder="Procure por produtos aqui..."
                className="rounded-l-[4px] rounded-r-none pl-[40px] h-[38px] xl:h-[42px]"
            />
            <Button
                variant="default"
                size="default"
                className="cursor-pointer rounded-l-none rounded-r-[4px] h-[38px] xl:h-[42px]"
            >
                Pesquisar
            </Button>
        </div>
    )
}
"use client";

import { HomeIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
    const pathname = usePathname();
    return (
        <section className="w-full h-[72px] bg-neutral-200 px-[5.625%] xl:px-[15.625%] hidden md:flex items-center justify-start">
            <div className="flex items-center gap-x-[8px]">
                <Link href="/" className="text-b-sm leading-b-sm font-normal text-neutral-600 flex items-center justify-center gap-x-[8px]">
                    <HomeIcon className="size-[20px] stroke-[1.5px]" />
                    Home
                </Link>
                <ChevronRightIcon className="size-[12px] stroke-[1.5px]"/>
                <Link href={pathname} className="text-b-sm leading-b-sm font-medium text-blue-500">
                    {pathname === "/shop" && "Comprar"}
                </Link>
            </div>
        </section>
    )
}
"use client";

import Link from "next/link";

import { NavLinks } from "@/lib/definitions";

export default function Sidebar({ navLinks }: { navLinks: NavLinks[] }) {
    return (
        <section className="w-[290px] h-[100vh] p-[20px] md:hidden flex flex-col items-start justify-start gap-y-[24px] bg-neutral-100 absolute top-[60px] right-[0px] border-l-[1px] border-neutral-300">
            <div className="w-[100%] flex flex-col items-start justify-start gap-y-[12px]">
                <h5 className="text-b-sm leading-b-sm font-semibold">
                    Acesso Rápido
                </h5>

                <ul className="w-[100%] flex flex-col items-start justify-start">
                    {navLinks.slice(0, 4).map((link) => (
                        <li
                            className="w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-200"
                            key={link.id}
                        >
                            <Link
                                className="w-[100%] flex items-start justify-start gap-x-[18px] text-b-md leading-b-md font-normal"
                                href={link.href}
                            >
                                {link.icon}
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-[100%] flex flex-col items-start justify-start gap-y-[12px]">
                <h5 className="text-b-sm leading-b-sm font-semibold">
                    Central de Ajuda
                </h5>

                <ul className="w-[100%] flex flex-col items-start justify-start">
                    {navLinks.slice(4).map((link) => (
                        <li
                            className="w-[100%] p-[8px] rounded-[4px] hover:bg-neutral-200"
                            key={link.id}
                        >
                            <Link
                                className="w-[100%] flex items-start justify-start gap-x-[18px] text-b-md leading-b-md font-normal"
                                href={link.href}
                            >
                                {link.icon}
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

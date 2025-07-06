import Link from "next/link";
import clsx from "clsx";

import { ChevronRightIcon, LucideProps } from "lucide-react";

interface Breadcrumbs {
    icon?: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    label: string;
    href: string;
    active?: boolean;
}

export const Breadcrumb = ({ breadcrumbs }: { breadcrumbs: Breadcrumbs[] }) => {
    return (
        <section className="w-full h-[72px] bg-neutral-200 px-[5.625%] xl:px-[15.625%] hidden md:flex items-center justify-start">
            <div className="flex items-center justify-center gap-x-[8px]">
                {breadcrumbs.map((breadcrumb, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center gap-x-[8px]"
                    >
                        <Link
                            href={breadcrumb.href}
                            className={clsx(
                                breadcrumb.active
                                    ? "text-b-sm leading-b-sm font-medium text-primary"
                                    : "text-b-sm leading-b-sm font-medium text-neutral-600 flex items-center justify-center gap-x-[8px]",
                            )}
                        >
                            {breadcrumb.icon ? (
                                <breadcrumb.icon className="size-[20px] stroke-[1.5px]" />
                            ) : null}
                            {breadcrumb.label}
                        </Link>
                        {index < breadcrumbs.length - 1 ? (
                            <ChevronRightIcon className="size-[12px] stroke-[2.5px] text-neutral-600" />
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
};

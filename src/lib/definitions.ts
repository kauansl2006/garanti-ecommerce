import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Category = {
    id: number;
    title: string;
    imagePath: string;
    href: string;
};

export type Product = {
    id: number;
    title: string;
    description?: string;
    thumbnail: string;
    photos?: {
        src: string;
        alt: string;
    }[];
    price: number;
    discount?: number;
    availableQuantity: number;
    score?: number;
    isAvailable: boolean;
    isActive: boolean;
    isHot: boolean;
};

export type CategoryProducts = {
    id: number;
    title: string;
    products: Product[];
};

export type Customer = {
    photo: string;
    name: string;
};

export type Feature = {
    label: string;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
};

export type Overview = {
    label: string;
    value: string;
};

export type PopularBrand = {
    id: number;
    title: string;
};

export type PopularTag = {
    id: number;
    title: string;
};

export type PriceMarks = {
    id: number;
    title: string;
};

export type ProductDetail = {
    label: string;
    value?: string;
    values?: {
        label?: string;
        value: string;
    }[];
};

export type Rating = {
    score: number;
    reviewers: string;
};

export type ShippingInformation = {
    type: string;
    value: string;
};

export type Specification = {
    label: string;
    values: {
        label: string;
        value: string;
    }[];
};

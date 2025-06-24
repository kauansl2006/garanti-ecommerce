import { JSX } from "react";

export type Feature = {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
};

export type Product = {
    id: number;
    title: string;
    description?: string | null;
    thumbnail: string;
    price: number;
    discount?: number | null;
    availableQuantity: number;
    score?: number | null;
    isAvailable: boolean;
    isActive: boolean;
    isHot: boolean;
};

export type Category = {
    id: number;
    title: string;
    imagePath: string;
    href: string;
}
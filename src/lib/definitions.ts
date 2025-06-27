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
    description?: string;
    thumbnail: string;
    photos: {
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
}

export type Category = {
    id: number;
    title: string;
    imagePath: string;
    href: string;
}
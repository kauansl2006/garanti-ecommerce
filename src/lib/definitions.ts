import { JSX } from "react";

export type NavLinks = {
    id: number;
    href: string;
    icon: JSX.Element;
    title: string;
};

export type Widget = {
    id: number;
    caption?: string  | undefined;
    title: string;
    price?: number;
    description?: string  | undefined;
    discount?: string | undefined; 
    imagePath: string;
    imagePosition: "left" | "right";
    href: string;
    size: "md" | "lg";
    backgroundColor: "light" | "dark";
}

export type Feature = {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
}

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
}




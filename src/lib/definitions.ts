import { JSX } from "react";

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




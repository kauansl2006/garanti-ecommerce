import { Widget } from "./definitions";

const widgets: Widget[] = [
    {
        id: 1,
        caption: "- O MELHOR LUGAR PARA JOGAR",
        title: "Consoles Xbox",
        price: 3892,
        description: "Economize até 50% em jogos selecionados para Xbox. Ganhe 3 meses de PC Game Pass por US$ 2.",
        imagePath: "/xbox.png",
        imagePosition: "right",
        href: "#",
        size: "lg",
        backgroundColor: "light"
    },
    {
        id: 2,
        caption: "- VENDAS DE VERÃO",
        title: "Novo Google Pixel 6 Pro",
        imagePath: "/google-pixel-6-pro.png",
        imagePosition: "right",
        discount: "20% OFF",
        href: "#",
        size: "md",
        backgroundColor: "dark"
    },
    {
        id: 3,
        title: "Xiaomi FlipBuds Pro",
        imagePath: "/xiaomi-flip-buds-pro.png",
        imagePosition: "left",
        href: "#",
        size: "md",
        backgroundColor: "light"
    }
];

export { widgets }
import { ProductDetail } from "@/lib/definitions";

export const productDetails: ProductDetail[] = [
    {
        label: "Garantia do produto:",
        value: "Para obter informações sobre a garantia deste produto, clique aqui.",
    },
    { label: "Sistema operacional:", value: "Mac OS Big Sur" },
    {
        label: "Medidas",
        values: [
            { label: "Dimensões:", value: "304.1 x 212.4 x 15.6 mm" },
            { label: "Peso:", value: "3 Pounds (1.4 kg)" },
        ],
    },
    {
        label: "Destaques:",
        values: [
            { value: "Stylish & Portable Thin and Light Laptop" },
            {
                value: "13.3 inch Quad LED Backlit IPS Display (227 PPI, 500 nits Brightness, Wide Colour (P3), True Tone Technology)",
            },
            { value: "Light Laptop without Optical Disk Drive" },
            { value: "No cost EMI starting from $252 USD/month" },
            { value: "Net banking & Credit/ Debit/ ATM card" },
        ],
    },
];

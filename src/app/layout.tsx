import { Montserrat } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";

import { Header, Footer } from "@/components";

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Garanti",
    description:
        "Template de e-commerce ideal para negócios que atuam no Brasil.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className={`${montserrat.className} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

import { HomeIcon } from "lucide-react";
import { Breadcrumb } from "@/components";
import { Shop } from "@/components/shop";

export default function Page() {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Breadcrumb breadcrumbs={[
                { 
                    icon: HomeIcon,
                    label: "Home",
                    href: "/"
                },
                { 
                    label: "Comprar",
                    href: "/shop",
                    active: true
                }
            ]}/>
            <Shop />
        </main>
    )
}
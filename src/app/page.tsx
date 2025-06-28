import {
    BestDeals,
    Categories,
    Widgets,
    Features,
    FeaturedProducts,
    FeaturedCategories,
    Banners
} from "@/components/home";
import { CategoryProducts } from "@/components"

export default function Home() {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Widgets />
            <Features />
            <BestDeals />
            <Categories />
            <FeaturedProducts />
            <Banners />
            <FeaturedCategories />
            <CategoryProducts />
        </main>
    );
}

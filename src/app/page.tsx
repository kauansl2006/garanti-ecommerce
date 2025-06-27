import {
    BestDeals,
    Categories,
    Widgets,
    Features,
    FeaturedProducts,
    FeaturedCategories,
    CategoryProducts,
    Banners
} from "@/components";

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

import BestDeals from "@/components/best-deals";
import Categories from "@/components/categories";
import Features from "@/components/features";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Features />
            <BestDeals />
            <Categories />
            <FeaturedProducts />
        </main>
    );
}

import BestDeals from "@/components/best-deals";
import Categories from "@/components/categories";
import Widgets from "@/components/widgets";
import Features from "@/components/features";
import FeaturedProducts from "@/components/featured-products";
import FeaturedCategories from "@/components/featured-categories";
import CategoryProducts from "@/components/category-products";
import Banners from "@/components/banners";

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

import BestDeals from "@/components/best-deals";
import Categories from "@/components/categories";
import Features from "@/components/features";
import FeaturedProducts from "@/components/featured-products";
import FeaturedCategories from "@/components/featured-categories";
import WidgetCard from "@/components/widget-card";

import { widgets } from "@/lib/placeholder-data";

export default function Home() {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Features />
            <BestDeals />
            <Categories />
            <FeaturedProducts />
            <section className="w-full h-[336px] flex items-start justify-between gap-x-[24px] px-[15.625%]">
                <WidgetCard widget={widgets[3]} headingSize="h-01" padding="md"/>
                <WidgetCard widget={widgets[4]} headingSize="h-01" padding="md"/>
            </section>
            <FeaturedCategories />
            <section className="w-full h-[424px] flex items-start justify-between gap-x-[24px] px-[15.625%]">
                <WidgetCard widget={widgets[0]} padding="md" />
            </section>
        </main>
    );
}

import BestDeals from "@/components/best-deals";
import Features from "@/components/features";

export default function Home() {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <Features />
            <BestDeals />
        </main>
    );
}

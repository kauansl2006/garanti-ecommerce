import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="w-screen h-[60vh] flex flex-col item-center justify-center px-[300px]">
                <p>HomePage Works!</p>
            </main>
            <Footer />
        </>
    );
}

import { Breadcrumb } from "@/components/breadcrumb";
import { HomeIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CheckEmail() {
    return (
        <main className="w-screen">
            <Breadcrumb
                breadcrumbs={[
                    {
                        href: "/",
                        icon: HomeIcon,
                        label: "Home",
                    },
                    {
                        href: "/sign-up",
                        label: "Inscrever-se",
                    },
                    {
                        href: "/check-email",
                        label: "Verificar Email",
                        active: true,
                    },
                ]}
            />

            <section className="h-screen md:h-auto flex items-center justify-center px-[5.625%] md:px-[0%] py-[100px]">
                <Card className="max-w-[424px] w-full border-[1px] border-neutral-300 rounded-[4px] shadow-none">
                    <CardHeader className="text-center">
                        <CardTitle>Verifique seu Endereço de Email</CardTitle>
                        <CardDescription>
                            Digite o endereço de e-mail ou número de celular
                            associado à sua conta Garanti.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="email">
                                            Endereço de Email
                                        </Label>
                                        <Button
                                            variant="link"
                                            className="cursor-pointer ml-auto inline-block text-b-sm leading-b-sm"
                                        >
                                            Reenviar Código
                                        </Button>
                                    </div>
                                    <Input
                                        className="h-[44px] rounded-[4px]"
                                        id="email"
                                        type="email"
                                        placeholder="email@exemplo.com"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            className="w-full h-[48px] rounded-[4px] cursor-pointer"
                        >
                            Verificar Email
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
}

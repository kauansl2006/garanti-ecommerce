"use client";

import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/breadcrumb";
import { HomeIcon } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SignIn() {
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
                        href: "/dashboard",
                        label: "Conta do Usuário",
                    },
                    {
                        href: "/sign-in",
                        label: "Entrar",
                        active: true,
                    },
                ]}
            />

            <section className="h-screen md:h-auto flex items-center justify-center px-[5.625%] md:px-[0%] py-[100px]">
                <Card className="max-w-[424px] w-full border-[1px] border-neutral-300 rounded-[4px] shadow-none">
                    <CardHeader>
                        <CardTitle>Faça Login com sua conta</CardTitle>
                        <CardDescription>
                            Digite seu e-mail abaixo para acessar sua conta
                        </CardDescription>
                        <CardAction>
                            <Link
                                href="/sign-up"
                                className="ml-auto inline-block text-b-sm leading-b-sm underline-offset-4 hover:underline"
                            >
                                Inscrever-se
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">
                                        Endereço de Email
                                    </Label>
                                    <Input
                                        className="h-[44px] rounded-[4px]"
                                        id="email"
                                        type="email"
                                        placeholder="email@exemplo.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Senha</Label>
                                        <Link
                                            href="/recover-password"
                                            className="ml-auto inline-block text-b-sm leading-b-sm underline-offset-4 hover:underline"
                                        >
                                            Esqueceu sua senha?
                                        </Link>
                                    </div>
                                    <Input
                                        className="h-[44px] rounded-[4px]"
                                        id="password"
                                        type="password"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-[24px]">
                        <Button
                            type="submit"
                            className="w-full h-[48px] rounded-[4px] cursor-pointer"
                        >
                            Entrar
                        </Button>
                        <div className="w-full flex items-center justify-center relative">
                            <Separator
                                orientation="horizontal"
                                className="bg-neutral-400"
                            />
                            <p className="text-b-sm leading-b-sm p-[10px] bg-white text-neutral-500 absolute">
                                ou
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full h-[48px] rounded-[4px] cursor-pointer"
                        >
                            <Image
                                src="/google.svg"
                                alt="Ícone do Google"
                                width={20}
                                height={20}
                            />
                            Entrar com Google
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
}

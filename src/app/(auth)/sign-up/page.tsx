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
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUp() {
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
                        href: "/sign-up",
                        label: "Inscrever-se",
                        active: true,
                    },
                ]}
            />

            <section className="h-screen md:h-auto flex items-center justify-center px-[5.625%] md:px-[0%] py-[100px]">
                <Card className="max-w-[624px] w-full border-[1px] border-neutral-300 rounded-[4px] shadow-none">
                    <CardHeader>
                        <CardTitle>Faça o cadastro da sua conta</CardTitle>
                        <CardDescription>
                            Digite seu e-mail abaixo para acessar sua conta
                        </CardDescription>
                        <CardAction>
                            <Link
                                href="/sign-in"
                                className="ml-auto inline-block text-b-sm leading-b-sm underline-offset-4 hover:underline"
                            >
                                Login
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="username">
                                        Nome do Usuário
                                    </Label>
                                    <Input
                                        className="h-[44px] rounded-[4px]"
                                        id="username"
                                        type="text"
                                        placeholder="Digite nome..."
                                        required
                                    />
                                </div>
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
                                    <Label htmlFor="password">Senha</Label>
                                    <Input
                                        className="h-[44px] rounded-[4px]"
                                        id="password"
                                        type="password"
                                        placeholder="Digite senha..."
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="confirm-password">
                                        Confirmar Senha
                                    </Label>
                                    <Input
                                        className="h-[44px] rounded-[4px]"
                                        id="confirm-password"
                                        type="password"
                                        placeholder="Digite senha novamente..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <Checkbox
                                    id="terms"
                                    className="rounded-[0px]"
                                />
                                <Label
                                    htmlFor="terms"
                                    className="text-b-sm leading-b-sm"
                                >
                                    Você concorda com os Termos de Condições e a
                                    Política de Privacidade
                                </Label>
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

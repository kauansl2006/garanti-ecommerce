"use client";

import Link from "next/link";

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
import { Separator } from "@/components/ui/separator";

export default function RecoverPassword() {
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
                    },
                    {
                        href: "/recover-password",
                        label: "Recuperar Senha",
                        active: true,
                    },
                ]}
            />

            <section className="h-screen md:h-auto flex items-center justify-center px-[5.625%] md:px-[0%] py-[100px]">
                <Card className="max-w-[424px] w-full border-[1px] border-neutral-300 rounded-[4px] shadow-none">
                    <CardHeader className="text-center">
                        <CardTitle>Recuperar Senha</CardTitle>
                        <CardDescription>
                            Digite o endereço de e-mail ou número de celular
                            associado à sua conta Garanti.
                        </CardDescription>
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
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-[24px]">
                        <Button
                            type="submit"
                            className="w-full h-[48px] rounded-[4px] cursor-pointer"
                        >
                            Enviar Código
                        </Button>
                        <div className="w-full flex flex-col items-start justify-center gap-[8px]">
                            <div className="flex items-center gap-[8px] text-b-sm leading-b-sm font-medium">
                                Já tem conta?
                                <Link
                                    href="/sign-in"
                                    className="ml-auto inline-block text-b-sm leading-b-sm font-medium text-primary underline-offset-4 hover:underline"
                                >
                                    Entrar
                                </Link>
                            </div>
                            <div className="flex items-center gap-[8px] text-b-sm leading-b-sm font-medium">
                                Não tem conta?
                                <Link
                                    href="/sign-in"
                                    className="ml-auto inline-block text-b-sm leading-b-sm font-medium text-primary underline-offset-4 hover:underline"
                                >
                                    Inscreva-se
                                </Link>
                            </div>
                        </div>
                        <Separator
                            orientation="horizontal"
                            className="bg-neutral-400"
                        />
                        <p className="text-center text-b-sm leading-b-sm font-normal text-neutral-600">
                            Você pode entrar em contato com o{" "}
                            <strong className="text-primary">
                                Atendimento ao Cliente
                            </strong>{" "}
                            para obter ajuda para restaurar o acesso à sua
                            conta.
                        </p>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
}

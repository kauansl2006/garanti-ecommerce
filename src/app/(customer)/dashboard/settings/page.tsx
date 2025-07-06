"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Settings() {
    return (
        <section className="w-full grid grid-cols-2 gap-[24px]">
            <Card className="col-span-2 shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                <CardHeader className="border-b-[1px] border-b-neutral-300">
                    <CardTitle className="pb-[12px]">
                        Configurações de Conta
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full flex items-center md:items-start flex-col md:flex-row gap-[24px]">
                        <div className="size-[176px] relative">
                            <Image
                                src="/avatar.svg"
                                alt="Foto de Perfil do John"
                                fill={true}
                            />
                        </div>

                        <div className="w-full flex flex-col gap-[24px]">
                            <div className="w-full grid grid-cols-2 gap-[16px]">
                                <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                    <Label htmlFor="display-name">
                                        Nome de Exibição
                                    </Label>

                                    <Input
                                        type="text"
                                        id="display-name"
                                        defaultValue="John"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                    <Label htmlFor="username">Username</Label>

                                    <Input
                                        type="text"
                                        id="username"
                                        defaultValue="Nome de Exibição"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                    <Label htmlFor="full-name">
                                        Nome Completo
                                    </Label>

                                    <Input
                                        type="text"
                                        id="full-name"
                                        defaultValue="John Doe"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>

                                <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                    <Label htmlFor="email">Email</Label>

                                    <Input
                                        type="email"
                                        id="email"
                                        defaultValue="johndoe@gmail.com"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                    <Label htmlFor="phone-1">Telefone</Label>

                                    <Input
                                        type="text"
                                        id="phone-1"
                                        defaultValue="+1-202-555-0118"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                    <Label htmlFor="phone-2">Telefone 2</Label>

                                    <Input
                                        type="text"
                                        id="phone-2"
                                        defaultValue="+1-302-555-7518"
                                        required
                                        className="h-[44px] rounded-[4px]"
                                    />
                                </div>

                                <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="city">Cidade</Label>

                                        <Input
                                            type="text"
                                            id="city"
                                            defaultValue="Cidade XYZ"
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="state">Estado</Label>

                                        <Input
                                            type="text"
                                            id="state"
                                            defaultValue="São Paulo"
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <Label htmlFor="zip-code">
                                            Código Postal
                                        </Label>

                                        <Input
                                            type="text"
                                            id="zip-code"
                                            defaultValue="13812"
                                            required
                                            className="h-[44px] rounded-[4px]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button className="w-[160px] h-[48px] rounded-[4px] text-[14px]/[48px] font-semibold">
                                Salvar Mudanças
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white  col-span-2 md:col-span-1 rounded-[4px] border-[1px] border-neutral-300 shadow-none">
                <CardHeader className="border-b-[1px] border-b-neutral-300">
                    <CardTitle className="pb-[12px]">
                        Endereço de Cobrança
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-[24px]">
                        <div className="grid grid-cols-2 gap-[16px]">
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="first-name">
                                    Primeiro Nome
                                </Label>
                                <Input
                                    id="first-name"
                                    type="text"
                                    placeholder="Digite primeiro nome... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="last-name">Último Nome</Label>
                                <Input
                                    id="last-name"
                                    type="text"
                                    placeholder="Digite último nome... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="first-name">
                                    Nome da Compania
                                    <span className="text-neutral-400 text-b-sm leading-b-sm font-normal">
                                        (opcional)
                                    </span>
                                </Label>
                                <Input
                                    id="first-name"
                                    type="text"
                                    placeholder="Digite primeiro nome... "
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="address">Endereço</Label>
                                <Input
                                    id="address"
                                    type="text"
                                    placeholder="Digite seu Endereço... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="city">Cidade</Label>
                                <Input
                                    id="city"
                                    type="text"
                                    placeholder="Digite Cidade... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="state">Região/Estado</Label>
                                <Input
                                    id="state"
                                    type="text"
                                    placeholder="Digite Estado... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="zip-code">Código Postal</Label>
                                <Input
                                    id="zip-code"
                                    type="text"
                                    placeholder="Digite Código Postal... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Digite Email... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="phone">Telefone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="Digite Telefone... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                        </div>

                        <Button className="w-[160px] h-[48px] rounded-[4px] text-[14px]/[48px] font-semibold">
                            Salvar Mudanças
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-white col-span-2 md:col-span-1 rounded-[4px] border-[1px] border-neutral-300 shadow-none">
                <CardHeader className="border-b-[1px] border-b-neutral-300">
                    <CardTitle className="pb-[12px]">
                        Endereço de Envio
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-[24px]">
                        <div className="grid grid-cols-2 gap-[16px]">
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="first-name">
                                    Primeiro Nome
                                </Label>
                                <Input
                                    id="first-name"
                                    type="text"
                                    placeholder="Digite primeiro nome... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="last-name">Último Nome</Label>
                                <Input
                                    id="last-name"
                                    type="text"
                                    placeholder="Digite último nome... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="first-name">
                                    Nome da Compania
                                    <span className="text-neutral-400 text-b-sm leading-b-sm font-normal">
                                        (opcional)
                                    </span>
                                </Label>
                                <Input
                                    id="first-name"
                                    type="text"
                                    placeholder="Digite primeiro nome... "
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="address">Endereço</Label>
                                <Input
                                    id="address"
                                    type="text"
                                    placeholder="Digite seu Endereço... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="city">Cidade</Label>
                                <Input
                                    id="city"
                                    type="text"
                                    placeholder="Digite Cidade... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="state">Região/Estado</Label>
                                <Input
                                    id="state"
                                    type="text"
                                    placeholder="Digite Estado... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 flex flex-col gap-[8px]">
                                <Label htmlFor="zip-code">Código Postal</Label>
                                <Input
                                    id="zip-code"
                                    type="text"
                                    placeholder="Digite Código Postal... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Digite Email... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 w-full flex flex-col gap-[8px]">
                                <Label htmlFor="phone">Telefone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="Digite Telefone... "
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                        </div>

                        <Button className="w-[160px] h-[48px] rounded-[4px] text-[14px]/[48px] font-semibold">
                            Salvar Mudanças
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="col-span-2 shadow-none border-[1px] border-neutral-300 rounded-[4px]">
                <CardHeader className="border-b-[1px] border-b-neutral-300">
                    <CardTitle className="pb-[12px]">Mudar Senha</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col gap-[8px]">
                                <Label htmlFor="current-password">
                                    Senha Atual
                                </Label>
                                <Input
                                    id="current-password"
                                    type="password"
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Label htmlFor="new-password">Nova Senha</Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    placeholder="8+ caracteres"
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Label htmlFor="confirm-password">
                                    Confirmar Senha
                                </Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    required
                                    className="h-[44px] rounded-[4px]"
                                />
                            </div>
                        </div>

                        <Button className="w-[160px] h-[48px] rounded-[4px] text-[14px]/[48px] font-semibold">
                            Salvar Mudanças
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

import { Progress } from "@/components/ui/progress";
import {
    CheckCheckIcon,
    CheckIcon,
    HandshakeIcon,
    NotebookIcon,
    PackageIcon,
    TruckIcon,
    UserRoundCheck,
    MapPinnedIcon,
    MapIcon,
    CircleCheckIcon,
    NotepadTextIcon,
} from "lucide-react";
import { notFound } from "next/navigation";

const steps = [
    {
        icon: NotebookIcon,
        title: "Pedido feito",
    },
    {
        icon: PackageIcon,
        title: "Embalagem",
    },
    {
        icon: TruckIcon,
        title: "Na estrada",
    },
    {
        icon: HandshakeIcon,
        title: "Entregue",
    },
];

const activities = [
    {
        icon: CheckCheckIcon,
        description:
            "Seu pedido foi entregue. Obrigado por comprar na Garanti!",
        date: "23 de junho de 2025 às 19h32",
    },
    {
        icon: UserRoundCheck,
        description:
            "Nosso entregador (John Wick) pegou seu pedido para entrega.",
        date: "23 de junho de 2025 às 19h32",
    },
    {
        icon: MapPinnedIcon,
        description: "Seu pedido chegou ao centro da última milha.",
        date: "23 de junho de 2025 às 19h32",
    },
    {
        icon: MapIcon,
        description: "Seu pedido a caminho do centro (última milha).",
        date: "23 de junho de 2025 às 19h32",
    },
    {
        icon: CircleCheckIcon,
        description: "Seu pedido foi verificado com sucesso.",
        date: "23 de junho de 2025 às 19h32",
    },
    {
        icon: NotepadTextIcon,
        description: "Seu pedido foi confirmado.",
        date: "23 de junho de 2025 às 19h32",
    },
];

const orders = [
    {
        id: 78974292,
        status: "Em andamento",
        date: "Dec 30, 2019 07:52",
        total: "R$ 1280,00 (5 Produtos)",
    },
    {
        id: 78974293,
        status: "Concluído",
        date: "Jan 12, 2020 14:20",
        total: "R$ 980,00 (3 Produtos)",
    },
    {
        id: 78974294,
        status: "Cancelado",
        date: "Feb 05, 2020 09:15",
        total: "R$ 320,00 (1 Produto)",
    },
    {
        id: 78974295,
        status: "Em andamento",
        date: "Mar 10, 2020 11:45",
        total: "R$ 1540,00 (6 Produtos)",
    },
    {
        id: 78974296,
        status: "Concluído",
        date: "Apr 22, 2020 17:30",
        total: "R$ 785,00 (4 Produtos)",
    },
    {
        id: 78974297,
        status: "Cancelado",
        date: "May 15, 2020 10:00",
        total: "R$ 560,00 (2 Produtos)",
    },
    {
        id: 78974298,
        status: "Em andamento",
        date: "Jun 08, 2020 16:40",
        total: "R$ 1120,00 (5 Produtos)",
    },
    {
        id: 78974299,
        status: "Concluído",
        date: "Jul 19, 2020 13:55",
        total: "R$ 1340,00 (4 Produtos)",
    },
    {
        id: 78974300,
        status: "Cancelado",
        date: "Aug 25, 2020 08:10",
        total: "R$ 920,00 (3 Produtos)",
    },
    {
        id: 78974301,
        status: "Concluído",
        date: "Sep 14, 2020 12:00",
        total: "R$ 1470,00 (6 Produtos)",
    },
    {
        id: 78974302,
        status: "Em andamento",
        date: "Oct 03, 2020 19:25",
        total: "R$ 610,00 (2 Produtos)",
    },
    {
        id: 78974303,
        status: "Concluído",
        date: "Nov 21, 2020 15:35",
        total: "R$ 1730,00 (7 Produtos)",
    },
];

export default async function OrderDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const order = orders.find((order) => order.id === Number(id));

    if (!order) {
        notFound();
    }

    return (
        <div className="w-full flex flex-col bg-white border-[1px] border-neutral-300 rounded-[4px]">
            <div className="flex flex-col gap-[24px] p-[24px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-[24px] p-[24px] bg-neutral-100 border-[1px] border-neutral-300 rounded-[4px]">
                    <div className="flex items-center md:items-start flex-col gap-[8px]">
                        <p className="text-b-xl leading-b-xl font-normal text-center md:text-start">
                            #{order.id}
                        </p>
                        <p className="text-b-sm leading-b-sm font-normal text-neutral-700 text-center md:text-start">
                            4 Produtos • pedido feito em 17 de junho de 2025 às
                            19h32
                        </p>
                    </div>

                    <p className="text-h-02 leading-h-02 font-semibold">
                        R$1199.00
                    </p>
                </div>

                <p className="text-b-sm leading-b-sm font-normal text-neutral-700">
                    Pedido com previsão de chegada para{" "}
                    <strong className="font-medium text-foreground">
                        23 de janeiro de 2021
                    </strong>
                </p>

                <div className="flex flex-col items-center justify-center gap-[12px] sm:gap-[24px]">
                    <div className="w-full sm:w-[80%] flex items-center justify-center relative">
                        <Progress
                            value={33.3}
                            className="[&>*]:bg-primary bg-[#FDFAE7] border-[1px] border-neutral-300"
                        />
                        <div className="bg-primary border-[2px] border-white size-[24px] rounded-full flex items-center justify-center absolute left-[0%]">
                            <CheckIcon className="size-[12px] stroke-[2.5px] text-white" />
                        </div>
                        <div className="bg-primary border-[2px] border-white size-[24px] rounded-full flex items-center justify-center absolute left-[33.3333333333%]">
                            <CheckIcon className="size-[12px] stroke-[2.5px] text-white" />
                        </div>
                        <div className="bg-[#FDFAE7] border-[2px] border-primary size-[24px] rounded-full flex items-center justify-center absolute right-[33.3333333333%]" />
                        <div className="bg-[#FDFAE7] border-[2px] border-primary size-[24px] rounded-full flex items-center justify-center absolute right-[0%]" />
                    </div>

                    <div className="flex w-full justify-between sm:justify-baseline">
                        {steps.slice(0, 2).map((step, index) => (
                            <div
                                key={index}
                                className="sm:w-[234px] h-[64px] flex flex-col items-center justify-center gap-[12px]"
                            >
                                <step.icon className="size-[24.10px] md:size-[32px] stroke-[1.5px] text-primary" />

                                <p className="hidden sm:block text-b-ty leading-b-ty md:text-b-sm md:leading-b-sm font-medium">
                                    {step.title}
                                </p>
                            </div>
                        ))}
                        {steps.slice(2, 4).map((step, index) => (
                            <div
                                key={index}
                                className="sm:w-[234px] h-[64px] opacity-50 flex flex-col items-center justify-center gap-[12px]"
                            >
                                <step.icon className="size-[24.10px] md:size-[32px] stroke-[1.5px] text-primary" />

                                <p className="hidden sm:block text-b-ty leading-b-ty md:text-b-sm md:leading-b-sm font-medium">
                                    {step.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[24px] p-[24px]">
                <p className="text-b-lg leading-b-lg font-medium">
                    Atividade do pedido
                </p>

                <div className="flex flex-col gap-[16px]">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex gap-[16px]">
                            <div className="size-[48px] flex items-center justify-center rounded-[4px] bg-neutral-200">
                                <activity.icon className="size-[24px] stroke-[1.5px] text-primary" />
                            </div>

                            <div className="flex flex-col gap-[8px]">
                                <p className="text-b-sm leading-b-sm font-normal">
                                    {activity.description}
                                </p>
                                <p className="text-b-sm leading-b-sm font-normal text-neutral-500">
                                    {activity.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

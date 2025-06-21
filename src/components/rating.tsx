import { StarIcon } from "lucide-react";

export default function Rating({ score }: { score: number }) {
    if (score > 0 && score <= 10) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon className="size-[20px]" fill="#EBC80C" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                    <StarIcon className="size-[20px]" fill="#262626" />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 10 && score <= 20) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 20 && score <= 30) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 30 && score <= 40) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#262626"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    } else if (score > 40) {
        return (
            <div className="flex start items-start justify-start gap-x-[6px]">
                <div className="w-full flex items-start justify-start gap-x-[2px]">
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                    <StarIcon
                        className="size-[20px] stroke-[0px]"
                        fill="#EBC80C"
                    />
                </div>
                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                    {`(${score})`}
                </span>
            </div>
        );
    }
}

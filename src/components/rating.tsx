import { StarIcon } from "lucide-react";

export const Rating = ({ score, size }: { score: number; size?: string }) => {
    if (score > 0 && score <= 10) {
        return (
            <div className="flex items-center gap-x-[2px]">
                <StarIcon
                    className={size ? `size-[${size}]` : "size-[20px]"}
                    fill="#fa8232"
                />
                <StarIcon
                    className={size ? `size-[${size}]` : "size-[20px]"}
                    fill="#73737300"
                />
                <StarIcon
                    className={size ? `size-[${size}]` : "size-[20px]"}
                    fill="#73737300"
                />
                <StarIcon
                    className={size ? `size-[${size}]` : "size-[20px]"}
                    fill="#73737300"
                />
                <StarIcon
                    className={size ? `size-[${size}]` : "size-[20px]"}
                    fill="#73737300"
                />
            </div>
        );
    } else if (score > 10 && score <= 20) {
        return (
            <div className="flex items-center gap-x-[2px]">
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#73737300"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#73737300"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#73737300"
                />
            </div>
        );
    } else if (score > 20 && score <= 30) {
        return (
            <div className="flex items-center gap-x-[2px]">
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#73737300"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#73737300"
                />
            </div>
        );
    } else if (score > 30 && score <= 40) {
        return (
            <div className="flex items-center gap-x-[2px]">
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#73737300"
                />
            </div>
        );
    } else if (score > 40) {
        return (
            <div className="flex items-center gap-x-[2px]">
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
                <StarIcon
                    className={`${size ? `size-[${size}]` : "size-[20px]"} stroke-[1.5px] stroke-secondary`}
                    fill="#fa8232"
                />
            </div>
        );
    }
};

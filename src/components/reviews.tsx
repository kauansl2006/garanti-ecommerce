import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

import { ratings, customers } from "@/lib/placeholder-data";
import { FeedbackCard } from "@/components/feedback-card";
import { Rating } from "@/components/rating";

export const ProductReviews = () => {
    return (
        <section className="flex flex-col gap-[40px]">
            <div className="flex flex-col 2xl:flex-row gap-[32px]">
                <div className="flex flex-col items-center justify-center gap-[12px] p-[32px] bg-yellow-100 rounded-[4px]">
                    <h2 className="text-d-02 leading-d-02 font-semibold text-center">
                        4.7
                    </h2>

                    <Rating score={64} size="24px" />

                    <p className="text-b-md leading-b-md font-normal text-neutral-700 text-center">
                        <strong className="text-foreground font-medium">
                            Avaliações dos Clientes:
                        </strong>{" "}
                        (934,516)
                    </p>
                </div>

                <div className="flex flex-col gap-[16px]">
                    {ratings.map((rating, index) => (
                        <div
                            key={index}
                            className="flex flex-nowrap items-center gap-[16px]"
                        >
                            <Rating score={rating.score} size="18px" />
                            <Progress
                                value={rating.score}
                                className="[&>*]:bg-secondary 2xl:w-[412px]"
                            />
                            <div className="flex flex-nowrap items-center gap-[4px]">
                                <span className="text-b-sm leading-b-sm font-medium">
                                    {rating.score}%
                                </span>
                                <span className="text-b-sm leading-b-sm font-normal text-neutral-500">
                                    {rating.reviewers}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-[20px]">
                <p className="text-b-md leading-b-md font-semibold">
                    Feedbacks de Clientes
                </p>

                {customers.map((customer, index) => (
                    <div className="flex flex-col gap-[20px]" key={index}>
                        <FeedbackCard customer={customer} />
                        <Separator orientation="horizontal" />
                    </div>
                ))}
            </div>
        </section>
    );
};

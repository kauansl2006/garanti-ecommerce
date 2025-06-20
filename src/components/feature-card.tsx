import { Feature } from "@/lib/definitions";

export default function FeatureCard({ 
    feature 
} : { 
    feature: Feature 
}
) {
    return (
        <div className="w-full flex items-start justify-start p-[16px] gap-x-[16px]">
            {feature.icon}
            <div className="w-full flex flex-col items-start justify-start gap-y-[4px]">
                <span className="text-l-03 leading-l-03 font-medium text-neutral-900">
                    {feature.title}
                </span>
                <p className="text-b-sm leading-b-sm font-normal text-neutral-600">
                    {feature.description}
                </p>
            </div>
        </div>
    )
}
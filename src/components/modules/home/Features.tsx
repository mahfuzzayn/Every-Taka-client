import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import featureImg1 from "@/assets/images/features/feature-image-1.png";
import featureImg2 from "@/assets/images/features/feature-image-2.png";
import featureImg3 from "@/assets/images/features/feature-image-3.png";
import featureImg4 from "@/assets/images/features/feature-image-4.png";

interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface FeaturesProps {
    heading?: string;
    description?: string;
    linkUrl?: string;
    linkText?: string;
    smallText?: string;
    features?: Feature[];
}

const Features = ({
    heading = "Take control of your money, one taka at a time.",
    description = "Every Taka makes budgeting simple with clear insights, effortless tracking, and the tools you need to save smarter.",
    linkUrl = "/dashboard",
    linkText = "Start Tracking Free",
    smallText = "No setup required. Sign in with Google and go.",
    features = [
        {
            id: "feature-1",
            title: "Track Income & Expenses",
            description:
                "Log your daily transactions and see exactly where your money goes.",
            image: featureImg1,
        },
        {
            id: "feature-2",
            title: "Smart Budgeting",
            description:
                "Set monthly budgets and goals to stay on track and avoid overspending.",
            image: featureImg2,
        },
        {
            id: "feature-3",
            title: "Visual Reports",
            description:
                "Get easy-to-read charts and insights to understand your spending habits.",
            image: featureImg3,
        },
        {
            id: "feature-4",
            title: "Secure & Easy Login",
            description:
                "Sign in with Google and manage your budget securely, anywhere.",
            image: featureImg4,
        },
    ],
}: FeaturesProps) => {
    return (
        <section className="py-32 px-6">
            <div className="container flex flex-col gap-16 lg:px-16 mx-auto">
                <div className="lg:max-w-sm">
                    <h2 className="mb-3 text-xl text-primary font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground mb-8 lg:text-lg">
                        {description}
                    </p>
                    <Link
                        to={linkUrl}
                        className="group flex hover:text-primary transition-color duration-200 items-center text-xs font-medium md:text-base lg:text-lg"
                    >
                        {linkText}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <small>{smallText}</small>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="border-border flex flex-col overflow-clip rounded-xl border"
                        >
                            <div>
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

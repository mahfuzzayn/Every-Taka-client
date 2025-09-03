import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

interface PricingProps {
    heading?: string;
    description?: string;
    price?: string | number;
    priceSuffix?: string;
    features?: string[][];
    button?: {
        label?: string;
        href?: string;
    };
}

const defaultFeatures = [
    [
        "Track income & expenses",
        "Set monthly budgets",
        "Basic charts & insights",
    ],
    [
        "Everything in Free",
        "Smart savings goals",
        "Export data (CSV/Excel)",
        "Email support",
    ],
    [
        "Everything in Pro",
        "Unlimited categories & custom tags",
        "Advanced analytics & AI insights",
        "Priority support",
    ],
];

const Pricing = ({
    heading = "Pricing",
    description = "Budget smarter without breaking the bank",
    price = 0,
    priceSuffix = "/taka",
    features = defaultFeatures,
    button = {
        label: "Start free trial",
        href: "/",
    },
}: PricingProps) => {
    return (
        <section className="py-32 px-6">
            <div className="container mx-auto">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
                    <h2 className="text-4xl text-primary font-semibold text-pretty lg:text-6xl">
                        {heading}
                    </h2>
                    <p className="max-w-md text-muted-foreground lg:text-xl">
                        {description}
                    </p>
                    <div className="mx-auto flex w-full flex-col rounded-lg border p-6 max-w-3xl">
                        <div className="flex text-primary justify-start">
                            <span className="text-lg font-semibold">৳</span>
                            <span className="text-6xl font-semibold">
                                {price}
                            </span>
                            <span className="self-end text-muted-foreground">
                                {priceSuffix}
                            </span>
                        </div>
                        <div className="my-6">
                            {features.map((featureGroup, idx) => (
                                <div key={idx}>
                                    <ul className="flex flex-col gap-3">
                                        {featureGroup.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center justify-between gap-2 text-sm font-medium"
                                            >
                                                {feature}{" "}
                                                <Check className="inline size-4 shrink-0" />
                                            </li>
                                        ))}
                                    </ul>
                                    {idx < features.length - 1 && (
                                        <Separator className="my-6" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <Link to={button.href || "/"} className="sm:ml-auto">
                            <Button className="w-full cursor-pointer">
                                {button.label}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

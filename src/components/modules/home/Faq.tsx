import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

interface FaqProps {
    heading?: string;
    items?: FaqItem[];
}

const Faq = ({
    heading = "Frequently asked questions",
    items = [
        {
            id: "faq-1",
            question: "What is Every Taka?",
            answer: "Every Taka is a simple budget tracking app that helps you record your income, expenses, and savings so you can manage money more effectively.",
        },
        {
            id: "faq-2",
            question: "Do I need an account to use Every Taka?",
            answer: "Yes, you can quickly sign in with your Google account. This keeps your budget data safe and accessible from any device.",
        },
        {
            id: "faq-3",
            question: "Is my data secure?",
            answer: "Absolutely. Your information is stored securely, and we never share your personal data with third parties.",
        },
        {
            id: "faq-4",
            question:
                "Can I use Every Taka for both personal and business expenses?",
            answer: "Yes, you can track personal expenses, household budgets, or even small business finances using the same dashboard.",
        },
        {
            id: "faq-5",
            question: "Does Every Taka work offline?",
            answer: "You can record expenses offline, and once you are back online, the data will sync automatically to your account.",
        },
        {
            id: "faq-6",
            question: "Is Every Taka free to use?",
            answer: "Yes, Every Taka is free for basic features. In the future, we may introduce premium features for advanced budgeting tools.",
        },
        {
            id: "faq-7",
            question: "Can I set savings goals?",
            answer: "Yes, you can set savings goals, track progress, and get reminders to stay on top of your financial plans.",
        },
    ],
}: FaqProps) => {
    return (
        <section className="py-32 px-6">
            <div className="container max-w-3xl mx-auto">
                <h1 className="mb-4 text-primary text-3xl font-semibold md:mb-11 md:text-4xl">
                    {heading}
                </h1>
                <Accordion type="single" collapsible>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;

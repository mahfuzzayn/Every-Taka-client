import { Link } from "react-router";
import logoImg from "@/assets/images/logo.png";

interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer = ({
    logo = {
        src: logoImg,
        alt: "Every Taka Logo",
        title: "Every Taka",
        url: "/",
    },
    tagline = "Budget easy. Live easy.",
    menuItems = [
        {
            title: "Product",
            links: [
                { text: "Overview", url: "/" },
                { text: "Pricing", url: "#pricing" },
                { text: "Features", url: "/features" },
            ],
        },
        {
            title: "Company",
            links: [
                { text: "About", url: "/about" },
                { text: "Contact", url: "/contact" },
                { text: "Privacy", url: "/privacy-policy" },
            ],
        },
        {
            title: "Resources",
            links: [
                { text: "Help", url: "/contact" },
                { text: "Sales", url: "/sales" },
                { text: "Advertise", url: "/advertise" },
            ],
        },
        {
            title: "Socials",
            links: [
                { text: "Twitter", url: "https://x.com/mahfuzzzayn" },
                { text: "Instagram", url: "https://instagram.com/mahfuzzzayn" },
                {
                    text: "LinkedIn",
                    url: "https://linkedin.com/in/mahfuzzayn",
                },
            ],
        },
    ],
    copyright = "© 2025 Everytaka.verecl.com. All rights reserved.",
    bottomLinks = [
        { text: "Terms and Conditions", url: "/terms-and-conditions" },
        { text: "Privacy Policy", url: "/privacy-policy" },
    ],
}: FooterProps) => {
    return (
        <section className="py-32 px-6">
            <div className="container mx-auto">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <Link to={logo.url}>
                                    <img
                                        src={logo.src}
                                        className="w-full max-w-[168px] dark:invert"
                                        alt={logo.alt}
                                        height={100}
                                        width={400}
                                    />
                                </Link>
                            </div>
                            <p className="mt-4 font-bold">{tagline}</p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">
                                    {section.title}
                                </h3>
                                <ul className="text-muted-foreground space-y-4">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary font-medium"
                                        >
                                            <Link to={link.url} target="_blank">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li
                                    key={linkIdx}
                                    className="hover:text-primary underline"
                                >
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;

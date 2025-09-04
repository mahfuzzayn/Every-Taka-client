import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImg from "@/assets/images/logo.png";
import { Link } from "react-router";
import ThirdParty from "@/components/modules/auth/ThirdParty";

interface LoginProps {
    heading?: string;
    logo?: {
        url: string;
        src: string;
        alt: string;
        title?: string;
    };
    buttonText?: string;
    googleText?: string;
    registerText?: string;
    registerUrl?: string;
}

const Login = ({
    heading = "Login",
    logo = {
        url: "/",
        src: logoImg,
        alt: "logo",
        title: "shadcnblocks.com",
    },
    buttonText = "Login",
    registerText = "Need an account?",
    registerUrl = "/register",
}: LoginProps) => {
    return (
        <section className="bg-muted h-screen">
            <div className="flex h-full items-center justify-center">
                {/* Logo */}
                <div className="flex flex-col items-center gap-6 lg:justify-start">
                    <Link to={logo.url}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            title={logo.title}
                            className="h-10 dark:invert"
                        />
                    </Link>
                    <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
                        {heading && (
                            <h1 className="text-xl font-semibold">{heading}</h1>
                        )}
                        <Input
                            type="email"
                            placeholder="Email"
                            className="text-sm"
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            className="text-sm"
                            required
                        />
                        <Button type="submit" className="w-full cursor-pointer">
                            {buttonText}
                        </Button>
                        <ThirdParty />
                    </div>
                    <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                        <p>{registerText}</p>
                        <Link
                            to={registerUrl}
                            className="text-primary font-medium hover:underline"
                        >
                            Register
                        </Link>
                    </div>
                    <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                        <p>Go back?</p>
                        <Link
                            to={"/"}
                            className="text-primary font-medium hover:underline"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const ThirdParty = () => {
    const { userGoogleSignIn, userGithubSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        userGoogleSignIn().then((result) => {
            console.log(result);
        });
    };

    const handleGithubSignIn = () => {
        userGithubSignIn().then((result) => {
            console.log(result);
        });
    };

    return (
        <div className="mt-6 text-center">
            <p className="mb-4">
                <small>Easy login using Google or Github</small>
            </p>
            <div className="flex flex-col md:flex-row gap-4">
                <Button
                    variant="destructive"
                    className="cursor-pointer"
                    onClick={handleGoogleSignIn}
                >
                    Sign in With Google
                </Button>
                <Button
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={handleGithubSignIn}
                >
                    Sign in With Github
                </Button>
            </div>
        </div>
    );
};

export default ThirdParty;

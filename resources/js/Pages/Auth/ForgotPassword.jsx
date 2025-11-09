import { Link, useForm } from "@inertiajs/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LabelInput from "../components/ui/LabelInput";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

const ForgotPassword = () => {
    const { data, setData, post, errors, reset, processing } = useForm({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/forgot-password", { onSuccess: () => reset() });
    };

    return (
        <>
            <Header />

            <section className="max-w-screen-xl lg:mx-auto h-1/2 mx-6 my-10">
                <dir className="lg:w-1/2 mx-auto">
                    <h3 className="text-3xl font-bold text-sky-800 text-center underline">
                        Forgot password
                    </h3>

                    <div className="card p-8 lg:m-20">
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <LabelInput>Your Email</LabelInput>
                                <InputField
                                    type="email"
                                    placeholder="email@example.com"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <span className="text-red-500">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Or, return to login
                                </Link>
                            </div>

                            <Button type={"submit"} disabled={processing}>
                                Email Password Reset Link
                            </Button>
                        </form>
                    </div>
                </dir>
            </section>

            <hr className="text-yellow-200 my-20" />
            <Footer />
        </>
    );
};

export default ForgotPassword;

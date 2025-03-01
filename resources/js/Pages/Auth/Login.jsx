import Header from "../components/Header";
import Footer from "../components/Footer";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import LabelInput from "../components/ui/LabelInput";
import { Link, useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, errors, reset, processing } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login", { onSuccess: () => reset() });
        console.log(data);
    };

    return (
        <>
            <Header />
            <section className="max-w-screen-xl lg:mx-auto h-1/2 mx-6 my-10">
                <dir className="lg:w-1/2 mx-auto">
                    <h3 className="text-3xl font-bold text-sky-800 text-center underline">
                        Login
                    </h3>

                    <div className="card p-8 lg:m-20">
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <LabelInput>Your Email</LabelInput>
                                <InputField
                                    type="email"
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
                                <LabelInput>Password</LabelInput>
                                <InputField
                                    type="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <span className="text-red-500">
                                        {errors.password}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <InputField type="checkbox" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <Button type={"submit"}>
                                Login to your account
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

export default Login;

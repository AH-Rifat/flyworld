import Header from "../components/Header";
import Footer from "../components/Footer";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import LabelInput from "../components/ui/LabelInput";
import { Link, useForm } from "@inertiajs/react";

const SignUp = () => {
    const { data, setData, post, errors, reset, processing } = useForm({
        name: "",
        email: "",
        mobile_number: "",
        password: "",
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", { onSuccess: () => reset() });
        console.log(data);
    };

    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-6 lg:mx-auto h-1/2 my-10">
                <dir className="lg:w-1/2 mx-auto">
                    <h3 className="text-3xl font-bold text-sky-800 text-center underline">
                        Sign Up
                    </h3>

                    <div className="card p-8 lg:m-20">
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <LabelInput>Full Name</LabelInput>
                                <InputField
                                    type="text"
                                    // value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <p className="text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <LabelInput>Email</LabelInput>
                                <InputField
                                    type="email"
                                    // value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <LabelInput>Mobile Number</LabelInput>
                                <InputField
                                    type="number"
                                    // value={data.mobile_number}
                                    onChange={(e) =>
                                        setData("mobile_number", e.target.value)
                                    }
                                />
                                {errors.mobile_number && (
                                    <p className="text-red-500">
                                        {errors.mobile_number}
                                    </p>
                                )}
                            </div>
                            <div>
                                <LabelInput>Password</LabelInput>
                                <InputField
                                    type="password"
                                    // value={data.mobile_number}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <div>
                                <LabelInput>Password</LabelInput>
                                <InputField
                                    type="password"
                                    // value={data.mobile_number}
                                    onChange={(e) =>
                                        setData("password_confirmation", e.target.value)
                                    }
                                />
                                {errors.password_confirmation && (
                                    <p className="text-red-500">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <InputField type="checkbox" id="terms" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-700 dark:text-gray-300"
                                    >
                                        I accept the
                                        <Link
                                            className="font-medium text-gray-700 hover:underline dark:text-primary-500"
                                            href="#"
                                        >
                                            Terms and Conditions
                                        </Link>
                                    </label>
                                </div>
                            </div>

                            <Button type={"submit"}>Sign Up</Button>
                        </form>
                    </div>
                </dir>
            </section>

            <hr className="text-yellow-200 my-20" />
            <Footer />
        </>
    );
};

export default SignUp;

import { Link, useForm } from "@inertiajs/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputField from "../components/ui/InputField";
import LabelInput from "../components/ui/LabelInput";
import Button from "../components/ui/Button";

const ResetPassword = ({ token, email }) => {
    const { data, setData, post, processing, errors } = useForm({
        token: token || "",
        email: email || "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/reset-password");
    };

    return (
        <>
            <Header />

            <section className="max-w-screen-xl lg:mx-auto h-1/2 mx-6 my-10">
                <div className="lg:w-1/2 mx-auto">
                    <h3 className="text-3xl font-bold text-sky-800 text-center underline">
                        Reset Password
                    </h3>

                    <div className="card p-8 lg:m-20">
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            {/* Token Field (Hidden) */}
                            <input
                                type="hidden"
                                value={data.token}
                                onChange={(e) =>
                                    setData("token", e.target.value)
                                }
                            />

                            {/* Email Field (Hidden or Visible) */}
                            <div>
                                <LabelInput>Your Email</LabelInput>
                                <InputField
                                    type="email"
                                    placeholder="email@example.com"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    disabled
                                />
                                {errors && errors.email && (
                                    <span className="text-red-500 text-sm">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <LabelInput>New Password</LabelInput>
                                <InputField
                                    type="password"
                                    placeholder="Enter new password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors && errors.password && (
                                    <span className="text-red-500 text-sm">
                                        {errors.password}
                                    </span>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <LabelInput>Confirm Password</LabelInput>
                                <InputField
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors && errors.password_confirmation && (
                                    <span className="text-red-500 text-sm">
                                        {errors.password_confirmation}
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
                                {processing ? "Updating..." : "Reset Password"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <hr className="text-yellow-200 my-20" />
            <Footer />
        </>
    );
};

export default ResetPassword;

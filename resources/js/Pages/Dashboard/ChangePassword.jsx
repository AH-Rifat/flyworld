import { useForm } from "@inertiajs/react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import LabelInput from "../components/ui/LabelInput";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { toast } from "react-toastify";

const ChangePassword = () => {
    const { data, setData, errors, put, reset, processing } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put("/user/password ", {
            onSuccess: () =>
                toast.success("Password updated successfully", {
                    position: "top-center",
                }),
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
            onFinish: () => reset(),
        });
    };
    return (
        <DashboardLayout>
            <div className="mb-4">
                <h2 className="text-2xl mb-1 font-bold text-slate-800">
                    Update password
                </h2>
                <p className="text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay
                    secure
                </p>
            </div>
            <div className="card p-4 w-96">
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                    <div>
                        <LabelInput>Current Password</LabelInput>
                        <InputField
                            type="password"
                            value={data.current_password}
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                        />
                        {errors.current_password && (
                            <p className="text-sm text-red-600">
                                {errors.current_password}
                            </p>
                        )}
                    </div>
                    <div>
                        <LabelInput>New Password</LabelInput>
                        <InputField
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <p className="text-sm text-red-600">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div>
                        <LabelInput>confirm Password</LabelInput>
                        <InputField
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        {errors.password_confirmation && (
                            <p className="text-sm text-red-600">
                                {errors.password_confirmation}
                            </p>
                        )}
                    </div>

                    <div>
                        <Button type={"submit"} disabled={processing}>
                            Save Password
                        </Button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default ChangePassword;

import DashboardLayout from "../components/Dashboard/DashboardLayout";
import LabelInput from "../components/ui/LabelInput";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { useForm, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";

const Profile = () => {
    const { auth } = usePage().props;
    const { data, setData, put, errors, reset, processing } = useForm({
        name: auth.user.name,
        email: auth.user.email,
        mobile_number: auth.user.mobile_number,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put("/user/profile-information", {
            onSuccess: () =>
                toast.success("Profile updated successfully", {
                    position: "top-center",
                }),
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };

    return (
        <DashboardLayout>
            <div className="mb-4">
                <h2 className="text-2xl mb-1 font-bold text-slate-800">
                    Profile information
                </h2>
                <p className="text-sm text-gray-600">
                    Update your name and email address
                </p>
            </div>
            <div className="card p-4 w-96">
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                    <div>
                        <LabelInput>Name</LabelInput>
                        <InputField
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <LabelInput>Email</LabelInput>
                        <InputField
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <LabelInput>
                            Phone Number (first 0 will be automatically added)
                        </LabelInput>
                        <InputField
                            type="number"
                            value={data.mobile_number}
                            onChange={(e) =>
                                setData("mobile_number", e.target.value)
                            }
                        />
                        {errors.mobile_number && (
                            <p className="text-sm text-red-600">
                                {errors.mobile_number}
                            </p>
                        )}
                    </div>

                    <div>
                        <Button type={"submit"} disabled={processing}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default Profile;

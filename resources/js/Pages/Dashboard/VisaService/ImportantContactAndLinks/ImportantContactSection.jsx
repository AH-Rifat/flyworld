import React, { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import InputField from "../../../components/ui/InputField";
import LabelInput from "../../../components/ui/LabelInput";
import TextariaField from "../../../components/ui/TextariaField";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import SelectCountryList from "../../../components/SelectCountryList";
import { useForm } from "@inertiajs/react";
import Button from "../../../components/ui/Button";
import ImportantContactTable from "./ImportantContactTable";
import { toast } from "react-toastify";

const ImportantContactSection = ({ importantContactAndLinks }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        title: "",
        address: "",
        email: "",
        phone: "",
        office_hours: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-important-contact-and-links", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Important Contact added");
                reset();
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };

    const editSubmit = (e) => {
        e.preventDefault();
        put(`/edit-important-contact-and-links/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Important Contact updated", {
                    position: "top-center",
                });
                reset();
                setIsEdit(false);
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };

    const onEdit = (item) => {
        setIsEdit(true);
        setData("country_id", item.country_id);
        setData("visa_type_id", item.visa_type_id);
        setData("title", item.title);
        setData("address", item.address);
        setData("email", item.email);
        setData("phone", item.phone);
        setData("office_hours", item.office_hours);
        setEditId(item.id);
    };

    return (
        <DashboardLayout>
            <section className="flex flex-col gap-8">
                <div className="card p-4 2xl:w-1/2">
                    <h2 className="card-title">Important Contact & Links</h2>
                    <form onSubmit={isEdit ? editSubmit : addSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full mb-4">
                                <LabelInput>Country Name</LabelInput>
                                <SelectCountryList
                                    value={data.country_id}
                                    onChange={(e) =>
                                        setData("country_id", e.target.value)
                                    }
                                />
                                {errors.country_id && (
                                    <p className="text-red-500">
                                        {errors.country_id}
                                    </p>
                                )}
                            </div>
                            <div className="w-full mb-4">
                                <LabelInput>Visa Type</LabelInput>
                                <SelectVisaTypeList
                                    value={data.visa_type_id}
                                    onChange={(e) =>
                                        setData("visa_type_id", e.target.value)
                                    }
                                />
                                {errors.visa_type_id && (
                                    <p className="text-red-500">
                                        {errors.visa_type_id}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full mb-4">
                                <LabelInput>Email</LabelInput>
                                <InputField
                                    type="email"
                                    value={data.email}
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
                            <div className="w-full mb-4">
                                <LabelInput>Phone</LabelInput>
                                <InputField
                                    type="text"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                {errors.phone && (
                                    <p className="text-red-500">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <LabelInput>Contact Title</LabelInput>
                            <InputField
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <p className="text-red-500">{errors.title}</p>
                            )}
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full mb-4">
                                <LabelInput>Address</LabelInput>
                                <TextariaField
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                {errors.address && (
                                    <p className="text-red-500">
                                        {errors.address}
                                    </p>
                                )}
                            </div>

                            <div className="w-full mb-4">
                                <LabelInput>Office Hours</LabelInput>
                                <TextariaField
                                    type="text"
                                    value={data.office_hours}
                                    onChange={(e) =>
                                        setData("office_hours", e.target.value)
                                    }
                                />
                                {errors.office_hours && (
                                    <p className="text-red-500">
                                        {errors.office_hours}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 lg:w-60">
                            <Button type={"submit"} disabled={processing}>
                                {isEdit ? "Update" : "Add"}
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="card p-4">
                    <ImportantContactTable
                        onEdit={onEdit}
                        data={importantContactAndLinks}
                    />
                </div>
            </section>
        </DashboardLayout>
    );
};

export default ImportantContactSection;

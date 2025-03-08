import { useState } from "react";
import SelectCountryList from "../../../components/SelectCountryList";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import Button from "../../../components/ui/Button";
import TextariaField from "../../../components/ui/TextariaField";
import { useForm } from "@inertiajs/react";
import VisaTypeDiscriptionTable from "./VisaTypeDiscriptionTable";
import { toast } from "react-toastify";

const VisaTypeDiscriptionSection = ({ visaTypeDescriptionsData }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        description: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();

        post("/create-visa-type-description", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Type Description added", {
                    position: "top-center",
                });
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
        put(`/edit-visa-type-description/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Type Description edited", {
                    position: "top-center",
                });
                setIsEdit(false);
                reset();
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
        setData("description", item.description);
        setEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Create Visa-type Discription</h2>
                <form
                    onSubmit={isEdit ? editSubmit : addSubmit}
                    className="flex flex-col gap-4 mb-4"
                >
                    <SelectCountryList
                        value={data.country_id}
                        onChange={(e) => setData("country_id", e.target.value)}
                    />
                    {errors.country_id && (
                        <p className="text-red-600">{errors.country_id}</p>
                    )}

                    <SelectVisaTypeList
                        value={data.visa_type_id}
                        onChange={(e) =>
                            setData("visa_type_id", e.target.value)
                        }
                    />
                    {errors.visa_type_id && (
                        <p className="text-red-600">{errors.visa_type_id}</p>
                    )}
                    <div className="flex-1/2">
                        <TextariaField
                            placeholder="Write Visa Type Description here..."
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <p className="text-red-600">{errors.description}</p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit" : "Add"}
                        </Button>
                    </div>
                </form>
                <VisaTypeDiscriptionTable
                    data={visaTypeDescriptionsData}
                    onEdit={onEdit}
                />
            </div>
        </>
    );
};

export default VisaTypeDiscriptionSection;

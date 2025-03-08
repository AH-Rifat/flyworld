import { useForm } from "@inertiajs/react";
import SelectCountryList from "../../../components/SelectCountryList";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import TextariaField from "../../../components/ui/TextariaField";
import EligibilityTable from "../Eligibility/EligibilityTable";
import { toast } from "react-toastify";

const CreateEligibilitySection = ({ eligibilitysData: eligibilitys }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        eligibility_content: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-eligibility", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Eligibility added", {
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
        put(`/edit-eligibility/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Eligibility edited", {
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
        setData("eligibility_content", item.eligibility_content);
        setEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Eligibility to Apply for Visa</h2>
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
                            placeholder="Write Eligibility to Apply for Visa here..."
                            value={data.eligibility_content}
                            onChange={(e) =>
                                setData("eligibility_content", e.target.value)
                            }
                        />
                        {errors.eligibility_content && (
                            <p className="text-red-600">
                                {errors.eligibility_content}
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </div>
                </form>
                <EligibilityTable data={eligibilitys} onEdit={onEdit} />
            </div>
        </>
    );
};

export default CreateEligibilitySection;

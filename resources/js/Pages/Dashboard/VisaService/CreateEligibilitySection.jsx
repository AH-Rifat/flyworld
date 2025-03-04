import { useForm } from "@inertiajs/react";
import SelectCountryList from "../../components/SelectCountryList";
import { useState } from "react";
import Button from "../../components/ui/Button";
import EligibilityTable from "./Tables/EligibilityTable";
import { toast } from "react-toastify";

const CreateEligibilitySection = ({ eligibilitysData: eligibilitys }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        eligibility_content: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-eligibility", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Eligibility added");
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
                toast.success("Eligibility edited");
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
                    <div className="flex-1/2">
                        <textarea
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                            placeholder="Write Eligibility to Apply for Visa here..."
                            value={data.eligibility_content}
                            onChange={(e) =>
                                setData("eligibility_content", e.target.value)
                            }
                        ></textarea>
                        {errors.eligibility_content && (
                            <p className="text-red-600">
                                {errors.eligibility_content}
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit" : "Add"}
                        </Button>
                    </div>
                </form>
                <EligibilityTable data={eligibilitys} onEdit={onEdit} />
            </div>
        </>
    );
};

export default CreateEligibilitySection;

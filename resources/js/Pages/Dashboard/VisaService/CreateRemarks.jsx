import Button from "../../components/ui/Button";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useState } from "react";
import SelectCountryList from "../../components/SelectCountryList";
import RemarksTable from "./Tables/RemarksTable";

const CreateRemarks = ({ remarksData: remarks }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        remarks: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [remarksEditId, setRemarksEditId] = useState(null);

    const addVisaRemarks = (e) => {
        e.preventDefault();

        post("/create-remarks", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Remarks added");
                reset();
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };
    const editVisaRemarks = (e) => {
        e.preventDefault();

        put(`/edit-remarks/${remarksEditId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Remarks edited");
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
        setData("remarks", item.remarks);
        setRemarksEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Create Remarks</h2>
                <form
                    onSubmit={isEdit ? editVisaRemarks : addVisaRemarks}
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
                            placeholder="Write Remarks here..."
                            value={data.remarks}
                            onChange={(e) => setData("remarks", e.target.value)}
                        ></textarea>
                        {errors.remarks && (
                            <p className="text-red-600">{errors.remarks}</p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit Visa Remarks" : "Add Visa Remarks"}
                        </Button>
                    </div>
                </form>
                <RemarksTable data={remarks} onEdit={onEdit} />
            </div>
        </>
    );
};

export default CreateRemarks;

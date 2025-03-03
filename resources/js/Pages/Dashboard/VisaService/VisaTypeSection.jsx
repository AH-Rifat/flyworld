import { useForm } from "@inertiajs/react";
import { useState } from "react";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import SelectCountryList from "../../components/SelectCountryList";
import { toast } from "react-toastify";
import VisaTypeTable from "./Tables/VisaTypeTable";

const VisaTypeSection = ({ visaTypesData: visaTypes }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type: "",
        visa_description: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const onEdit = (item) => {
        setIsEdit(true);
        setData("country_id", item.country_id);
        setData("visa_type", item.visa_type);
        setData("visa_description", item.visa_description);
        setEditId(item.id);
    };

    const addVisaType = (e) => {
        e.preventDefault();
        post("/create-visa-type", {
            onSuccess: () => {
                setData("country_id", "");
                toast.success("VisaType added");
                reset();
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };
    const editVisaType = (e) => {
        e.preventDefault();

        put(`/edit-visa-type/${editId}`, {
            onSuccess: () => {
                toast.success("VisaType edited");
                setIsEdit(false);
                reset();
                setData("country_id", "");
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Create Visa-type</h2>
                <form
                    onSubmit={isEdit ? editVisaType : addVisaType}
                    className="flex flex-col gap-4 mb-4"
                >
                    <SelectCountryList
                        onChange={(e) => setData("country_id", e.target.value)}
                        value={data.country_id}
                    />

                    <InputField
                        type="text"
                        placeholder="VisaType Name"
                        value={data.visa_type}
                        onChange={(e) => setData("visa_type", e.target.value)}
                    />

                    <textarea
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                        placeholder="Write visa-type description here..."
                        value={data.visa_description}
                        onChange={(e) =>
                            setData("visa_description", e.target.value)
                        }
                    ></textarea>

                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit VisaType Name" : "Add VisaType"}
                        </Button>
                    </div>
                </form>
                <VisaTypeTable data={visaTypes} onEdit={onEdit} />
            </div>
        </>
    );
};

export default VisaTypeSection;

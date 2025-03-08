import { useForm } from "@inertiajs/react";
import { useState } from "react";
import InputField from "../../../components/ui/InputField";
import Button from "../../../components/ui/Button";
import { toast } from "react-toastify";
import VisaTypeTable from "./VisaTypeTable";

const VisaTypeSection = ({ visaTypesData: visaTypes }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        visa_type: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const onEdit = (item) => {
        setIsEdit(true);
        setData("visa_type", item.visa_type);
        setEditId(item.id);
    };

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-visa-type", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("VisaType added");
                reset();
            },
            onError: () => {
                toast.error("Something went wrong", {
                    position: "top-center",
                });
            },
        });
    };
    const editSubmit = (e) => {
        e.preventDefault();

        put(`/edit-visa-type/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("VisaType edited");
                setIsEdit(false);
                reset();
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
                    onSubmit={isEdit ? editSubmit : addSubmit}
                    className="flex flex-col gap-4 mb-4"
                >
                    <InputField
                        type="text"
                        placeholder="VisaType Name"
                        value={data.visa_type}
                        onChange={(e) => setData("visa_type", e.target.value)}
                    />
                    {errors.visa_type && (
                        <p className="text-red-500">{errors.visa_type}</p>
                    )}
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit" : "Add"}
                        </Button>
                    </div>
                </form>
                <VisaTypeTable data={visaTypes} onEdit={onEdit} />
            </div>
        </>
    );
};

export default VisaTypeSection;

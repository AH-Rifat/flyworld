import Button from "../../../components/ui/Button";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useState } from "react";
import SelectCountryList from "../../../components/SelectCountryList";
import RemarksTable from "./RemarksTable";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import TextariaField from "../../../components/ui/TextariaField";

const CreateRemarks = ({ remarksData: remarks }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        remarks: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-remarks", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Remarks added", {
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
        put(`/edit-remarks/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Remarks edited", {
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
        setData("remarks", item.remarks);
        setEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Create Remarks</h2>
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
                            placeholder="Write Remarks here..."
                            value={data.remarks}
                            onChange={(e) => setData("remarks", e.target.value)}
                        />
                        {errors.remarks && (
                            <p className="text-red-600">{errors.remarks}</p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </div>
                </form>
                <RemarksTable data={remarks} onEdit={onEdit} />
            </div>
        </>
    );
};

export default CreateRemarks;

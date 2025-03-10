import { useForm } from "@inertiajs/react";
import SelectCountryList from "../../../components/SelectCountryList";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import Button from "../../../components/ui/Button";
import TextariaField from "../../../components/ui/TextariaField";
import { useState } from "react";
import { toast } from "react-toastify";
import ImportantDocumentsInfoTable from "./ImportantDocumentsInfoTable";

const ImportantDocumentsInfo = ({ importantDocumentInfos }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        description: "",
        remarks: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-important-documents-information", {
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
        put(`/edit-important-documents-information/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Important Documents Info updated", {
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
        setEditId(item.id);
        setData("country_id", item.country_id);
        setData("visa_type_id", item.visa_type_id);
        setData("description", item.description);
        setData("remarks", item.remarks);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Important Documents Information</h2>
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
                    <span className="text-red-600 text-xs">
                        * Don't Add Tourist & Student Visa Type
                    </span>
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
                            placeholder="Write Visa Description here..."
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <p className="text-red-600">{errors.description}</p>
                        )}
                    </div>
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
                <ImportantDocumentsInfoTable
                    data={importantDocumentInfos}
                    onEdit={onEdit}
                />
            </div>
        </>
    );
};

export default ImportantDocumentsInfo;

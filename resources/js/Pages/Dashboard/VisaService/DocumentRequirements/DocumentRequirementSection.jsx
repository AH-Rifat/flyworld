import { useRef, useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import SelectCountryList from "../../../components/SelectCountryList";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import Button from "../../../components/ui/Button";
import JoditEditor from "jodit-react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DocumentRequirementTable from "./DocumentRequirementTable";

const DocumentRequirementSection = ({ documentRequirementData }) => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        country_id: "",
        visa_type_id: "",
        title: "",
        description: "",
    });
    const editorRef = useRef(null);

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-visa-documents-requirements", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Document Requirement added", {
                    position: "top-center",
                });
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
        put(`/edit-visa-documents-requirements/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Document Requirement edited", {
                    position: "top-center",
                });
                setIsEdit(false);
                reset();
            },
            onError: () => {
                toast.error("Something went wrong", {
                    position: "top-center",
                });
            },
        });
    };

    const onEdit = (item) => {
        setIsEdit(true);
        setData("country_id", item.country_id);
        setData("visa_type_id", item.visa_type_id);
        setData("title", item.title);
        setData("description", item.description);
        setEditId(item.id);
    };

    return (
        <DashboardLayout>
            <section className="flex flex-col gap-8">
                <div className="card p-4">
                    <h2 className="card-title">Documents Requirements</h2>
                    <form
                        className="my-6"
                        onSubmit={isEdit ? editSubmit : addSubmit}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Country Selection */}
                            <div className="mb-4">
                                <SelectCountryList
                                    onChange={(e) =>
                                        setData("country_id", e.target.value)
                                    }
                                    value={data.country_id}
                                />
                                {errors.country_id && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.country_id}
                                    </p>
                                )}
                            </div>

                            {/* Visa Type Selection */}
                            <div className="mb-4">
                                <SelectVisaTypeList
                                    onChange={(e) =>
                                        setData("visa_type_id", e.target.value)
                                    }
                                    value={data.visa_type_id}
                                />
                                {errors.visa_type_id && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.visa_type_id}
                                    </p>
                                )}
                            </div>

                            {/* Document Type Selection */}
                            <div className="mb-4">
                                <div className="flex flex-col">
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Select Document Type
                                        </option>
                                        <option value="serviceholder">
                                            Service Holder
                                        </option>
                                        <option value="businessperson">
                                            Business Person
                                        </option>
                                        <option value="professionals">
                                            Professionals (Doctor, Engineer, CA,
                                            etc)
                                        </option>
                                        <option value="others">Others</option>
                                    </select>
                                    {errors.title && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description Editor */}
                        <div className="mb-4">
                            <JoditEditor
                                ref={editorRef}
                                value={data.description}
                                onChange={(newDescription) =>
                                    setData("description", newDescription)
                                }
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="mb-4">
                            {processing ? (
                                <Button className="w-24!">
                                    {isEdit ? "Updating..." : "Adding..."}
                                </Button>
                            ) : (
                                <Button type="submit" className="w-24!">
                                    {isEdit ? "Update" : "Add"}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="card p-4">
                    <DocumentRequirementTable
                        data={documentRequirementData}
                        onEdit={onEdit}
                    />
                </div>
            </section>
        </DashboardLayout>
    );
};

export default DocumentRequirementSection;

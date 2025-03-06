import { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import LabelInput from "../../../components/ui/LabelInput";
import InputField from "../../../components/ui/InputField";
import Button from "../../../components/ui/Button";
import SampleDocumentsTable from "./SampleDocumentsTable";
import SelectCountryList from "../../../components/SelectCountryList";
import { useForm } from "@inertiajs/react";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import { toast } from "react-toastify";

const SampleDocumentsSection = ({ sampleDocumentsAndPhotos }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        title: "",
        image: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-sample-documents-and-photos", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Sample Documents and Photos added");
                reset();
                setImagePreview(null); // Reset image preview
            },
            onError: () => toast.error("Something went wrong"),
        });
    };

    const editSubmit = (e) => {
        e.preventDefault();
        //  TODO: update sample documents and photos
    };

    const onEdit = (item) => {
        setIsEdit(true);
        setData({
            country_id: item.country_id,
            visa_type_id: item.visa_type_id,
            title: item.title,
        });
        setEditId(item.id);
        setImagePreview(item.image ? `/storage/${item.image}` : null); // Set image preview for editing
    };

    const handleImageChange = (e) => {
        setData("image", e.target.files[0]);
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            setImagePreview(URL.createObjectURL(file)); // Create a URL for the selected file
        }
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <div className="card p-4 lg:w-1/3">
                    <div className="card-title">Sample Documents & Photos</div>
                    <form
                        onSubmit={isEdit ? editSubmit : addSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="mb-4">
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
                        <div className="mb-4">
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
                        <div className="mb-4">
                            <LabelInput>Document Title</LabelInput>
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
                        <div className="mb-4">
                            <LabelInput>Image Preview</LabelInput>
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Image Preview"
                                    className="w-1/2 mb-2 object-cover rounded-lg"
                                />
                            )}
                        </div>
                        <div className="mb-4">
                            <LabelInput>Image Upload</LabelInput>
                            <InputField
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {errors.image && (
                                <p className="text-red-500">{errors.image}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Button type={"submit"} disabled={processing}>
                                {isEdit ? "Update" : "Add"}
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="card p-4 lg:w-2/3">
                    <SampleDocumentsTable
                        data={sampleDocumentsAndPhotos}
                        onEdit={onEdit}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default SampleDocumentsSection;

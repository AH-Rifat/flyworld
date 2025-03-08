import { useState } from "react";
import SelectCountryList from "../../../components/SelectCountryList";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import Button from "../../../components/ui/Button";
import TextariaField from "../../../components/ui/TextariaField";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import VisaProcessingTimeTable from "./VisaProcessingTimeTable";

const VisaProcessingTimeSection = ({
    visaProcessingTimesData: visaProcessingTimes,
}) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        processing_time: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-visa-processing-time", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Processing Time added", {
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
        put(`/edit-visa-processing-time/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Processing Time edited", {
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
        setData("country_id", item.country_id);
        setData("visa_type_id", item.visa_type_id);
        setData("processing_time", item.processing_time);
        setIsEdit(true);
        setEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Processing Time</h2>
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
                            placeholder="Write Visa Processing Time here..."
                            value={data.processing_time}
                            onChange={(e) =>
                                setData("processing_time", e.target.value)
                            }
                        />
                        {errors.processing_time && (
                            <p className="text-red-600">
                                {errors.processing_time}
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </div>
                </form>

                <VisaProcessingTimeTable
                    data={visaProcessingTimes}
                    onEdit={onEdit}
                />
            </div>
        </>
    );
};

export default VisaProcessingTimeSection;

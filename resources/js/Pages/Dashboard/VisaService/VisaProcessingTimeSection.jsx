import { useState } from "react";
import SelectCountryList from "../../components/SelectCountryList";
import Button from "../../components/ui/Button";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import VisaProcessingTimeTable from "./Tables/VisaProcessingTimeTable";

const VisaProcessingTimeSection = ({
    visaProcessingTimesData: visaProcessingTimes,
}) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        processing_time: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-visa-processing-time", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Processing Time added");
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
                toast.success("Visa Processing Time edited");
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
                    <div className="flex-1/2">
                        <textarea
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                            placeholder="Write Visa Processing Time here..."
                            value={data.processing_time}
                            onChange={(e) =>
                                setData("processing_time", e.target.value)
                            }
                        ></textarea>
                        {errors.processing_time && (
                            <p className="text-red-600">
                                {errors.processing_time}
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit" : "Add"}
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

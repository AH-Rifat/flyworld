import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-toastify";
import SelectCountryList from "../../../components/SelectCountryList";
import SelectVisaTypeList from "../../../components/SelectVisaTypeList";
import Button from "../../../components/ui/Button";
import TextariaField from "../../../components/ui/TextariaField";
import BeforeDepartureRequirementsTable from "./BeforeDepartureRequirementsTable";

const BeforeDepartureRequirementsSection = ({
    beforeDepartureRequirementsData,
}) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
        before_departure_requirements: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-before-departure-requirements", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Before Departure Requirements added", {
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
        put(`/edit-before-departure-requirements/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Before Departure Requirements edited", {
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
        setData(
            "before_departure_requirements",
            item.before_departure_requirements
        );
        setIsEdit(true);
        setEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Before Departure Requirements</h2>
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
                            placeholder="Write Before Departure Requirements here..."
                            value={data.before_departure_requirements}
                            onChange={(e) =>
                                setData(
                                    "before_departure_requirements",
                                    e.target.value
                                )
                            }
                        />
                        {errors.before_departure_requirements && (
                            <p className="text-red-600">
                                {errors.before_departure_requirements}
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </div>
                </form>
                <BeforeDepartureRequirementsTable
                    data={beforeDepartureRequirementsData}
                    onEdit={onEdit}
                />
            </div>
        </>
    );
};

export default BeforeDepartureRequirementsSection;

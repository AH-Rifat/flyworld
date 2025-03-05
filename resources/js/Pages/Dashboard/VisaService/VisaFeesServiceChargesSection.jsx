import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Button from "../../components/ui/Button";
import SelectCountryList from "../../components/SelectCountryList";
import VisaFeesServiceChargesTable from "./Tables/VisaFeesServiceChargesTable";
import { toast } from "react-toastify";

const VisaFeesServiceChargesSection = ({ feeAndServiceChargesData }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_id: "",
        fee_and_service_charges: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const addSubmit = (e) => {
        e.preventDefault();
        post("/create-fee-and-service-charges", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Fees and Service Charges added");
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
        put(`/edit-fee-and-service-charges/${editId}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Visa Fees and Service Charges edited");
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
        setEditId(item.id);
        setData("country_id", item.country_id);
        setData("fee_and_service_charges", item.fee_and_service_charges);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Visa Fees and Service Charges</h2>
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
                            placeholder="Write Visa Fees and Service Charges here..."
                            value={data.fee_and_service_charges}
                            onChange={(e) =>
                                setData(
                                    "fee_and_service_charges",
                                    e.target.value
                                )
                            }
                        ></textarea>
                        {errors.fee_and_service_charges && (
                            <p className="text-red-600">
                                {errors.fee_and_service_charges}
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:ms-auto">
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit" : "Add"}
                        </Button>
                    </div>
                </form>

                <VisaFeesServiceChargesTable
                    data={feeAndServiceChargesData}
                    onEdit={onEdit}
                />
            </div>
        </>
    );
};

export default VisaFeesServiceChargesSection;

import InputField from "../../components/ui/InputField";
import LabelInput from "../../components/ui/LabelInput";
import Button from "../../components/ui/Button";
import CountryTable from "./Tables/CountryTable";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useState } from "react";

const CountrySection = ({ countiesData }) => {
    const { data, setData, post, put, errors, reset, processing } = useForm({
        country_name: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const [countryEditId, setCountryEditId] = useState(null);

    const addCountry = (e) => {
        e.preventDefault();

        post("/create-country", {
            onSuccess: () => {
                toast.success("Country added");
                reset();
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };
    const editCountry = (e) => {
        e.preventDefault();

        put(`/edit-country/${countryEditId}`, {
            onSuccess: () => {
                toast.success("Country edited");
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
        setData("country_name", item.country_name);
        setCountryEditId(item.id);
    };

    return (
        <>
            <div className="card p-4">
                <h2 className="card-title">Create Country</h2>
                <form
                    onSubmit={isEdit ? editCountry : addCountry}
                    className="flex flex-col lg:flex-row gap-4 mb-4"
                >
                    <div className="flex-1/2">
                        <InputField
                            type="text"
                            placeholder="Country Name"
                            value={data.country_name}
                            onChange={(e) =>
                                setData("country_name", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Button type={"submit"} disabled={processing}>
                            {isEdit ? "Edit Country Name" : "Add Country"}
                        </Button>
                    </div>
                </form>
                <CountryTable data={countiesData} onEdit={onEdit} />
            </div>
        </>
    );
};

export default CountrySection;

import DashBoardLayout from "../../components/Dashboard/DashboardLayout";
import CountrySection from "./CountrySection";

const CreateVisaTypeCountryNamePage = ({ countries }) => {

    return (
        <DashBoardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CountrySection countiesData={countries} />
                <div className="card p-4">
                    <h2 className="card-title">Create Visa-type</h2>
                </div>
                <div className="card p-4">
                    <h2 className="card-title">Create Remarks</h2>
                </div>
                <div className="card p-4">
                    <h2 className="card-title">Eligibility to Apply for Visa</h2>
                </div>
                <div className="card p-4">
                    <h2 className="card-title">Processing Time</h2>
                </div>
                <div className="card p-4">
                    <h2 className="card-title">Before Departure Requirements</h2>
                </div>
            </div>
        </DashBoardLayout>
    );
};

export default CreateVisaTypeCountryNamePage;

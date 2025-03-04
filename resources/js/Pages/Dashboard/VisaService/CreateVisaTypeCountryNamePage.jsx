import DashBoardLayout from "../../components/Dashboard/DashboardLayout";
import CountrySection from "./CountrySection";
import CreateRemarks from "./CreateRemarks";
import VisaTypeSection from "./VisaTypeSection";

const CreateVisaTypeCountryNamePage = ({ countries, visaTypes, remarks }) => {
    return (
        <DashBoardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CountrySection countiesData={countries} />
                <VisaTypeSection visaTypesData={visaTypes} />
                <CreateRemarks remarksData={remarks} />
                <div className="card p-4">
                    <h2 className="card-title">
                        Eligibility to Apply for Visa
                    </h2>
                </div>
                <div className="card p-4">
                    <h2 className="card-title">Processing Time</h2>
                </div>
                <div className="card p-4">
                    <h2 className="card-title">
                        Before Departure Requirements
                    </h2>
                </div>
            </div>
        </DashBoardLayout>
    );
};

export default CreateVisaTypeCountryNamePage;

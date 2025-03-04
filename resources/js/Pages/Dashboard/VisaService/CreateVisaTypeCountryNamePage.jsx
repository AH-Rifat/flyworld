import DashBoardLayout from "../../components/Dashboard/DashboardLayout";
import CountrySection from "./CountrySection";
import CreateEligibilitySection from "./CreateEligibilitySection";
import CreateRemarks from "./CreateRemarks";
import VisaProcessingTimeSection from "./VisaProcessingTimeSection";
import VisaTypeSection from "./VisaTypeSection";

const CreateVisaTypeCountryNamePage = ({
    countries,
    visaTypes,
    remarks,
    eligibilitys,
    visaProcessingTimes,
}) => {
    return (
        <DashBoardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CountrySection countiesData={countries} />
                <VisaTypeSection visaTypesData={visaTypes} />
                <CreateRemarks remarksData={remarks} />
                <CreateEligibilitySection eligibilitysData={eligibilitys} />
                <VisaProcessingTimeSection visaProcessingTimesData={visaProcessingTimes} />
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

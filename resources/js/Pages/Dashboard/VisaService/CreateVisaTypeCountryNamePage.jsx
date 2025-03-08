import DashBoardLayout from "../../components/Dashboard/DashboardLayout";
import BeforeDepartureRequirementsSection from "./BeforeDepartureRequirementsSection";
import CountrySection from "./CountrySection";
import CreateEligibilitySection from "./CreateEligibilitySection";
import CreateRemarks from "./CreateRemarks";
import VisaFeesServiceChargesSection from "./VisaFeesServiceChargesSection";
import VisaProcessingTimeSection from "./VisaProcessingTimeSection";
import VisaTypeDiscriptionSection from "./VisaTypeDiscription/VisaTypeDiscriptionSection";
import VisaTypeSection from "./VisaType/VisaTypeSection";

const CreateVisaTypeCountryNamePage = ({
    countries,
    visaTypes,
    visaTypeDescriptions,
    remarks,
    eligibilitys,
    visaProcessingTimes,
    beforeDepartureRequirements,
    feeAndServiceCharges,
}) => {
    return (
        <DashBoardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-10">
                    <CountrySection countiesData={countries} />
                    <CreateRemarks remarksData={remarks} />
                    <VisaFeesServiceChargesSection
                        feeAndServiceChargesData={feeAndServiceCharges}
                    />
                    <VisaProcessingTimeSection
                        visaProcessingTimesData={visaProcessingTimes}
                    />
                </div>
                <div className="flex flex-col gap-10">
                    <VisaTypeSection visaTypesData={visaTypes} />
                    <VisaTypeDiscriptionSection
                        visaTypeDescriptionsData={visaTypeDescriptions}
                    />
                    <CreateEligibilitySection eligibilitysData={eligibilitys} />
                    <BeforeDepartureRequirementsSection
                        beforeDepartureRequirementsData={
                            beforeDepartureRequirements
                        }
                    />
                </div>
            </div>
        </DashBoardLayout>
    );
};

export default CreateVisaTypeCountryNamePage;

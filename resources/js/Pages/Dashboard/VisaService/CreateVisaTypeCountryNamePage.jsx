import DashBoardLayout from "../../components/Dashboard/DashboardLayout";
import BeforeDepartureRequirementsSection from "./BeforeDepartureRequirement/BeforeDepartureRequirementsSection";
import CountrySection from "./CountrySection";
import CreateEligibilitySection from "../VisaService/Eligibility/CreateEligibilitySection";
import CreateRemarks from "../VisaService/Remarks/CreateRemarks";
import VisaFeesServiceChargesSection from "./VisaFeeServiceCharge/VisaFeesServiceChargesSection";
import VisaProcessingTimeSection from "./VisaProcessingTime/VisaProcessingTimeSection";
import VisaTypeDiscriptionSection from "./VisaTypeDiscription/VisaTypeDiscriptionSection";
import VisaTypeSection from "./VisaType/VisaTypeSection";
import ImportantDocumentsInfo from "./ImportantDocumentsInfo/ImportantDocumentsInfo";

const CreateVisaTypeCountryNamePage = ({
    countries,
    visaTypes,
    visaTypeDescriptions,
    remarks,
    eligibilitys,
    visaProcessingTimes,
    beforeDepartureRequirements,
    feeAndServiceCharges,
    importantDocumentInfo,
}) => {
    return (
        <DashBoardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-10">
                    <CountrySection countiesData={countries} />
                    <ImportantDocumentsInfo
                        importantDocumentInfos={importantDocumentInfo}
                    />
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

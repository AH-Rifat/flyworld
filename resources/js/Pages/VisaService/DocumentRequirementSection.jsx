import Accordion from "../components/ui/Accordion";

const DocumentRequirementSection = ({ data }) => {
    const items = [
        {
            id: 1,
            title: "Service Holder",
            content: `Original Passport with validity of minimum six months after the intended date of departure and minimum two blank pages for visa stamp.
                a) Copy of previous passports and visas issued.
                `,
        },
        {
            id: 2,
            title: "Business Person",
            content:
                "Original Passport with validity of minimum six months after the intended date of departure and minimum two blank pages for visa stamp.",
        },
        {
            id: 3,
            title: "Professionals (Doctor, Engineer, CA etc)",
            content:
                "Original Passport with validity of minimum six months after the intended date of departure and minimum two blank pages for visa stamp.",
        },
        {
            id: 4,
            title: "Others",
            content:
                "Original Passport with validity of minimum six months after the intended date of departure and minimum two blank pages for visa stamp.",
        },
    ];
    return (
        <>
            <Accordion items={data} />
        </>
    );
};

export default DocumentRequirementSection;

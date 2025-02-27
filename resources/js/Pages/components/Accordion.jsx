import { useState } from "react";

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="max-w-2xl mx-auto space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border rounded-lg border-sky-500 shadow-sm transition-all duration-300 ease-in-out"
                >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full rounded-lg px-6 py-2 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        aria-expanded={openIndex === index}
                        aria-controls={`accordion-content-${index}`}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            {item.title}
                        </span>
                        <svg
                            className={`w-6 h-6 transform transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : "rotate-0"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        id={`accordion-content-${index}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? "max-h-[500px]" : "max-h-0"
                        }`}
                    >
                        <div className="px-6 pb-4 text-gray-600">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

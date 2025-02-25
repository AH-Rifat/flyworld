import Header from "../components/Header";
import Footer from "../components/Footer";

const TouristPackage = () => {
    const data = [
        {
            id: 1,
            title: "Vietnam",
            description: "Description",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            title: "United Arab Emirates",
            description: "Description",
            image: "https://media.istockphoto.com/id/1662820522/photo/evening-mood-with-a-view-of-the-dubai-skyline-with-a-bridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=z50FPZ24JWDYcH-AeS3Cb2t_WsC7k6exhLJlnbWpuwU=",
        },
        {
            id: 3,
            title: "Turkey",
            description: "Description",
            image: "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            title: "Thailand",
            description: "Description",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            title: "Sri Lanka",
            description: "Description",
            image: "https://images.unsplash.com/photo-1586846288010-25744d79a132?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            title: "Singapore",
            description: "Description",
            image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2luZ2Fwb3JlfGVufDB8fDB8fHww",
        },
        {
            id: 7,
            title: "Qatar",
            description: "Description",
            image: "https://plus.unsplash.com/premium_photo-1697730197947-f19e92f0035b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UWF0YXJ8ZW58MHwwfDB8fHww",
        },
        {
            id: 8,
            title: "Nepal",
            description: "Description",
            image: "https://images.unsplash.com/photo-1545662618-66de187bbf69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 9,
            title: "Morocco",
            description: "Description",
            image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9yb2Njb3xlbnwwfDB8MHx8fDA%3D",
        },
        {
            id: 10,
            title: "Maldives",
            description: "Description",
            image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 11,
            title: "Malaysia",
            description: "Description",
            image: "https://images.unsplash.com/photo-1577931683033-1059552104e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWFsYXlzaWF8ZW58MHwwfDB8fHww",
        },
        {
            id: 12,
            title: "Dubai",
            description: "Description",
            image: "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 13,
            title: "India",
            description: "Description",
            image: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 14,
            title: "Egypt",
            description: "Description",
            image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 15,
            title: "Cambodia",
            description: "Description",
            image: "https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FtYm9kaWF8ZW58MHwwfDB8fHwy",
        },
    ];

    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-auto">
                <h1 className="text-center my-8 underline text-3xl font-bold text-sky-800">
                    Tourist Package
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-14 mx-8">
                    {data.map((item) => (
                        <div key={item.id}>
                            <div className="card rounded-xl shadow-yellow-200 shadow-md overflow-hidden">
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt="image"
                                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                                    />
                                </div>
                                <p className="text-xl text-white bg-yellow-500 py-2 px-5 font-semibold text-center">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
            <hr className="text-yellow-200 my-20" />
            <Footer />
        </>
    );
};

export default TouristPackage;

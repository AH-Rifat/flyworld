const DestinationList = () => {
    const data = [
        {
            id: 1,
            name: "Nepal",
            image: "https://images.unsplash.com/photo-1545662618-66de187bbf69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 2,
            name: "Thailand",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 3,
            name: "Dubai",
            image: "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 5,
            name: "India",
            image: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
    ];

    return (
        <div className="py-20 bg-yellow-50 my-8">
            <h3 className="text-black font-bold text-3xl text-center">
                International Destinations Open for Travel
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8 my-8 mx-10">
                {data.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <div className="overflow-hidden rounded-t-lg">
                                <img
                                    src={item.image}
                                    alt="image"
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
                                />
                            </div>
                            <p className="text-xl font-semibold my-4">
                                {item.name}
                            </p>
                            <button className="mb-5 text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-semibold rounded-lg text-lg px-6 py-0.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                More
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DestinationList;

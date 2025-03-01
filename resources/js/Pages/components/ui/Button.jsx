const Button = ({ children, type }) => {
    return (
        <>
            <button
                type={type}
                className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                {children}
            </button>
        </>
    );
};

export default Button;

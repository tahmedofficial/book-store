import { Link } from "react-router-dom";
import img from "../../assets/images/error.jpg"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center mt-16">
                <img className="w-72 md:w-2/4 lg:w-1/4" src={img} alt="" />
            </div>
            <Link to="/">
                <button className="text-4xl mt-10 hover:bg-slate-400 duration-300 rounded-full font-semibold bg-slate-700 text-white py-3 px-12">
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
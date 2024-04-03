import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/book.png";

const Banner = () => {
    return (
        <div className="bg-gray-100 mt-8 rounded-3xl pt-10">
            <div className="md:grid grid-cols-3">
                <div className="md:p-20 p-10 col-span-2">
                    <h2 className="md:text-7xl md:font-bold font-semibold text-4xl">Books to freshen up your bookshelf</h2>
                    <Link to="/listedBooks">
                        <button className="btn mt-10 bg-cyan-500 text-xl px-8 rounded-full text-white">View The List</button>
                    </Link>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
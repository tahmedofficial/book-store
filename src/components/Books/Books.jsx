import PropTypes from "prop-types";
import { LuCalendarCheck } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";

const Books = ({ book }) => {

    const { author, bookId, bookName, category, image, publisher, rating, tags, totalPages, yearOfPublishing } = book;

    return (
        <div>
            <div className="card border-t lg:grid grid-cols-4 mt-10 lg:card-side bg-base-100 shadow-xl">
                <div className="flex col-span-1 justify-center items-center rounded-2xl m-8 py-16 bg-gray-100">
                    <img className="rounded-xl h-40" src={image} alt="Book" />
                </div>
                <div className="card-body col-span-3">
                    <h1 className="text-3xl font-semibold">{bookName}</h1>
                    <h3 className="text-lg mt-1 text-gray-500 font-semibold">By : {author}</h3>

                    <div className="md:flex mt-4 items-center gap-8">
                        <div className="flex text-black pb-3 md:pb-0">
                            <h3 className="font-semibold text-xl mr-8">Tag</h3>
                            <button className="bg-cyan-50 border mr-5 hover:bg-slate-300 duration-300 py-1 px-6 rounded-full font-semibold text-cyan-800">#{tags[1]}</button>
                            <button className="bg-cyan-50 border hover:bg-slate-300 duration-300 py-1 px-6 rounded-full font-semibold text-cyan-800">#{tags[0]}</button>
                        </div>
                        <h3 className="flex items-center gap-2 text-lg"> <LuCalendarCheck />Year of Publishing: {yearOfPublishing}</h3>
                    </div>

                    <div className="md:flex gap-10 text-lg border-b pb-3 mt-3 text-gray-500">
                        <h3 className="flex items-center gap-2"><RiGroupLine />Publisher : {publisher}</h3>
                        <h3 className="flex items-center mt-2 md:mt-0 gap-2"><BiBookBookmark />Page {totalPages}</h3>
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:gap-6 mt-5">
                        <button className="bg-cyan-100 text-cyan-600 px-8 py-1 rounded-full">Category : {category}</button>
                        <button className="bg-orange-100 text-orange-600 px-8 py-1 rounded-full">Rating : {rating}</button>
                        <Link to={`/bookDetails/${bookId}`}>
                            <button className="bg-green-100 w-full text-green-600 px-8 py-1 hover:bg-slate-200 hover:text-slate-600 duration-300 rounded-full">View Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

Books.propTypes = {
    book: PropTypes.object.isRequired
}

export default Books;
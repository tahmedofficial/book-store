import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";

const AllBooks = ({ book }) => {

    const { image, bookId, bookName, author, tags, category, rating } = book;

    return (
        <div>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card border-t bg-base-100 shadow-xl">
                    <div className="flex justify-center rounded-2xl m-8 py-16 bg-gray-100">
                        <img className="rounded-xl h-52" src={image} alt="Book" />
                    </div>

                    <div className="mx-8">
                        <button className="bg-cyan-50 border mr-5 hover:bg-slate-300 duration-300 py-1 px-6 rounded-full font-semibold text-cyan-800">{tags[1]}</button>
                        <button className="bg-cyan-50 border hover:bg-slate-300 duration-300 py-1 px-6 rounded-full font-semibold text-cyan-800">{tags[0]}</button>
                    </div>

                    <div className="mx-8 my-6 border-b pb-3">
                        <h2 className="text-2xl font-semibold">{bookName}</h2>
                        <p className="text-gray-600 font-semibold mt-2">By : {author}</p>
                    </div>

                    <div className="flex justify-between mx-8 mb-8">
                        <h2 className="text-lg text-gray-600 font-semibold">{category}</h2>
                        <h2 className="text-lg flex items-center gap-3 text-gray-600 font-semibold">{rating} <BsStar /></h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

AllBooks.propTypes = {
    book: PropTypes.object.isRequired
}

export default AllBooks;
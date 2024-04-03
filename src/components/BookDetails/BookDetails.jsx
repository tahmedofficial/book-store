import { useLoaderData, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBooksFromLocalStorage, getBooksFromLocalStorageForRead, saveBooksToLocalStorage, saveBooksToLocalStorageForRead } from "../../utility/localStorage";
import { useEffect } from "react";
import { useState } from "react";

const BookDetails = () => {

    const wishlistNotify = () => {
        toast.success("Book Added to Wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const readListNotify = () => {
        toast.success("Book Added to Read List", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const erroeNotify = () => {
        toast.error("You have Already Read this Book", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    const erroeWishlist = () => {
        toast.error("You have Already Added this Book", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const [wishNotify, setWishNotify] = useState(0);
    const [successNotify, setSuccessNotify] = useState(0);
    const [readBooksId, setReadBooksId] = useState([]);
    const [wishlistId, setWishlistId] = useState([]);

    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    const { image, bookName, author, tags, category, rating, totalPages, publisher, yearOfPublishing, review } = book;

    useEffect(() => {
        const readBooksId = getBooksFromLocalStorageForRead();
        const wishlistId = getBooksFromLocalStorage();
        setReadBooksId(readBooksId);
        setWishlistId(wishlistId);
    }, [])


    const handleWishlist = () => {

        const readId = readBooksId.find(id => id === idInt);
        const wishId = wishlistId.find(id => id === idInt);

        if (readId === idInt) {
            erroeNotify()
        }
        else {

            if (wishId === idInt) {
                erroeWishlist()
            }
            else {
                if (successNotify === 0 && wishNotify === 0) {
                    saveBooksToLocalStorage(idInt);
                    wishlistNotify()
                    setWishNotify(wishNotify + 1);
                }
                else {
                    erroeWishlist()
                }
            }

        }

    }

    const handleReadList = () => {

        const readId = readBooksId.find(id => id === idInt);

        if (readId === idInt) {
            erroeNotify()
        }
        else {
            if (successNotify === 0) {
                saveBooksToLocalStorageForRead(idInt);
                readListNotify()
            }
            else {
                erroeNotify()
            }
            setSuccessNotify(successNotify + 1);
        }


    }


    return (
        <div className="card border-t lg:grid grid-cols-3 mt-10 lg:card-side bg-base-100 shadow-xl">
            <div className="flex col-span-1 justify-center items-center rounded-2xl m-8 py-16 bg-gray-100">
                <img className="rounded-xl h-96" src={image} alt="Book" />
            </div>
            <div className="card-body col-span-2">
                <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">{bookName}</h3>
                <h3 className="my-2 text-lg md:text-xl font-semibold text-gray-600">By : {author}</h3>
                <h3 className="border-y py-3 text-lg md:text-xl font-semibold text-gray-600">{category}</h3>
                <h3 className="text-lg mt-3"><span className="text-xl font-bold">Review : </span>{review}</h3>
                <div className="flex text-black border-b mt-4 pb-6">
                    <h3 className="font-semibold text-xl mr-8">Tag</h3>
                    <button className="bg-cyan-50 border mr-5 hover:bg-slate-300 duration-300 py-1 px-6 rounded-full font-semibold text-cyan-800">#{tags[1]}</button>
                    <button className="bg-cyan-50 border hover:bg-slate-300 duration-300 py-1 px-6 rounded-full font-semibold text-cyan-800">#{tags[0]}</button>
                </div>

                <div className="flex gap-20">
                    <div className="text-lg flex flex-col gap-3">
                        <h3>Number of Pages:</h3>
                        <h3>Publisher:</h3>
                        <h3>Year of Publishing:</h3>
                        <h3>Rating:</h3>
                    </div>
                    <div className="font-bold text-lg flex flex-col gap-3">
                        <h3>{totalPages}</h3>
                        <h3>{publisher}</h3>
                        <h3>{yearOfPublishing}</h3>
                        <h3>{rating}</h3>
                    </div>
                </div>

                <div className="mt-8">
                    <button onClick={handleReadList} className="btn mr-6 bg-cyan-100 px-8 text-lg text-gray-600 rounded-full">Read</button>
                    <button onClick={handleWishlist} className="btn bg-cyan-500 text-white px-8 text-lg rounded-full">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
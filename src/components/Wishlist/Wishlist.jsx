import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksFromLocalStorage } from "../../utility/localStorage";
import Books from "../Books/Books";


const Wishlist = () => {

    const books = useLoaderData();

    const [wishlistBooks, setWishlistBooks] = useState([]);
    useEffect(() => {
        const storedBookId = getBooksFromLocalStorage();
        const booksWishlist = books.filter(book => storedBookId.includes(book.bookId))
        setWishlistBooks(booksWishlist);
    }, [books])

    // console.log(wishlistBooks);



    return (
        <div className="mt-10">
            {
                wishlistBooks.map(book=> <Books key={book.bookId} book={book}></Books>)
            }
        </div>
    );
};

export default Wishlist;
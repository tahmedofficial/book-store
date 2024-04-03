import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksFromLocalStorageForRead } from "../../utility/localStorage";
import Books from "../Books/Books";
import { AssetContext } from "../ListedBooks/ListedBooks";

const ReadBooks = () => {

    const sortItem = useContext(AssetContext);

    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [displayReadBooks, setDisplayReadBooks] = useState([]);


    useEffect(() => {

        if (sortItem === "default") {
            setDisplayReadBooks(readBooks)
        }
        else if (sortItem === "rating") {
            readBooks.sort((a, b) => b.rating - a.rating);
            setDisplayReadBooks(readBooks);
        }
        else if (sortItem === "page") {
            readBooks.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayReadBooks(readBooks);
        }
        else if (sortItem === "year") {
            readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayReadBooks(readBooks);
        }

    }, [readBooks, sortItem])


    useEffect(() => {
        const storedReadBookId = getBooksFromLocalStorageForRead();
        const booksRead = books.filter(book => storedReadBookId.includes(book.bookId))
        setReadBooks(booksRead);
    }, [books])

    return (
        <div>
            {
                displayReadBooks.map(book => <Books key={book.bookId} book={book}></Books>)
            }
        </div>
    );
};

export default ReadBooks;
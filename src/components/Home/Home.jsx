import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import AllBooks from "../AllBooks/AllBooks";

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="px-5">
            <Banner></Banner>
            <h1 className="text-5xl font-bold text-center mt-24 mb-10">Books</h1>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <AllBooks key={book.bookId} book={book}></AllBooks>)
                }
            </div>
        </div>
    );
};

export default Home;
import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const AssetContext = createContext("default");

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [sortItem, setSortItem] = useState("default");
    // console.log(sortItem);

    return (
        <div className="px-3">
            <div className="bg-gray-100 mx-3 mt-6 rounded-2xl">
                <h1 className="text-center py-10 font-semibold text-3xl md:text-4xl lg:text-5xl">Books</h1>
            </div>

            <div className="flex mt-10 justify-center">
                <div className="dropdown dropdown-hover">
                    <button className="btn text-white hover:bg-cyan-300 bg-cyan-400 m-1 rounded-full px-10 text-lg" tabIndex={0} role="button" >Sort By</button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
                        <li onClick={() => setSortItem("rating")}><a>Rating</a></li>
                        <li onClick={() => setSortItem("page")}><a>Number of pages</a></li>
                        <li onClick={() => setSortItem("year")}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <div className="w-72 mt-10">
                <div role="tablist" className="tabs tabs-boxed">
                    <Link onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex === 0 ? "bg-cyan-400 text-white" : ""}`}>Read Books</Link>
                    <Link to={`wishlist`} onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 ? "bg-cyan-400 text-white" : ""}`}>Wishlist Books</Link>
                </div>
            </div>
            <AssetContext.Provider value={sortItem}>
                <Outlet></Outlet>
            </AssetContext.Provider>
        </div>
    );
};

export default ListedBooks;
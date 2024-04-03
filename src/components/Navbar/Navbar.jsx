import { NavLink } from "react-router-dom";

const Navbar = () => {

    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink to="/pagesToLoad">Pages to Read</NavLink></li>
    </>
    
    return (
        <div className="navbar mt-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Bookshelf</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn mr-3 bg-slate-500 text-white text-lg rounded-2xl">Sign In</button>
                <button className="btn bg-cyan-500 text-white text-lg rounded-2xl">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
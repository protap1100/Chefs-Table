import svg from '../../assets/Vector-1.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-40">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-4xl lg:block hidden ">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a  className="text-xl">Home</a></li>
                    <li><a  className="text-xl">Recipes</a></li>
                    <li><a  className="text-xl">About</a></li>
                    <li><a  className="text-xl">Search</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3 ">
                <input className="input bg-gray-200" placeholder="Search Any Food"/>
                <a className="btn rounded-full bg-[#0BE58A]"><img src={svg} alt="" /></a>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaUser } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';



const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext);
    console.log(user);
    const img = user?.photoURL;

    const handleLogOut = () => {
        setUser(null);
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to={'/'} className="flex items-center">
                    <img src="https://i.postimg.cc/8zt9hWKF/logo.png" className="mr-3 " width={45} height={20} alt=" Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EduLab</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex items-center flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li><Link to={'/'} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"
                        >Home</Link></li>

                        <li><Link to={'/courses'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >Courses</Link></li>

                        <li><Link to={'/faq'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >FAQ</Link></li>

                        <li><Link to={'blog'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >Blog</Link></li>

                        <li>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <div className="flex items-center">

                                                <Link className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                    onClick={handleLogOut}>Log out</Link>
                                                <Link className="ml-3">
                                                    <img data-tip data-for="registerTip"
                                                        style={{ width: '30px', height: '30px' }} className="rounded-full"
                                                        src={img} />
                                                    <ReactTooltip id="registerTip" place="top" effect="solid">
                                                       {user?.displayName}
                                                    </ReactTooltip>

                                                </Link>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <Link to={'/login'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            >Login/SignUp</Link>
                                        </>

                                }
                            </>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;
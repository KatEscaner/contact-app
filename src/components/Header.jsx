import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-[#581c87]  px-2 sm:px-4 py-2.5  ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Contact Manager</h2>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><Link to='/'> Contact List</Link></li>
                    <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><Link to='/add'>Add Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
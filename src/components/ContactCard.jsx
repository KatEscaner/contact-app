import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";


const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return (
        <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src={user} alt="user"/>
                <div className="flex-1 min-w-0">
                    <Link to={`/contact/${id}`} state={props.contact}>
                        <div className="text-sm font-medium text-gray-900 truncate dark:text-white">{name}</div>
                        <div className="text-sm text-gray-500 truncate dark:text-gray-400">{email}</div>
                    </Link>
                </div>
                <div className="flex">
                    <svg className="h-4 w-4 text-red-500 m-4 cursor-pointer" onClick={() => props.clickHandler(id)} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />  <line x1="18" y1="9" x2="12" y2="15" />  <line x1="12" y1="9" x2="18" y2="15" /></svg>
                    <Link to={`/edit`} state={props.contact}>
                        <svg className="h-4 w-4 text-blue-500 m-4 mx-0"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                    </Link>
                </div>
        </div>
    )
}

export default ContactCard;
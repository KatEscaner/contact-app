import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
                <ul className="right menu">
                    <li><Link to='/'> Contact List</Link></li>
                    <li><Link to='/add'>Add Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
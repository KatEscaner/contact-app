import React from "react";
import { Link } from "react-router-dom";
import userProf from "../images/user.jpg";
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {

const location = useLocation();
const data = location.state;
console.log(data);

    return (
        <div className="main">
            <div className="ui card center">
                <div className="image">
                    <img src={userProf} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{data.name}</div>
                    <div className="description">{data.email}</div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail;
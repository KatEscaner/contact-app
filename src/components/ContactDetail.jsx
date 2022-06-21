import React from "react";
import userProf from "../images/user.jpg";
import { useLocation } from "react-router-dom";
import userAlvProf from "../images/alvarolo.png";
import userCristinukiProf from "../images/cristinuki.png";
import userJulioProf from "../images/julio.png";
import userEscanerProf from "../images/escaner.png";
import userLlatzerProf from "../images/llatzer.png";

const ContactDetail = (props) => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const customUser = (userImg) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-8 w-96">
            <img src={userImg} alt="user" className="w-full"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#991b1b]">{data.name}</div>
            <div className="text-[fff] ">{data.email}</div>
          </div>
        </div>
    );
  };
  switch (data.name) {
    case "Alvarolo":
      return customUser(userAlvProf);
      break;

    case "Cristinuki":
      return customUser(userCristinukiProf);
      break;

    case "Julio":
      return customUser(userJulioProf);
      break;

    case "Escaner":
      return customUser(userEscanerProf);
      break;

      case "Llatzer":
        return customUser(userLlatzerProf);
        break;
        
    default:
      return customUser(userProf);
      break;
  }
};

export default ContactDetail;

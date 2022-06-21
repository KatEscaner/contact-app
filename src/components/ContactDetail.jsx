import React from "react";
import userProf from "../images/guest.png";
import { useLocation } from "react-router-dom";
import userAlvProf from "../images/alvarolo.png";
import userCristinukiProf from "../images/cristinuki.png";
import userJulioProf from "../images/julio.png";
import userEscanerProf from "../images/escaner.png";
import userLlatzerProf from "../images/llatzer.png";
import userDavidProf from "../images/david.png"
import userChenProf from "../images/chen.jpg"

const ContactDetail = (props) => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const customUser = (userImg) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white  w-96 m-auto">
            <img src={userImg} alt="user" className="w-full"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#991b1b]">{data.name}</div>
            <div className="text-[fff] ">{data.email}</div>
          </div>
        </div>
    );
  };

  const nameCustomUser = [
    {
      name: "Alvarolo",
      icon: userAlvProf
    },
    {
      name: "Cristinuki",
      icon: userCristinukiProf
    },
    {
      name: "Julio",
      icon: userJulioProf
    },
    {
      name: "Escaner",
      icon: userEscanerProf
    },
    {
      name: "Llatzer",
      icon: userLlatzerProf
    },
    {
      name: "David",
      icon: userDavidProf
    },
    {
      name: "Chen",
      icon: userChenProf
    }
  ]
  
    let currentIcon = ''

    nameCustomUser.forEach((user) =>{
      if(user.name == data.name){
        currentIcon = user.icon
      }
    })
  
  if(currentIcon !== ''){
    return customUser(currentIcon)
  } else {
    return customUser(userProf)
  }
  
  
};

export default ContactDetail;

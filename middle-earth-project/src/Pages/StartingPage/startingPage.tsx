import React from "react";
import { NavLink } from "react-router-dom";
import {Journeys} from "../../types";

const sectionStyle = ` w-full min-h-full flex flex-row overflow-hidden
    bg-main-image bg-center bg-no-repeat bg-cover bg-opacity-50`;
const hobbitAreaStyle = `w-1/2 h-100 flex justify-center items-center`; 
const hobbitLogoStyle = `w-72 h-auto border rounded animate-left-animation-fade-in 
  hover:p-2 hover:border-yellow-400`;
const lotrAreaStyle = `w-1/2 h-100 flex justify-center items-center`;
const lortLogoStyle = `w-72 h-auto border rounded animate-right-animation-fade-in
  hover:p-2 hover:border-yellow-400`;

interface StartingPageProps {
  handleChoose: (value: boolean, journey: Journeys) => void;
}

export const StartingPage = ({handleChoose}: StartingPageProps) => {
  let hobbitLogo = `/images/hobbit-logo.jpg`;
  let lotrLogo = `images/lord-of-the-rings-logo.jpg`;

  const handleHobbitClick : React.MouseEventHandler<HTMLAnchorElement> = () => {
    handleChoose(true, Journeys.HOBBIT);
    sessionStorage.setItem("journey", Journeys.HOBBIT);
  };

  const handleLotrClick : React.MouseEventHandler<HTMLAnchorElement> = () => {
    handleChoose(true, Journeys.LORD_OF_THE_RINGS);
    sessionStorage.setItem("journey", Journeys.LORD_OF_THE_RINGS);
  }

  return (
    <div className={sectionStyle}>
      <div className={hobbitAreaStyle}>
        <NavLink exact to="/hobbit" onClick={handleHobbitClick}>
          <img src={hobbitLogo} alt="hobbit-logo" className={hobbitLogoStyle} />
        </NavLink>
      </div>
      <div className={lotrAreaStyle}>
        <NavLink exact to="/lord-of-the-rings" onClick={handleLotrClick}>
          <img src={lotrLogo} alt="lotr-logo" className={lortLogoStyle} />
        </NavLink>
      </div>
    </div>
  );
};

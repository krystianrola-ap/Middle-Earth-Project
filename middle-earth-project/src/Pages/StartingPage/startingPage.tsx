import React from "react";
import { NavLink } from "react-router-dom";
import {Journeys} from "../../types";

const sectionStyle = ` 
  w-full min-h-full flex flex-col justify-around items-center 
  bg-main-image bg-center bg-no-repeat bg-cover bg-opacity-50
  sm:flex-row `;
const journeysStyle = `w-fit h-fit`; 
const logoStyle = ` w-36 h-auto border rounded hover:p-2 hover:border-yellow-400 md:w-40 lg:w-60 xl:w-72 `;
const hobbitAnimation  = `animate-left-animation-fade-in`;
const lordOfTheRingsAnimation  = `animate-right-animation-fade-in`;

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
      <div className={journeysStyle}>
        <NavLink exact to="/hobbit" onClick={handleHobbitClick}>
          <img src={hobbitLogo} alt="hobbit-logo" className={`${logoStyle} ${hobbitAnimation}`} />
        </NavLink>
      </div>
      <div className={journeysStyle}>
        <NavLink exact to="/lord-of-the-rings" onClick={handleLotrClick}>
          <img src={lotrLogo} alt="lotr-logo" className={`${logoStyle} ${lordOfTheRingsAnimation}`} />
        </NavLink>
      </div>
    </div>
  );
};

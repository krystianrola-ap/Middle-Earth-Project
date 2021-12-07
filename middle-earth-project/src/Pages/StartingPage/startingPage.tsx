import React from "react";
import { NavLink } from "react-router-dom";
import {
  sectionStyle,
  hobbitAreaStyle,
  lotrAreaStyle,
  hobbitLogoStyle,
  lortLogoStyle,
} from "./styling";
import {Journeys} from "../../types";

interface StartingPageProps {
  handleChoose: (value: boolean) => void;
}

export const StartingPage = ({handleChoose}: StartingPageProps) => {
  let hobbitLogo = `/images/hobbit-logo.jpg`;
  let lotrLogo = `images/lord-of-the-rings-logo.jpg`;

  const handleHobbitClick : React.MouseEventHandler<HTMLAnchorElement> = () => {
    handleChoose(true);
    sessionStorage.setItem("journey", Journeys.HOBBIT);
  };

  const handleLotrClick : React.MouseEventHandler<HTMLAnchorElement> = () => {
    handleChoose(true);
    sessionStorage.setItem("journey", Journeys.LORD_OF_THE_RINGS);
  }

  return (
    <section className={sectionStyle}>
      <article className={hobbitAreaStyle}>
        <NavLink exact to="/hobbit" onClick={handleHobbitClick}>
          <img src={hobbitLogo} alt="hobbit-logo" className={hobbitLogoStyle} />
        </NavLink>
      </article>
      <article className={lotrAreaStyle}>
        <NavLink exact to="/lord-of-the-rings" onClick={handleLotrClick}>
          <img src={lotrLogo} alt="lotr-logo" className={lortLogoStyle} />
        </NavLink>
      </article>
    </section>
  );
};

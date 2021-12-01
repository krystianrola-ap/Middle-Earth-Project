import React from "react";
import { sectionStyle,hobbitAreaStyle, lotrAreaStyle, hobbitLogoStyle, lortLogoStyle} from "./styling";


export const StartingPage = () => {
  let hobbitLogo = `/images/hobbit-logo.jpg`;
  let lotrLogo = `images/lord-of-the-rings-logo.jpg`

  return (
    <section className={sectionStyle} >
      <article className={hobbitAreaStyle}>
        <img 
          src={hobbitLogo}
          alt="hobbit-logo" 
          className={hobbitLogoStyle} 
        />
      </article>
      <article className={lotrAreaStyle}>
        <img 
          src={lotrLogo}
          alt="lotr-logo"
          className={lortLogoStyle} 
        />
      </article>
    </section>
  );
};

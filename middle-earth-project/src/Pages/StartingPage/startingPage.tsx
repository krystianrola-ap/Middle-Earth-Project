import React from "react";

const sectionStyle: string = `
    w-screen min-h-screen 
    flex flex-row
    border-2 border-blue-700
    bg-main-image bg-center bg-no-repeat bg-cover bg-opacity-50
`;
const hobbitAreaStyle: string = `
  w-1/2 h-100
  flex justify-center items-center
  border border-yellow-600
`; 
const hobbitLogoStyle = `
  w-72 h-auto   
  border rounded
  hover:p-2 hover:border-yellow-400
`;
const lotrAreaStyle: string = `
  w-1/2 h-100
  flex justify-center items-center
  border border-red-600
`;
const lortLogoStyle = `
  w-72 h-auto 
  border rounded
  hover:p-2 hover:border-yellow-400
`;

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

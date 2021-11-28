import React from "react";

const sectionStyle: string = `
    w-screen min-h-screen 
    border-2 border-purple-500 
    bg-main-image bg-no-repeat bg-cover 
`;
const hobbitStyling: string = ``;
const lotrStyling: string = ``;

export const StartingPage = () => {
  return (
    <section className={sectionStyle}>
      <article className={hobbitStyling}></article>
      <article className={lotrStyling}></article>
    </section>
  );
};

import React from "react";
import { MovieItem } from "../../Components/movies/movieItem";
import { Link } from "react-router-dom";

const movieItemsContainer = `flex flex-col justify-around items-center w-full h-body sm:flex-row`;

const fellowshipStyle = `animate-right-animation-fade-in md:animate-left-animation-fade-in`;
const twoTowerStyle = `animate-left-animation-fade-in md:animate-top-animation-fade-in`;
const returnOfTheKingStyle = `animate-right-animation-fade-in`;

export const TheOneRingHome = () => {

  let fellowship_of_the_ring :string = "/images/The_Fellowship_of_the_Ring.png" ;
  let two_towers :string = "/images/The_Two_Towers.png";
  let return_of_the_king :string = "/images/The_Return_of_the_King.png";

  return (
    <section className={movieItemsContainer}>
      <Link to="/lord-of-the-rings/fellowship_of_the_ring">
        <MovieItem movieImageUrl={fellowship_of_the_ring} animationStyle={fellowshipStyle}/>
      </Link>
      <Link to="/lord-of-the-rings/two_towers">
        <MovieItem movieImageUrl={two_towers} animationStyle={twoTowerStyle}/>
      </Link>
      <Link to="/lord-of-the-rings/return_of_the_king">
        <MovieItem movieImageUrl={return_of_the_king} animationStyle={returnOfTheKingStyle}/>
      </Link>
    </section>
  );
};

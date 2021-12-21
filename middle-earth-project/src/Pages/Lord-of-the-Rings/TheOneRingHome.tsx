import React, { useState, useEffect } from "react";
import axios from "axios";
import { IMovieInfo } from "../../types";
import { MovieItem } from "../../Components/movies/movieItem";
import { movieItemsContainer, fellowshipStyle, twoTowerStyle, returnOfTheKingStyle } from "./styling";
import { Link } from "react-router-dom";

export const TheOneRingHome = () => {
  let fellowship_of_the_ring :string = "/images/The_Fellowship_of_the_Ring.png" ;
  let two_towers :string = "/images/The_Two_Towers.png";
  let return_of_the_king :string = "/images/The_Return_of_the_King.png";

  const [data, setData] = useState<IMovieInfo[]>([]);

  useEffect(() => {
    console.log(`test`);
    axios
      .get("https://the-one-api.dev/v2/movie", {
        headers: {
          Authorization: "Bearer hr6pinL70ddvneBFKRJu",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data.docs as IMovieInfo[]);
      })
      .catch((error) => console.log(error));

  }, []);

  return (
    <section className={movieItemsContainer}>
      <Link to="/lord-of-the-rings/fellowship_of_the_ring">
        <MovieItem movieImageUrl={fellowship_of_the_ring} style={fellowshipStyle}/>
      </Link>
      <Link to="/lord-of-the-rings/two_towers">
        <MovieItem movieImageUrl={two_towers} style={twoTowerStyle}/>
      </Link>
      <Link to="/lord-of-the-rings/return_of_the_king">
        <MovieItem movieImageUrl={return_of_the_king} style={returnOfTheKingStyle}/>
      </Link>
    </section>
  );
};

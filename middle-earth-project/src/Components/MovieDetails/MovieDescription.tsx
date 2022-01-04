import React from "react";
import { IMovie } from "../../types";

interface MovieDescriptionProps {
  chosenMovie: IMovie;
}

export const MovieDescription = ({ chosenMovie }: MovieDescriptionProps) => {
  const movieSummaryStyle = ` w-4/5 mx-auto text-lg `;

  return (
    <div className={movieSummaryStyle}>
      {chosenMovie?.summary.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

import React, { useContext } from "react";
import { FontContext } from "../../Context/FontContext";
import { IMovie } from "../../types";


const movieSummaryStyle :string = ` 
  w-full p-2 mx-auto text-xl text-justify 
  
`;

interface MovieDescriptionProps {
  chosenMovie: IMovie;
}

export const MovieDescription = ({ chosenMovie }: MovieDescriptionProps) => {
  const {font}  = useContext(FontContext);

  return (
    <div className={`${movieSummaryStyle}`}>
      {chosenMovie?.summary.map((item) => (
        <p className={`${font.font}`}>{item}</p>
      ))}
    </div>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSummaries from "../../Assets/MovieSummaries.json";
import { IMovie, IMovieInfoAPI, IJsonMovies } from "../../types";
import axios from "axios";
import { MovieDescription } from "../../Components/MovieDetails/MovieDescription";
import { MovieInformation } from "../../Components/MovieDetails/MovieInformation";
import { FontContext } from "../../Context/FontContext";

const detailPageContainer :string = `
  box-border w-full overflow-hidden  p-2 mx-auto text-white font-patrick 
  md:w-body md:min-h-body md:overflow-hidden`;
const title :string = `w-full p-4 text-center text-header-fontsize `;
const movieInfoContainer :string = `flex flex-col items-center md:flex-row `;
const moviePoster :string = ` w-4/6 mx-0  border rounded border-yellow-400 p-1
  md:w-60 sm:mx-10 lg:mx-20 xl:mx-40 `;

interface ParamType {
  id: string;
}

export const MovieDetailPage = () => {
  let { id } = useParams<ParamType>();
  const {font} = useContext(FontContext)
  const [data, setData] = useState<IMovieInfoAPI>({
    _id: "not provided",
    name: "not provided",
    runtimeInMinutes: 0,
    budgetInMillions: 0,
    boxOfficeRevenueInMillions: 0,
    academyAwardNominations: 0,
    academyAwardWins: 0,
    rottenTomatoesScore: 0,
  });
  const [chosenMovie, setChosenMovie] = useState<IMovie>();

  useEffect(() => {
    let movie = MovieSummaries.movie.find((item) => item.movieURL === id) as IMovie;

    setChosenMovie(movie);

    if (movie !== null || movie !== undefined) {
      axios
        .get<IJsonMovies>(`https://the-one-api.dev/v2/movie/${movie.id}`, {
          headers: {
            Authorization: "Bearer hr6pinL70ddvneBFKRJu",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setData(response.data.docs[0] as IMovieInfoAPI);
          console.log(response.data.docs[0]);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className={detailPageContainer}>
      <h6 className={`${title} ${font.font}`}>{data.name}</h6>
      <div className={movieInfoContainer}>
        <img
          src={`/images/posters/${chosenMovie?.imageURL}`}
          className={moviePoster}
          alt={chosenMovie?.imageURL.split(".")[0]}
        />
        <MovieInformation chosenMovie={chosenMovie!} api_data={data}/>
      </div>
      <MovieDescription chosenMovie={chosenMovie!}/>
    </div>
  );
};

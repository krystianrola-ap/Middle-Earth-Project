import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSummaries from "../../Assets/MovieSummaries.json";
import {
  IMovie,
  IMovieInfoAPI,
  IJsonMovies,
} from "../../types";
import axios from "axios";
import {
  detailPageContainer,
  title,
  movieInfoContainer,
  moviePoster,
} from "./styling";
import { MovieDescription } from "../../Components/MovieDetails/MovieDescription";
import { MovieInformation } from "../../Components/MovieDetails/MovieInformation";

interface ParamTypes {
  id: string;
}

export const MovieDetailPage = () => {
  let { id } = useParams<ParamTypes>();
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
    let movie = MovieSummaries.movie.find(
      (item) => item.movieURL === id
    ) as IMovie;

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
      <h6 className={title}>{data.name}</h6>
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSummaries from "../../Assets/MovieSummaries.json";
import {
  IMovie,
  IMovieSummaries,
  IMovieInfoAPI,
  IJsonMovies,
} from "../../types";
import axios from "axios";
import {
  detailPageContainer,
  title,
  movieInfoContainer,
  moviePoster,
  infoStyle,
  infoItem,
  icon,
  infoTitle,
  info,
  movieSummaryStyle,
} from "./styling";
import {
  FiBox,
  FiDollarSign,
  FiAward,
  FiStar,
  FiClock,
  FiBook,
  FiUploadCloud,
  FiGrid,
} from "react-icons/fi";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

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
        <div className={infoStyle}>
          <div className={infoItem}>
            <div className={icon}><FiGrid /></div>
            <p className={infoTitle}> Genre: </p>
            <p className={info}>{chosenMovie?.genre}</p>{" "}
          </div>
          <div className={infoItem}>
            <div className={icon}><FiUploadCloud /></div>
            <p className={infoTitle}> Release Year: </p> 
            <p className={info}>{chosenMovie?.releaseYear}</p>{" "}
          </div>
          <div className={infoItem}>
            <div className={icon}><FiClock /></div>
            <p className={infoTitle}> Runtime: </p>
            <p className={info}>{data!.runtimeInMinutes} min.</p>
          </div>
          <div className={infoItem}>
            <div className={icon}><FiDollarSign /></div>
            <p className={infoTitle}> Budget: </p>
            <p className={info}>{data!.budgetInMillions} mln.</p>
          </div>
          <div className={infoItem}>
            <div className={icon}><FiBox /></div>
            <p className={infoTitle}> Box Office Revenue: </p>
            <p className={info}>{data!.boxOfficeRevenueInMillions} mln.</p>
          </div>
          <div className={infoItem}>
            <div className={icon}><FiStar /></div>
            <p className={infoTitle}> Award Nominations: </p>
            <p className={info}>{data!.academyAwardNominations}</p>
          </div>
          <div className={infoItem}>
            <div className={icon}><FiAward  /></div>
            <p className={infoTitle}> Academy Award Wins: </p>
            <p className={info}>{data!.academyAwardWins}</p>
          </div>
          <div className={infoItem}>
            <div className={icon}><FiBook /></div>
            <p className={infoTitle}> Novel by: </p>
            <p className={info}>{chosenMovie?.author}</p>
          </div>
        </div>
      </div>
      <div className={movieSummaryStyle}>
        {chosenMovie?.summary.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

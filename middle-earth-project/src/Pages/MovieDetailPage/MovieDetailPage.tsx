import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MovieSummaries from "../../Assets/MovieSummaries.json";
import {IMovie, IMovieSummaries, IMovieInfoAPI, IJsonMovies} from "../../types";
import axios from 'axios';
import {detailPageContainer} from "./styling";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

interface ParamTypes {
    id: string
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
        rottenTomatoesScore: 0
    });
    const [chosenMovie, setChosenMovie] = useState<IMovie>();

  useEffect(() => {
    
    let movie = MovieSummaries.movie.find(item => item.movieURL === id) as IMovie;

    setChosenMovie(movie);

    if(movie !== null || movie !== undefined){
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
            <h6>{data.name}</h6>
            <div>
                {/* <img src="" alt="" /> */}
                <div>
                    <p>Genre: <span>{chosenMovie?.genre}</span> </p>
                    <p>Release Year: <span>{}</span> </p>
                    <p>Runtime: <span>{data!.runtimeInMinutes} min.</span> </p>
                    <p>Budget: <span>{data!.budgetInMillions} mln.</span> </p>
                    <p>Box Office Revenue: <span>{data!.boxOfficeRevenueInMillions} mln.</span> </p>
                    <p>Academy Award Nominations: <span>{data!.academyAwardNominations}</span> </p>
                    <p>Academy Award Wins: <span>{data!.academyAwardWins}</span> </p>
                    <p>Novel by: <span>{chosenMovie?.author}</span> </p>
                </div>
            </div>
            <div>
                {/* summarry */}
            </div>
        </div>
    )
}

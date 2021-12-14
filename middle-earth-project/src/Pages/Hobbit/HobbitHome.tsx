import React from "react";
import { Link } from "react-router-dom";
import {movieItemsContainer} from "./styling";
import { MovieItem } from "../../Components/movies/movieItem";

export const TheHobbitHome = () => {
    let an_unexpected_journey : string = "/images/An_Unexpected_Journey.png";
    let desolation_of_smaug : string = "/images/The_Desolation_of_Smaug.png";
    let battle_of_the_five_armies : string = "/images/The_Battle_of_the_Five_Armies.png";

    return(
        <section className={movieItemsContainer}>
            <Link to="">
                <MovieItem movieImageUrl={an_unexpected_journey}/>
            </Link>
            <Link to="">
                <MovieItem movieImageUrl={desolation_of_smaug}/>
            </Link>
            <Link to="">
                <MovieItem movieImageUrl={battle_of_the_five_armies}/>
            </Link>
        </section>
    )
}
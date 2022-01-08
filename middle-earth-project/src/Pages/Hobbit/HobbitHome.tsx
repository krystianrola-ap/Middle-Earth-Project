import React from "react";
import { Link } from "react-router-dom";
import { MovieItem } from "../../Components/movies/movieItem";

const movieItemsContainer = `flex flex-col justify-around items-center w-full h-body sm:flex-row `;

const unexpectedJourneyStyle = `animate-right-animation-fade-in md:animate-left-animation-fade-in`;
const desolationOfSmaugStyle = `animate-left-animation-fade-in md:animate-top-animation-fade-in`;
const fiveArmiesStyle = `animate-right-animation-fade-in`;

export const TheHobbitHome = () => {
    let an_unexpected_journey : string = "/images/An_Unexpected_Journey.png";
    let desolation_of_smaug : string = "/images/The_Desolation_of_Smaug.png";
    let battle_of_the_five_armies : string = "/images/The_Battle_of_the_Five_Armies.png";

    return(
        <section className={movieItemsContainer}>
            <Link to="/hobbit/an_unexpected_journey">
                <MovieItem movieImageUrl={an_unexpected_journey} animationStyle={unexpectedJourneyStyle}/>
            </Link>
            <Link to="/hobbit/the_desolation_of_smaug">
                <MovieItem movieImageUrl={desolation_of_smaug} animationStyle={desolationOfSmaugStyle}/>
            </Link>
            <Link to="/hobbit/the_battle_of_the_five_armies">
                <MovieItem movieImageUrl={battle_of_the_five_armies} animationStyle={fiveArmiesStyle}/>
            </Link>
        </section>
    )
}
import React from "react";
import {imageStyling } from "./styling";

interface MovieItemProps { 
    movieImageUrl:string
}

export const MovieItem = ({movieImageUrl} : MovieItemProps) => {
    return(
        <article>
            <img src={movieImageUrl} alt="movie poster" className={imageStyling}/>
        </article>
    );
}

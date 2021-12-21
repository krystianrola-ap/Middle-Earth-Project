import React from "react";
import {imageStyling } from "./styling";

interface MovieItemProps { 
    movieImageUrl:string;
    style? : string
}

export const MovieItem = ({movieImageUrl, style} : MovieItemProps) => {
    return(
        <div className={style} >
            <img src={movieImageUrl} alt="movie poster" className={imageStyling}/>
        </div>
    );
}

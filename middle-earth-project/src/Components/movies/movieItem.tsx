import React from "react";

const imageStyling = `w-32 h-auto border rounded hover:p-2 hover:border-yellow-400 sm:w-40 md:w-52 lg:w-64`;

interface MovieItemProps { 
    movieImageUrl:string;
    animationStyle : string
}

export const MovieItem = ({movieImageUrl, animationStyle: animationStyle} : MovieItemProps) => {
    return(
        <div className={animationStyle} >
            <img src={movieImageUrl} alt="movie poster" className={imageStyling}/>
        </div>
    );
}

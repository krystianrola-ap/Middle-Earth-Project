import React from "react";
import { Link, Redirect } from "react-router-dom";
import { ICharacter } from "../../types";

interface CharacterProps{
    character : ICharacter;
}

export const MainCharacter = ({ character }:CharacterProps) => {

    let container = `w-80 h-60 m-2 flex flex-col backdrop-filter backdrop-blur-sm bg-transparent-color border border-white-500 rounded`;
    let titleContainer = `w-full h-fit p-1 `;
    let title = `p-1 text-center text-lg font-semibold font-aniron text-white-`;
    let characterContainer = ``;
    let a = `flex flex-row justify-between items-center border-b border-menu-item-color`
    let characterInfoStyle = `max-w-1/2 p-1 text-sm text-right`;
    let linkMoreInfo = `w-full text-center text-xs font-semibold`

    return(
        <div className={container}>
            <div className={titleContainer}>
                <p className={title}>{character.name}</p>
            </div>
            <div className={characterContainer}>
                <div className={a}>
                    <p className="font-semibold text-sm pl-1.5">Birth </p>
                    <p className={characterInfoStyle}>{character.birth}</p>
                </div>
                <div className={a}>
                    <p className="font-semibold text-sm pl-1.5">Death</p>
                    <p className={characterInfoStyle}>{character.death}</p>
                </div>
                <div className={a}>
                    <p className="font-semibold text-sm pl-1.5">Race</p>
                    <p className={characterInfoStyle}>{character.race}</p>
                </div>
                <div className={a}>
                    <p className="font-semibold text-sm pl-1.5">Gender</p>
                    <p className={characterInfoStyle}>{character.gender}</p>
                </div>
            </div>
            <div>
                <p className={linkMoreInfo}><a href={character.wikiUrl} target="_blank" > More info </a></p>
            </div>
        </div>
    )
}
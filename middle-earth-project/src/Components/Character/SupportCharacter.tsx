import React from "react";
import { ICharacter } from "../../types";

interface SupportCharacterProps {
    character : ICharacter;
}

export const SupportCharacter = ({character} :SupportCharacterProps) => {

    let container = `w-80 h-fit m-2 flex flex-col backdrop-filter backdrop-blur-sm bg-transparent-color border border-white-500 rounded`;
    let titleContainer = `w-fit h-fit p-1 `;
    let title = `p-1 text-center text-lg font-semibold font-aniron`;
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
                    <p className="font-semibold text-sm pl-1.5">Race</p>
                    <p className={characterInfoStyle}>{character.race}</p>
                </div>
            </div>
            <div>
                <p className={linkMoreInfo}><a href={character.wikiUrl} target="_blank" > More info </a></p>
            </div>
        </div>
    )
}
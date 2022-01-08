import React, { useContext } from "react";
import { FontContext } from "../../Context/FontContext";
import { ICharacter } from "../../types";
import {characterInfoItem, characterContainer, characterInfoStyle, commonContainerStyle, linkMoreInfo, title, titleContainer} from "./CommonStyle"

const costumContainerStyle = `h-fit w-1/2 md:w-80`;
const costumTitleStyle = `h-fit p-1 `;

interface SupportCharacterProps {
    character : ICharacter;
}

export const SupportCharacter = ({character} :SupportCharacterProps) => {
    const {font}  = useContext(FontContext);

    return(
        <div className={`${commonContainerStyle} ${costumContainerStyle}`}>
            <div className={titleContainer}>
                <p className={title}>{character.name}</p>
            </div>
            <div className={characterContainer}>
                <div className={characterInfoItem}>
                    <p className="font-semibold text-sm pl-1.5">Race</p>
                    <p className={characterInfoStyle}>{character.race}</p>
                </div>
            </div>
            <div>
                <p className={linkMoreInfo} onClick={()=>{console.log(character._id)}}><a href={character.wikiUrl} target="_blank" > More info </a></p>
            </div>
        </div>
    )
}
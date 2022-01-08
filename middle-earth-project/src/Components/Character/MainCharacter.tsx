import React, { useContext } from "react";
import { FontContext } from "../../Context/FontContext";
import { ICharacter } from "../../types";
import { characterInfoItem, characterContainer, characterInfoStyle, commonContainerStyle, linkMoreInfo, title, titleContainer } from "./CommonStyle";

const costumContainerStyle = `w-80 h-60 `;

const costumTitleStyle = `h-fit`;

interface CharacterProps{
    character : ICharacter;
}

export const MainCharacter = ({ character }:CharacterProps) => {
    const {font}  = useContext(FontContext);

    return(
        <div className={`${commonContainerStyle} ${costumContainerStyle}`}>
            <div className={titleContainer}>
                <p className={`${title} ${font.font}`}>{character.name}</p>
            </div>
            <div className={characterContainer}>
                <div className={characterInfoItem}>
                    <p className="font-semibold text-sm pl-1.5">Birth </p>
                    <p className={`${characterInfoStyle} ${font.font}`}>{character.birth}</p>
                </div>
                <div className={characterInfoItem}>
                    <p className="font-semibold text-sm pl-1.5">Death</p>
                    <p className={`${characterInfoStyle} ${font.font}`}>{character.death}</p>
                </div>
                <div className={characterInfoItem}>
                    <p className="font-semibold text-sm pl-1.5">Race</p>
                    <p className={`${characterInfoStyle} ${font.font}`}>{character.race}</p>
                </div>
                <div className={characterInfoItem}>
                    <p className="font-semibold text-sm pl-1.5">Gender</p>
                    <p className={`${characterInfoStyle} ${font.font}`}>{character.gender}</p>
                </div>
            </div>
            <div>
                <p className={linkMoreInfo}><a href={character.wikiUrl} target="_blank" > More info </a></p>
            </div>
        </div>
    )
}
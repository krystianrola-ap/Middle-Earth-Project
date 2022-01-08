import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MainCharacter } from "../../Components/Character/MainCharacter";
import { SupportCharacter } from "../../Components/Character/SupportCharacter";
import { FontContext } from "../../Context/FontContext";
import { ICharacter, IDocs } from "../../types";

export const Characters = () => {
  const { font } = useContext(FontContext);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [mainCharacters, setMainCharacters] = useState<ICharacter[]>([]);
  const [supportCharacters, setSupportCharacters] = useState<ICharacter[]>();
  const [characterChose, setCharacterChose] = useState<boolean>(true);

  const main_characters: string[] = [
    "5cd99d4bde30eff6ebccfbe6", //aragorn
    "5cd99d4bde30eff6ebccfc15", //frodo
    "5cd99d4bde30eff6ebccfd0d", //sam
    "5cd99d4bde30eff6ebccfd81", //legolas
    "5cd99d4bde30eff6ebccfd23", // gimli
    "5cd99d4bde30eff6ebccfea0", //gandalf
    "5cd99d4bde30eff6ebccfea4", // saruman
    "5cd99d4bde30eff6ebccfea5", // sauron
    "5cd99d4bde30eff6ebccfe9e", //gollum
    "5cd99d4bde30eff6ebccfc07", //arwen
    "5cd99d4bde30eff6ebccfe2e", // took
    "5cd99d4bde30eff6ebccfc38", //bilbo
    "5cd99d4bde30eff6ebccfd06", //galadriel
    "5cd99d4bde30eff6ebccfc57", //boromir
    "5cd99d4bde30eff6ebccfcc8", // elrond
    "5cd99d4bde30eff6ebccfc7c", // marie duck,
    "5cd99d4bde30eff6ebccfd82", // isildur
    "5cdbdecb6dc0baeae48cfa59", //eowin
  ];

  useEffect(() => {
    setLoading(false);
    axios
      .get<IDocs>("https://the-one-api.dev/v2/character/", {
        headers: {
          Authorization: "Bearer hr6pinL70ddvneBFKRJu",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const [pass, fail] = response.data.docs.reduce(
          ([pass, fail]: [ICharacter[], ICharacter[]], elem) => {
            return main_characters.includes(elem._id)
              ? [[...pass, elem], fail]
              : [pass, [...fail, elem]];
          },
          [[], []]
        );

        let support = fail.filter((item) => 
           !["5cdbe49b7ed9587226e794a0","5cdbe47d7ed9587226e7949f","5cd99d4bde30eff6ebccfe10"].includes(item._id)
        )

        setMainCharacters(pass);
        setSupportCharacters(support);
      });
    setLoading(true);
  }, []);

  let container = `flex flex-col w-full my-1 mx-auto p-1 md:w-body`;
  let charactersStyle = `flex flex-row flex-wrap justify-around items-start
    w-full m-auto h-30 overflow-y-scroll  
    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 hover:scrollbar-thumb-blue-200
    md:bg-background-image md:bg-center md:bg-no-repeat md:bg-cover
  `;
  let tabstyle = `w-full py-3 flex flex-row justify-center items-center  `;
  let titleStyle = `flex-1 py-3 font-semibold ${font.font} text-center cursor-pointer`;
  let activeStyle = `text-lg`;
  let normalStyle = `text-xs`;

  return (
    <div className={container}>
      <div className={tabstyle}>
        <h5
          className={
            characterChose
              ? `${titleStyle} ${activeStyle}`
              : `${titleStyle} ${normalStyle}`
          }
          onClick={() => {
            setCharacterChose(true);
          }}
        >
          Main Characters
        </h5>
        <div className="h-full m-2 border border-black"></div>
        <h5
          className={
            characterChose
              ? `${titleStyle} ${normalStyle}`
              : `${titleStyle} ${activeStyle}`
          }
          onClick={() => {
            setCharacterChose(false);
          }}
        >
          Supporting Characters
        </h5>
      </div>

      {loading && (
        <div className={charactersStyle}>
          {characterChose ? (
            <>
              {mainCharacters?.map((item) => {
                return <MainCharacter character={item} />;
              })}
            </>
          ) : (
            <>
              {supportCharacters?.map((item) => {
                  return <SupportCharacter character={item} />
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};


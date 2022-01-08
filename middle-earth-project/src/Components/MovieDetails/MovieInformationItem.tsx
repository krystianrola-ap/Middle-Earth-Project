import React, { useContext } from "react";
import { FontContext } from "../../Context/FontContext";

const infoItem :string = `flex flex-row items-center m-2 text-lg`;
const icon :string = ` p-3 md:hidden lg:block`;
const infoTitle :string = ` w-2/6 p-2 `;
const info :string = ` p-2 `;

interface MovieInformationItemProps {
  itemIcon: any;
  itemTitle: string;
  itemInfo: string;
}

export const MovieInformationItem = ({
  itemIcon,
  itemTitle,
  itemInfo,
}: MovieInformationItemProps) => {
  const {font}  = useContext(FontContext);

  return (
    <div className={`${infoItem} ${font.font} text-base`}>
      <div className={icon}>{itemIcon}</div>
      <p className={infoTitle}> {itemTitle} </p>
      <p className={info}>{itemInfo}</p>
    </div>
  );
};

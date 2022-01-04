import React from "react";

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
  const infoItem = `flex flex-row items-center m-2 text-lg `;
  const icon = ` p-3 `;
  const infoTitle = ` w-2/6 p-2 `;
  const info = ` p-2 `;

  return (
    <div className={infoItem}>
      <div className={icon}>{itemIcon}</div>
      <p className={infoTitle}> {itemTitle} </p>
      <p className={info}>{itemInfo}</p>
    </div>
  );
};

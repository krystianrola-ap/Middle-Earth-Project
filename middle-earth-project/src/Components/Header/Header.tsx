import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IHeaderListItem } from "../../types";
import { headerStyle, menuItemStyle, navlinkStyle, activeNavLink } from "./styling";

interface HeaderProps {
  listItems: IHeaderListItem[];
}
// Journey Through Middle Earth

export const Header = ({ listItems }: HeaderProps) => {
  return (
    <div className={headerStyle}>
      {listItems.map((menuItem) =>  
        <NavLink to={`/${menuItem.url}`} key={menuItem.title} className={navlinkStyle} activeClassName={activeNavLink}>
            <p className={menuItemStyle}> {menuItem.title} </p>
        </NavLink> 
      )}
    </div>
  );
};

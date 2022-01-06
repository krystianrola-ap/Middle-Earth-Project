import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontContext } from "../../Context/FontContext";
import { IHeaderListItem } from "../../types";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const headerStyle = ` 
  w-eighty mx-auto h-header bg-wooden top-0 
  animate-top-animation-fade-in `;
const primaryNavigation = `
  w-2/3 h-full flex flex-col fixed top-0 left-30 right-0 bottom-0 pt-nine translate-0
  backdrop-filter backdrop-blur-lg bg-transparent-color 
  sm:w-1/2
  md:w-full md:static md:pt-0 md:flex-row md:justify-center md:content-end md:bg-transparent md:animate-none md:translate-full
`;
const navlinkStyle = `
  h-20 flex flex-row justify-center items-center 
  hover:border-l hover:border-l-menu-item-color hover:shadow-left-hover-blur
  md:h-full md:border-l-0 md:hover:border-b md:hover:shadow-bottom-hover-blur
`;
const menuItemStyle = `mx-6 h-1/2 rounded-sm text-header-fontsize text-black`;
const activeNavLink = `border-l border-menu-item-color md:border-l-0 md:border-b`;

const title = `w-full h-full flex justify-center items-center text-header-title font-aniron font-semibold md:hidden`
const btnMenu = `w-fit h-fit outline-0 border-0 absolute top-4 right-4 z-50 md:hidden sm:top-5 `;
const btnIcon = `w-8 h-8`;

interface HeaderProps {
  listItems: IHeaderListItem[];
}

export const Header = ({ listItems }: HeaderProps) => {
  const { font } = useContext(FontContext);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = () => {
    setOpenMenu(false);
  };

  return (
    <div className={headerStyle}>
      {openMenu 
      ? 
        <button className={btnMenu} onClick={handleCloseMenu}>
          <AiOutlineClose className={btnIcon} />
        </button>
      : 
        <button className={btnMenu} onClick={handleOpenMenu}>
          <AiOutlineMenu className={btnIcon} />
        </button>
      }

      <p className={title}>Journey Through Middle-Earth</p>

      <div
        className={
          openMenu
            ? `${primaryNavigation} animate-close-menu`
            : `${primaryNavigation}  animate-open-menu`
        }
      >
        {listItems.map((menuItem) => (
          <NavLink
            to={`/${menuItem.url}`}
            key={menuItem.title}
            className={navlinkStyle}
            activeClassName={activeNavLink}
            onClick={handleCloseMenu}
          >
            <p className={`${menuItemStyle} font-${font.font}`}>
              {menuItem.title}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

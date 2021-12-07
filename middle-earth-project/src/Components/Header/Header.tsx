import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
Box, 
AppBar,
Toolbar,
Drawer,
List,
Typography,
ListItem,
ListItemText,
IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IHeaderListItem } from "../../types";

interface HeaderProps { 
    listItems: IHeaderListItem[]
}

export const Header = ({listItems}: HeaderProps) => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const handleOpenDrawer: React.MouseEventHandler<HTMLButtonElement> = () => {
        setOpenDrawer(true);
    };

    const handleCloseDrawer: React.MouseEventHandler<HTMLButtonElement> = () => {
        setOpenDrawer(false);
    };

    return(
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        aria-label="drawer menu"
                        onClick={handleOpenDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap >
                        {" Journey Through Middle Earth "}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor={"left"}
                open={openDrawer}
                onClose={handleCloseDrawer} 
            >
                <List>
                    {
                    listItems.map((listItem :IHeaderListItem)=> (
                        <NavLink to={`/${listItem.url}`} >
                            <ListItem button key={listItem.title}>
                                <ListItemText primary={listItem.title} />
                            </ListItem>
                        </NavLink>
                    ))
                    }
                </List>
            </Drawer>
        </Box>
    )
};

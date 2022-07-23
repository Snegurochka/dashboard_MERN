import { Fragment } from "react";
import { StyledBox, StyledLink } from "./Sidebar.styles";
import { AppRoutes } from "../../../routes";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

const MenuItems = [
  {
    title: "MAIN",
    childrens: [
      {
        title: "Dashboard",
        path: AppRoutes.HOME,
        icon: DashboardIcon,
      },
    ],
  },
  {
    title: "LISTS",
    childrens: [
      {
        title: "Clients",
        path: AppRoutes.CLIENTS,
        icon: PersonOutlineIcon,
      },
      {
        title: "Projects",
        path: AppRoutes.PROJECTS,
        icon: StoreIcon,
      },
    ],
  },
  {
    title: "USER",
    childrens: [
      {
        title: "Profile",
        path: AppRoutes.HOME,
        icon: AccountCircleOutlinedIcon,
      },
      {
        title: "Logout",
        path: AppRoutes.HOME,
        icon: ExitToAppIcon,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <StyledBox
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <StyledLink to={AppRoutes.HOME}>MERN Dashboard</StyledLink>
      <hr />
      <List component="nav" aria-labelledby="nested-list-subheader">
        {MenuItems.map((item) => (
          <Fragment key={item.title}>
            <ListSubheader component="div" id="nested-list-subheader">
              {item.title}
            </ListSubheader>
            {item.childrens.map((subItem) => (
              <StyledLink key={subItem.title} to={subItem.path}>
                <ListItemButton>
                  <ListItemIcon>
                    <subItem.icon />
                  </ListItemIcon>
                  <ListItemText primary={subItem.title} />
                </ListItemButton>
              </StyledLink>
            ))}
          </Fragment>
        ))}
      </List>
    </StyledBox>
  );
};

export default Sidebar;

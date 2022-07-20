import { Link } from "react-router-dom";

import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { StyledBox, StyledLink } from "./Sidebar.styles";


const Sidebar = () => {
  return (
    <StyledBox
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <div className="top">
        <StyledLink to="/">Dashboard</StyledLink>
      </div>
      <hr />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            MAIN
          </ListSubheader>
        }
      >
        <StyledLink to="/">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </StyledLink>
        <ListSubheader component="div" id="nested-list-subheader">
          LISTS
        </ListSubheader>
        <StyledLink to="/clients">
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItemButton>
        </StyledLink>
        <StyledLink to="/projects">
          <ListItemButton>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </StyledLink>
        <ListSubheader component="div" id="nested-list-subheader">
          USER
        </ListSubheader>
        <StyledLink to="/clients">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </StyledLink>
        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </StyledBox>
  );
};

export default Sidebar;

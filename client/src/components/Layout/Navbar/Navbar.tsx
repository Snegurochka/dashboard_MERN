import { StyledBox, StyledToolbar } from "./Navbar.styles";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { AppBar, Avatar, Badge } from "@mui/material";
import AvatarImg from "./../../../assets/avatar.png";

// Components
import Search from "../../Search/Search";
import { BadgeOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Search />
        <StyledBox>
          <Badge>
            <LanguageOutlinedIcon />
            English
          </Badge>
          <BadgeOutlined>
            <DarkModeOutlinedIcon />
          </BadgeOutlined>
          <Badge>
            <FullscreenExitOutlinedIcon />
          </Badge>
          <Badge color="secondary" badgeContent={1}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
          <Badge color="secondary" badgeContent={2}>
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
          <Badge>
            <ListOutlinedIcon />
          </Badge>
          <Avatar src={AvatarImg} alt="User avatar" sx={{ width: 30, height: 30 }} >
          </Avatar>
        </StyledBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

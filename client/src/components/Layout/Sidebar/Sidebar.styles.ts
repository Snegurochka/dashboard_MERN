import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
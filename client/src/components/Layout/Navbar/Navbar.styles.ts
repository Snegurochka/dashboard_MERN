import { Box, Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledToolbar = styled(Toolbar)`
  height: 50px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  font-size: 14px;
  color: #555;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

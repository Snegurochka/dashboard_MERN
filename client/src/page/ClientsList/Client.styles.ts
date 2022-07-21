import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  height: 70%;
  padding: 24px;
`;

export const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: green;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid green;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    height: 26px;
  }
`;

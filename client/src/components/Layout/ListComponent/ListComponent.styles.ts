import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  height: 70%;
  padding: 24px;

  .list_status {
    padding: 5px;
    background-color: rgba(255, 217, 0, 0.05);
    color: goldenrod;
    border-radius: 5px;

    &.completed {
      background-color: rgba(0, 128, 0, 0.05);
      color: green;
    }
  }

  .cell_action {
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      text-decoration: none;
    }

    .viewButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: darkblue;
      border: 1px dotted rgba(0, 0, 139, 0.596);
      cursor: pointer;
    }

    .deleteButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: crimson;
      border: 1px dotted rgba(220, 20, 60, 0.6);
      cursor: pointer;
    }
  }
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

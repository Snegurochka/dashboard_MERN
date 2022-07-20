import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";
import { StyledCardHeader } from "./Widget.styles";

type PropsType = {
  title: string;
};

const Widget: FC<PropsType> = ({ title }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <StyledCardHeader title={title} subheader="+23%" />
      <CardContent>1244</CardContent>
      <CardActions disableSpacing>
        <Link to="/">See all</Link>
      </CardActions>
    </Card>
  );
};

export default Widget;

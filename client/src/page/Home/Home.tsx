import { Grid } from "@mui/material";
import Widget from "../../components/Widget/Widget";

const widjets_data = [
  {
    title: "User",
    content: "123",
    diff: "+23%",
    icon: "PersonOutlinedIcon",
  },
  {
    title: "User",
    content: "123",
    diff: "+23%",
    icon: "PersonOutlinedIcon",
  },
  {
    title: "User",
    content: "123",
    diff: "+23%",
    icon: "PersonOutlinedIcon",
  },
];

const Home = () => {
  return (
    <Grid container p={2}>
      {widjets_data.map((item) => (
        <Grid item xs={4}>
          <Widget title={item.title} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;

import { FC } from "react";
import { Grid } from "@mui/material";

// Components
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10}>
        <Navbar />
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Grid } from "@mui/material";

// Components
import Navbar from "./components/Layout/Navbar/Navbar";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import ProjectsList from "./page/ProjectsList/ProjectsList";


function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Sidebar />
        <Grid item xs={12} md={10}>
          <Navbar />

          <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="projects">
              <Route index element={<ProjectsList />} />
            </Route>
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;

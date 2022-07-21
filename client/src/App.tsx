import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Grid } from "@mui/material";

// Components
import Navbar from "./components/Layout/Navbar/Navbar";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import ProjectsList from "./page/ProjectsList/ProjectsList";
import ClientsList from "./page/ClientsList/ClientsList";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Grid container>
          <Sidebar />
          <Grid item xs={12} md={10}>
            <Navbar />

            <Routes>
              <Route path="/" />
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="clients">
                <Route index element={<ClientsList />} />
              </Route>
              <Route path="projects">
                <Route index element={<ProjectsList />} />
              </Route>
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

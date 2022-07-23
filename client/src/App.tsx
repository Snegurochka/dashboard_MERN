import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo";
import { AppRoutes } from "./routes";

// Components
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import ProjectsList from "./page/ProjectsList/ProjectsList";
import ClientsList from "./page/ClientsList/ClientsList";
import ClientAdd from "./page/ClientAdd/ClientAdd";
import ProjectAdd from "./page/ProjectAdd/ProjectAdd";
import ProjectDetails from "./page/ProjectDetails/ProjectDetails";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={AppRoutes.HOME} />
            <Route index element={<Home />} />
            <Route path={AppRoutes.LPGIN} element={<Login />} />
            <Route path={AppRoutes.CLIENTS}>
              <Route index element={<ClientsList />} />
              <Route path={AppRoutes.ADD} element={<ClientAdd />} />
            </Route>
            <Route path={AppRoutes.PROJECTS}>
              <Route index element={<ProjectsList />} />
              <Route path=":id" element={<ProjectDetails />} />
              <Route path={AppRoutes.ADD} element={<ProjectAdd />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

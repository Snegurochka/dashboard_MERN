import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Layout/Navbar/Navbar";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Home from "./page/Home/Home";
import List from "./page/List/List";
import Login from "./page/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="project">
              <Route index element={<List />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

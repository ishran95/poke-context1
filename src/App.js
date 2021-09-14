import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
export const UserContext = React.createContext({ isLogged: false });
export default function App() {

  const [isLogged, setIsLogged] = useState(false);
  const setAuth = () => {
    setIsLogged(!isLogged);
  };
  return (
    <UserContext.Provider value={{ isLogged, setAuth }}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

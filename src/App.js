import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Home.jsx";
import Login from './components/Login.jsx';
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
export default function App() {
  return (
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
  )
}

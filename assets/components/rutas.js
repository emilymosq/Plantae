import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./navbar";

const Rutas = () => {
    return (
        <div>
        <Router>
        <Navbar />
        <Switch>
            <Route exact path="/registration" component={templates/user/index.html.twig}/> 
        </Switch>
        </Router>
        </div>
    )
}
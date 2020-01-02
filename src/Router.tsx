import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./views/Home";

const Routes = () => (
  <Router>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about">
      <Home />
    </Route>
  </Router>
);

export default Routes;

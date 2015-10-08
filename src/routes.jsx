import React from "react";
import { Router, Route } from "react-router";
import HashHistory from "react-router/lib/HashHistory";

import Main from "./components/main"


var Routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="/topics/:id" component={Topic}/>
    </Route>
  </Router>
)

export default Routes;
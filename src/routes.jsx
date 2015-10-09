import React from "react";
import { Router, Route } from "react-router";
import HashHistory from "react-router/lib/HashHistory";

import Main from "./components/main"
import Topic from "./components/topic"
import ImageDetail from "./components/image-detail"


var Routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="/topics/:id" component={Topic}/>
      <Route path="/images/:id" component={ImageDetail}/>
    </Route>
  </Router>
)

export default Routes;
import React from "react";
import { Router, Route } from "react-router";
// import HashHistory from "react-router/lib/History";

import Main from "./components/main"
import Topic from "./components/topic"
import ImageDetail from "./components/image-detail"
import Bootstrap from "./components/bootstrap";


var Routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/topics/:id" component={Topic}/>
      <Route path="/images/:id" component={ImageDetail}/>
      <Route path="/bootstrap" component={Bootstrap}></Route>
    </Route>

  </Router>
)

export default Routes;
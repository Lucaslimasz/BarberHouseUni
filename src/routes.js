import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Manager from "./pages/Manager";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Manager" component={Manager} />
        <Route path="*" component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}

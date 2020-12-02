import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Manager from "./pages/Manager";
import Confirmed from "./pages/Confirmed";
import Accepted from "./pages/Accepted";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Manager" component={Manager} />
        <Route exact path="/Confirmed" component={Confirmed} />
        <Route exact path="/Accepted" component={Accepted} />
        <Route path="*" component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}

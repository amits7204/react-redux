import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "../component/DashBoard";
import Login from "../component/Login";

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={DashBoard} />
        </Switch>
      </>
    );
  }
}

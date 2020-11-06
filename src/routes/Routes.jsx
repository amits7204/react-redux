import React from "react";
import { Route, Switch } from "react-router-dom";
import LinkedInHome from "../component/LinkedInHome";
import SignUpComponent from "../component/SignUpComponent";
import LoginComponent from "../component/LoginComponent";
import ProfileNavbar from "../component/ProfileNav";

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={LinkedInHome} />
          <Route path="/signin" exact component={LoginComponent} />
          <Route path="/register" exact component={SignUpComponent} />
          <Route path="/profile" exact component={ProfileNavbar} />
        </Switch>
      </>
    );
  }
}

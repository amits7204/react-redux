import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashBoard from "../component/DashBoard";
import Login from "../component/Login";
import { connect } from "react-redux";
class Router extends React.Component {
  render() {
    const { isError } = this.props;
    console.log("ISAUTH: ", isError);
    return (
      <>
        <switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={DashBoard} />
        </switch>
      </>
    );
  }
}
const mapToStateProps = (state) => ({
  token: state.app.token,
  isError: state.app.isAuth,
});

export default connect(mapToStateProps)(Router);

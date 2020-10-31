import React from "react";
import { Route } from "react-router-dom";
import DashBoard from "../component/DashBoard";
import Login from "../component/Login";
import { connect } from "react-redux";
import EDITCOMPONENT from "../component/EditComponent";
class Router extends React.Component {
  render() {
    const { isError } = this.props;
    console.log("ISAUTH: ", isError);
    return (
      <>
        <switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route
            path="/dashboard/edit/:id"
            exact
            render={(props) => <EDITCOMPONENT {...props} />}
          />
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

import React from "react";
import { connect } from "react-redux";
import { getLoginAuth } from "../redux/actionCreator";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { DashBoard } from "./DashBoard";
//ab7204
//secret
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { getAuth, isError } = this.props;
    const { username, password } = this.state;
    getAuth({ username, password });
  };
  render() {
    const { username, password } = this.state;
    const { token, isError } = this.props;
    console.log("TOKEN: ", token, " ", isError);
    if (!isError) {
      console.log("ERRRROOORRR: ", isError);
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Please enter a username"
            name="username"
            value={username}
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Please enter a password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          {/* <Link to="/dashboard"> */}
          <input type="submit" value="Login" />
          {/* </Link> */}
          {/* {isAuth && !isAuth ? <Link to="/dashboard" /> : <Link to="/login" />} */}
        </form>

        {/* <DashBoard /> */}
      </>
    );
  }
}

const mapToStateProps = (state) => ({
  token: state.app.token,
  isError: state.app.isError,
});

const mapToDispatchProps = (dispatch) => ({
  getAuth: (payload) => dispatch(getLoginAuth(payload)),
});

export default connect(mapToStateProps, mapToDispatchProps)(Login);

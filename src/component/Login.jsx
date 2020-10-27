import React from "react";
import { connect } from "react-redux";
import { getLoginAuth } from "../redux/actionCreator";
import { Link } from "react-router-dom";
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
    const { getAuth } = this.props;
    const { username, password } = this.state;
    getAuth({ username, password });
  };
  render() {
    const { username, password } = this.state;
    const { token, isAuth } = this.props;
    console.log("TOKEN: ", token, " ", isAuth);
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
          <Link to="/dashboard">
            <input type="submit" value="Login" />
          </Link>
        </form>
        {token && token.length !== 0 ? alert("login success") : ""}
        {/* <DashBoard /> */}
      </>
    );
  }
}

const mapToStateProps = (state) => ({
  token: state.app.token,
  isAuth: state.app.isAuth,
});

const mapToDispatchProps = (dispatch) => ({
  getAuth: (payload) => dispatch(getLoginAuth(payload)),
});

export default connect(mapToStateProps, mapToDispatchProps)(Login);

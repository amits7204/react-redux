import React from "react";
import { connect } from "react-redux";
import { getLoginAuth } from "../redux/actionCreator";
import { Redirect } from "react-router-dom";
import { LoginContainer, CustomInput } from "./CustomStyledComponent";
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
    const { token, isError } = this.props;
    console.log("TOKEN: ", token, " ", isError);
    if (!isError) {
      console.log("ERRRROOORRR: ", isError);
      return <Redirect to="/dashboard" />;
    }
    return (
      <LoginContainer>
        <img
          src="https://cdn.svgporn.com/logos/redux.svg"
          alt="icon"
          style={{
            margin: "auto",
            height: "30px",
            width: "30px",
            paddingBottom: "10px",
          }}
        />
        <form onSubmit={this.handleOnSubmit}>
          <CustomInput
            type="text"
            placeholder="Please enter a username"
            name="username"
            value={username}
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          <CustomInput
            type="password"
            placeholder="*******"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          {/* <Link to="/dashboard"> */}
          <CustomInput type="submit" value="Login" />
          {/* </Link> */}
          {/* {isAuth && !isAuth ? <Link to="/dashboard" /> : <Link to="/login" />} */}
        </form>

        {/* <DashBoard /> */}
      </LoginContainer>
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

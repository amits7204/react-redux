import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { SignInContainer } from "./CustomStyledComponent";
import { getLoginAuth } from "../redux/actionCreator";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isTrue: false,
    };
    const { getLogin } = this.props;
    getLogin();
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log("VALUE: ", value);
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { loginObj } = this.props;
    const { username, password } = this.state;
    console.log("LOGIN OBJ: ", loginObj.length);
    for (let i = 0; i < loginObj.length; i++) {
      if (
        loginObj[i].username === username &&
        loginObj[i].password === password
      ) {
        this.setState({
          isTrue: true,
        });
        break;
      } else {
        alert("User credential wrong");
      }
    }
  };

  render() {
    const { username, password, isTrue } = this.state;
    console.log("getLogin: ", this.props);
    if (isTrue) {
      console.log("TRUE");
      return <Redirect to="/profile" />;
    }
    return (
      <SignInContainer>
        <img
          src={`${process.env.PUBLIC_URL}/linkedInLogo.svg`}
          height="22px"
          width="100px"
          style={{ marginTop: "60px" }}
          alt="company logo"
        />
        <p style={{ fontWeight: "bold", fontSize: "32px", margin: "15px" }}>
          Welcome Back
        </p>
        <p style={{ fontSize: "16px", color: "grey", margin: "10px" }}>
          Don't miss your next opportunity. Sign in to stay updated on your
          professional world.
        </p>
        <div
          style={{
            height: "436px",
            width: "397px",
            margin: "auto",
          }}
        >
          <form
            style={{
              textAlign: "left",
              marginLeft: "30px",
              paddingTop: "30px",
              marginRight: "30px",
            }}
            onSubmit={this.handleOnSubmit}
          >
            <br />
            <input
              style={{
                marginTop: "2px",
                width: "100%",
                height: "50px",
                borderRadius: "4px",
                border: "1px solid grey",
              }}
              type="text"
              name="username"
              placeholder="Email or Phone"
              value={username}
              onChange={this.handleOnChange}
            />
            <br />
            <br />
            <input
              style={{
                marginTop: "2px",
                width: "100%",
                height: "50px",
                borderRadius: "4px",
                border: "1px solid grey",
              }}
              type="password"
              id="pwd"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleOnChange}
            />
            {/* <Link to="/profile"> */}
            <input
              style={{
                marginTop: "20px",
                width: "100%",
                height: "45px",
                borderRadius: "24px",
                border: "none",
                background: "#0B66C2",
                color: "#FFFFFF",
                fontWeight: "bolder",
                fontSize: "16px",
              }}
              type="submit"
              value="Sign in"
            />
            {/* </Link> */}
            <br />
            <br />
            <p
              style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "1px solid grey",
                lineHeight: "0.1em",
              }}
            >
              <span
                style={{ background: "#fff", padding: "0 5px", color: "grey" }}
              >
                or
              </span>
            </p>
            <br />
            <button
              style={{
                marginTop: "5px",
                width: "100%",
                height: "45px",
                borderRadius: "24px",
                border: "1px solid grey",
                background: "#FFF",
                color: "#66676B",
                fontWeight: "bolder",
                fontSize: "16px",
                margin: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/google-icon.svg`}
                  alt="google-icon"
                  style={{ marginTop: "3%" }}
                />
                <p style={{ marginTop: "4%" }}>Join with Google</p>
              </div>
            </button>
            <p
              style={{
                fontWeight: "inherit",
                fontSize: "16px",
                color: "#000",
                textAlign: "center",
              }}
            >
              New to LinkedIn?
              <span style={{ fontWeight: "bolder", color: "#0A66C2" }}>
                Join now
              </span>
            </p>
          </form>
        </div>
      </SignInContainer>
    );
  }
}
const mapToStateProps = (state) => ({
  loginObj: state.app.loginObj,
});

const mapToDispatchProps = (dispatch) => ({
  getLogin: () => dispatch(getLoginAuth()),
});

export default connect(mapToStateProps, mapToDispatchProps)(LoginComponent);

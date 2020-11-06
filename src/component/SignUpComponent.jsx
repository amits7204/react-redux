import React from "react";
import { SignUpContainer } from "./CustomStyledComponent";

export default class SignUpComponent extends React.Component {
  render() {
    return (
      <SignUpContainer>
        <img
          src={`${process.env.PUBLIC_URL}/linkedInLogo.svg`}
          height="32px"
          width="136px"
          style={{ marginTop: "15px" }}
          alt="company logo"
        />
        <p style={{ fontWeight: "inherit", fontSize: "32px" }}>
          Make the most of your professional life
        </p>
        <div
          style={{
            height: "436px",
            width: "397px",
            borderRadius: "6px",
            background: "#FFFFFF",
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
          >
            <label for="email" style={{ color: "grey", fontSize: "14px" }}>
              Email
            </label>
            <br />
            <input
              style={{
                marginTop: "5px",
                width: "100%",
                height: "26px",
                borderRadius: "4px",
                border: "1px solid grey",
              }}
              type="text"
              id="email"
              name="email"
            />
            <br />
            <br />
            <label for="pwd" style={{ color: "grey", fontSize: "14px" }}>
              Password (6 or more characters)
            </label>
            <br />
            <input
              style={{
                marginTop: "5px",
                width: "100%",
                height: "26px",
                borderRadius: "4px",
                border: "1px solid grey",
              }}
              type="password"
              id="pwd"
              name="password"
            />
            <p style={{ textAlign: "center", fontSize: "12px" }}>
              <span style={{ color: "grey" }}>
                By clicking Agree & Join, you agree to the LinkedIn{" "}
              </span>
              <span
                style={{
                  color: "#0A66C2",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                User Agreement, Privacy Policy
                <span
                  style={{
                    color: "grey",
                    fontWeight: "normal",
                  }}
                >
                  , and
                </span>{" "}
                Cookie Policy.
              </span>
            </p>
            <input
              style={{
                marginTop: "5px",
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
              value="Agree & Join"
            />
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
                style={{ background: "#fff", padding: "0 5px", color: "#000" }}
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
              Already on LinkedIn?{" "}
              <span style={{ fontWeight: "bolder", color: "#0A66C2" }}>
                Sign in
              </span>
            </p>
          </form>
        </div>
      </SignUpContainer>
    );
  }
}

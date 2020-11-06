import React from "react";
import { ProfileStuff, Banner } from "./CustomStyledComponent";
export default class ProfileComponent extends React.Component {
  render() {
    return (
      <>
        <ProfileStuff>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQG9qqM3l194ww/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=LSbTuHGnMnNlvzy76TErkGpZBlIqbik21uUyjGe7dZ8"
            alt="profile"
            style={{
              borderRadius: "50%",
              height: "70px",
              width: "70px",
              marginTop: "30px",
              border: "2px solid white",
            }}
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              marginTop: "25px",
            }}
          >
            <u>Amit Singh</u>
          </p>
          <p style={{ color: "grey", fontSize: "14px" }}>
            <small>Software Engineer</small>
          </p>
          <hr style={{ width: "100%" }}></hr>
          <p
            style={{
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              marginLeft: "10px",
              color: "GrayText",
            }}
          >
            Who viewed your profile
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "bold",
              marginLeft: "10px",
              color: "GrayText",
            }}
          >
            Views of your post
          </p>
          <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
            <p
              style={{
                color: "GrayText",
                textAlign: "left",
                margin: "0px",
                fontSize: "14px",
              }}
            >
              <small>Access exclusive tools & insights</small>
            </p>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "left",
                margin: "0px",
                fontSize: "12px",
              }}
            >
              Retry premium Free
            </p>
          </div>
          <hr style={{ width: "100%" }}></hr>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "left",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/865/865159.svg"
              alt="save"
              height="12px"
              width="12px"
              style={{ marginTop: "4px", marginRight: "4px" }}
            />
            <u>My items</u>
          </p>
        </ProfileStuff>
      </>
    );
  }
}
